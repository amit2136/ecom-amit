"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";


export default function LoginButton() {
  const route = useRouter();

  const handleClick = () => {
    route.push("/login");
  };

  return (
    <div>
      <Button color="inherit"  onClick={handleClick}>LOG IN</Button>
    </div>
  );
}
