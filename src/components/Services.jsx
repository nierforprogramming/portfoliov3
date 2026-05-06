import { services } from "../constants";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import TextReveal from "./TextReveal";

export default function Services() {
  return (
    <section id="services" className="space-y-8 py-20">
      <FadeUp>
        <SectionHeading title="Services" />
      </FadeUp>

      <TextReveal
        text={` Frontend-focused development services tailored for modern startups, SaaS
        platforms, and digital products.`}
        className="text-xl md:text-[24px] lg:text-[32px] font-medium"
      />

      {services.map((service, index) => (
        <FadeUp key={index} delay={index * 0.08}>
          <ServiceCard service={service} />
        </FadeUp>
      ))}
    </section>
  );
}
