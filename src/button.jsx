import React from "react";

export function Button({ children, variant = "default", size = "md", ...props }) {
  let base = "rounded-2xl px-4 py-2 font-medium transition shadow";
  let variants = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border border-zinc-300 hover:bg-zinc-100",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    destructive: "bg-red-600 text-white hover:bg-red-700"
  };
  let sizes = { sm: "text-sm px-3 py-1.5", md: "text-base", lg: "text-lg px-6 py-3" };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
}
