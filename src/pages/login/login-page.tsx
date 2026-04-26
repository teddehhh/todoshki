import type { FormEvent } from "react";

export function LoginPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userForm = new FormData(e.currentTarget);
    const userData = {
      email: userForm.get("email"),
      password: userForm.get("password"),
    };

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email"></input>
      <input name="password" type="password"></input>
      <button>Войти</button>
    </form>
  );
}
