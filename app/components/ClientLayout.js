// app/components/ClientLayout.js (client component)
"use client";

import { useEffect, useState } from "react";
import PortfolioNavbar from "./navbar";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader-gif"></div>
      </div>
    );
  }

  return (
    <>
      <PortfolioNavbar />
      {children}
    </>
  );
}
