import ContactForm from "@/components/contact-form/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="md:flex gap-[6rem] w-full">
      <section className="hidden flex-1 lg:flex relative h-full w-1/2">
        <Image
          src="/contact.png"
          fill
          alt="hero gif"
          className="object-fill xl:object-contain"
        />
      </section>

      <section className="flex-1">
        <ContactForm />
      </section>
    </div>
  );
}
