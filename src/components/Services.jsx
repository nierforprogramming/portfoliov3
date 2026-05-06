import { services } from "../constants";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="space-y-5 py-20">
      <SectionHeading title="Services" />
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
}
