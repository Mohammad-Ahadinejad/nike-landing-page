import { services } from "@/constants/index";
import ServiceCard from "@/modules/ServiceCard";
import React from "react";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {
        services.map((service)=>(
          <ServiceCard key={service.label} {...service} />
        ))
      }
    </section>
  );
};

export default Services;
