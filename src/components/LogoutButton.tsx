"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";


export default function LogoutButton() {
  const routes = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });
    const data = await response.json();
    if (data.success) {
      routes.push("/");
    }
  };
  return (
    <div>
        <Button color="inherit" onClick={handleLogout}>LOG OUT</Button>
    </div>
  );
}
