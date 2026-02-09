"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: ""
};

type Status = {
  kind: "idle" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ kind: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({
          kind: "error",
          message: data.error ?? "Could not send your message. Please try again."
        });
        return;
      }

      setStatus({
        kind: "success",
        message: "Message sent. Thanks for reaching out."
      });
      setValues(INITIAL_VALUES);
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again in a moment."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(event) => setValues((prev) => ({ ...prev, website: event.target.value }))}
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-200">
          Name
          <input
            required
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-zinc-700/70 bg-zinc-900/70 px-3 py-2.5 text-zinc-100 outline-none transition focus:border-emerald-400"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-200">
          Email
          <input
            required
            type="email" 
            name="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-zinc-700/70 bg-zinc-900/70 px-3 py-2.5 text-zinc-100 outline-none transition focus:border-emerald-400"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-zinc-200">
        Company (optional)
        <input
          type="text"
          name="company"
          value={values.company}
          onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
          className="w-full rounded-xl border border-zinc-700/70 bg-zinc-900/70 px-3 py-2.5 text-zinc-100 outline-none transition focus:border-emerald-400"
          placeholder="Company name"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-zinc-200">
        Message
        <textarea
          required
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-zinc-700/70 bg-zinc-900/70 px-3 py-2.5 text-zinc-100 outline-none transition focus:border-emerald-400"
          placeholder="Tell me about your project or role."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.kind !== "idle" ? (
        <p className={`text-sm ${status.kind === "success" ? "text-emerald-300" : "text-rose-300"}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
