"use client";

import { useState, type FormEvent } from "react";

export function SimpleForm({
  kind,
  labels,
}: {
  kind: "login" | "signup" | "contact" | "checkout";
  labels: { name: string; email: string; password: string; message: string; submit: string; signIn: string; signUp: string; demo: string };
}) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form className="simple-form" onSubmit={submit}>
      {(kind === "signup" || kind === "contact" || kind === "checkout") && <label>{labels.name}<input name="name" required autoComplete="name" /></label>}
      <label>{labels.email}<input name="email" type="email" required autoComplete="email" /></label>
      {(kind === "login" || kind === "signup") && <label>{labels.password}<input name="password" type="password" required minLength={8} autoComplete={kind === "login" ? "current-password" : "new-password"} /></label>}
      {kind === "contact" && <label>{labels.message}<textarea name="message" required rows={5} /></label>}
      <button className="pill-button" type="submit">{kind === "login" ? labels.signIn : kind === "signup" ? labels.signUp : labels.submit}</button>
      {sent && <p className="form-note" role="status">{labels.demo}</p>}
    </form>
  );
}
