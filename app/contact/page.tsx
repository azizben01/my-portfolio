import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="container-x py-14 sm:py-20">
      <ContactSection headingLevel="h1" />
    </div>
  );
}
