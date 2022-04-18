import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ singleService }) => {
  const { id, name, img, price, description } = singleService;
  const navigate = useNavigate();
  const navigateServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            Price : <span className="fw-bold">${price}</span>
          </p>
          <p className="card-text" title={description}>
            {description.length > 200
              ? description.slice(0, 200) + "..... See More"
              : description}
          </p>
          <button
            onClick={() => navigateServiceDetail(id)}
            className="btn btn-primary py-2 w-100 mx-auto"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
