import { Link, useNavigate, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <Link to={"/checkout"}>
        <button className="btn btn-primary my-5 mx-auto d-block">
          Procced checkOut
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
