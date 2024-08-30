import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h2 className="title">Let&apos;s talk about your project</h2>

        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
