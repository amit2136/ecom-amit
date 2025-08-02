'use client';

import { Button, Card, CardContent, Input, TextField } from '@mui/material';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function Login() {
  const route = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async function () {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      route.push('/profile');
    }
  };

  const onchangeHandler = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          onChange={onchangeHandler}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          onChange={onchangeHandler}
        />
        <Button variant="contained" onClick={handleLogin}>
          logIn
        </Button>
      </CardContent>
    </Card>
  );
}
