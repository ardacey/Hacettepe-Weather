import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex justify-center bg-white z-10 opacity-80">
      Made with ❤️ by &nbsp;
      <Link href="https://ardaceylan.net" target="_blank" className="hover:bg-slate-600 rounded-sm">
        Arda Ceylan
      </Link>
    </footer>
  );
}

export { Footer };