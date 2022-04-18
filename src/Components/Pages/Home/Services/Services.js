import React from "react";
import useServices from "../../../Shared/useServices";
import Service from "./Service/Service";

const Services = () => {
  const [service, setService] = useServices([]);
  return (
    <div id="services">
      <h2 className="text-primary fw-bold text-center mt-5">Our Services</h2>
      <div className="container row row-cols-1 row-cols-md-2 g-4 mt-5 mx-auto">
        {service.map((s) => (
          <Service key={s.id} singleService={s}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
