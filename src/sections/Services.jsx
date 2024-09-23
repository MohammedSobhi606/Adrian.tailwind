import { services } from "../constants";
import ServicesCard from "../myComponents/ServicesCard";

const Services = () => {
  return (
    <div
      className="flex  justify-center gap-9 max-container
flex-wrap"
    >
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;
