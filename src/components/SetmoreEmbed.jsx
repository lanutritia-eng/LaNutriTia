"use client";
import { useEffect } from "react";

export default function SetmoreEmbed({ href }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.setmore.com/js/setmore_iframe.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <iframe
        title="Agenda en Setmore"
        src={href}
        className="w-full h-[520px]"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
