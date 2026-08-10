import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Urban Brand Creatives about your brand's next chapter.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's build something that travels."
        description="Tell us a bit about your brand and what you're looking for. We'll follow up within one business day."
      />
      <section className="py-section-gap">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactDetails />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
