const details = [
  {
    label: "Email",
    value: "hello@urbanbrandcreatives.com",
  },
  {
    label: "Phone",
    value: "+234 (0) 000 000 0000",
  },
  {
    label: "Studios",
    value: "Lagos · Nairobi · Johannesburg",
  },
];

export function ContactDetails() {
  return (
    <div className="rounded-card bg-black p-10 text-white">
      <p className="font-accent italic text-lg text-silver-light">
        Let&apos;s Talk
      </p>
      <h3 className="mt-4 font-display text-3xl">
        Tell us where your brand needs to go.
      </h3>
      <p className="mt-4 text-sm text-silver-light">
        Whether you&apos;re ready for a full retainer or just exploring a
        single project, we&apos;ll respond within one business day.
      </p>

      <dl className="mt-10 space-y-6">
        {details.map((detail) => (
          <div key={detail.label}>
            <dt className="text-xs uppercase tracking-widest text-silver">
              {detail.label}
            </dt>
            <dd className="mt-1 text-base">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex gap-6 text-sm">
        <a href="/" className="hover:text-orange-red transition-colors">
          Instagram
        </a>
        <a href="/" className="hover:text-orange-red transition-colors">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
