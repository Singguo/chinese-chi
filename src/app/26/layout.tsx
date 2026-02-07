import type { ReactNode } from "react";

import { Legacy26Footer } from "@/components/Legacy26Footer";
import { Legacy26Header } from "@/components/Legacy26Header";
import "./ichec-26.css";

export default function Legacy26Layout({ children }: { children: ReactNode }) {
  return (
    <div className="ichec-26-theme">
      <Legacy26Header />
      <main id="content" role="main" className="ichec-26-main">
        {children}
      </main>
      <Legacy26Footer />
    </div>
  );
}
