import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function useSubscribe(source: string) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submit() {
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (res.ok && data?.ok) {
        setStatus("success");
        return;
      }

      setStatus("error");
      setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return { email, setEmail, status, errorMessage, submit };
}
