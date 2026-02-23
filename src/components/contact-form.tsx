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
    <form onSubmit={onSubmit} className="space-y-5">
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
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-electric-cyan/80">
            Name
          </span>
          <input
            required
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="rounded-md border border-tech-border bg-tech-surface/50 px-4 py-2.5 font-mono text-sm text-white outline-none transition-all focus:border-electric-cyan/60 focus:bg-tech-surface focus:shadow-glow"
            placeholder="John Doe"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-electric-cyan/80">
            Email
          </span>
          <input
            required
            type="email" 
            name="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="rounded-md border border-tech-border bg-tech-surface/50 px-4 py-2.5 font-mono text-sm text-white outline-none transition-all focus:border-electric-cyan/60 focus:bg-tech-surface focus:shadow-glow"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-electric-cyan/80">
          Company <span className="text-gray-500">(Optional)</span>
        </span>
        <input
          type="text"
          name="company"
          value={values.company}
          onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
          className="rounded-md border border-tech-border bg-tech-surface/50 px-4 py-2.5 font-mono text-sm text-white outline-none transition-all focus:border-electric-cyan/60 focus:bg-tech-surface focus:shadow-glow"
          placeholder="Acme Inc"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-electric-cyan/80">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="rounded-md border border-tech-border bg-tech-surface/50 px-4 py-2.5 font-mono text-sm leading-relaxed text-white outline-none transition-all focus:border-electric-cyan/60 focus:bg-tech-surface focus:shadow-glow"
          placeholder="Tell me about your project..."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex items-center justify-center gap-2 rounded-md border border-electric-cyan/40 bg-electric-cyan/10 px-6 py-3 font-mono text-sm font-semibold text-electric-cyan transition-all hover:bg-electric-cyan/20 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="transition-transform group-hover:translate-x-0.5">›</span>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.kind !== "idle" ? (
        <div className={`rounded-md border px-4 py-3 font-mono text-sm ${
          status.kind === "success" 
            ? "border-electric-green/40 bg-electric-green/10 text-electric-green" 
            : "border-red-500/40 bg-red-500/10 text-red-400"
        }`}>
          {status.message}
        </div>
      ) : null}
    </form>
  );
}
