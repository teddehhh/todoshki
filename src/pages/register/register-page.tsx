import type { FormEvent } from "react";

export function RegisterPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userForm = new FormData(e.currentTarget);
    const userData = {
      username: userForm.get("username"),
      email: userForm.get("email"),
      password: userForm.get("password"),
    };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text"></input>
      <input name="email" type="email"></input>
      <input name="password" type="password"></input>
      <button>Зарегистрироваться</button>
    </form>
  );
}
