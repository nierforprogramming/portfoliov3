import { services } from "../constants";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="space-y-8 py-20">
      <SectionHeading title="Services" />

      <h2 className="text-xl md:text-[24px] lg:text-[32px] font-medium">
        Frontend-focused development services tailored for modern startups, SaaS
        platforms, and digital products.
      </h2>

      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
}
