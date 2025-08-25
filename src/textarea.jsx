import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 ${className}`}
      {...props}
    />
  );
}
