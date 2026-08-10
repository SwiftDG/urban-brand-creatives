"use client";

import { useState, type FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { services } from "@/lib/data/services";
import { countries, hearAboutOptions } from "@/lib/data/formOptions";
import type { ContactSubmission } from "@/lib/data/contactSubmission";

const needOptions = [...services.map((service) => service.name), "Not sure yet"];

const initialFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  need: "",
  message: "",
  hearAboutUs: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-button border border-silver-light bg-white px-4 py-3 text-sm text-black placeholder:text-silver focus:border-orange-red focus:outline-none";

export function ContactForm() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const submission: ContactSubmission = {
      ...formValues,
      createdAt: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "contactSubmissions"), submission);
      setStatus("success");
      setFormValues(initialFormState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-card border border-silver-light bg-white p-10">
        <h3 className="font-display text-2xl">Message sent.</h3>
        <p className="mt-3 text-sm text-black/70">
          Thanks for reaching out. Someone from our team will get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-silver">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formValues.name}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="company" className="text-xs uppercase tracking-widest text-silver">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={formValues.company}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-silver">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formValues.email}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs uppercase tracking-widest text-silver">
            Phone <span className="normal-case text-silver/70">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formValues.phone}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="country" className="text-xs uppercase tracking-widest text-silver">
            Country
          </label>
          <select
            id="country"
            name="country"
            required
            value={formValues.country}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="need" className="text-xs uppercase tracking-widest text-silver">
            What do you need?
          </label>
          <select
            id="need"
            name="need"
            required
            value={formValues.need}
            onChange={handleChange}
            className={`mt-2 ${inputClasses}`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-silver">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formValues.message}
          onChange={handleChange}
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="hearAboutUs" className="text-xs uppercase tracking-widest text-silver">
          How did you hear about us?
        </label>
        <select
          id="hearAboutUs"
          name="hearAboutUs"
          value={formValues.hearAboutUs}
          onChange={handleChange}
          className={`mt-2 ${inputClasses}`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {hearAboutOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-orange-red">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-button bg-orange-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-red-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
