import React from "react";

const Service = ({ singleService }) => {
  const { name, img, price, description } = singleService;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text" title={description}>
            {description.length > 200
              ? description.slice(0, 200) + "..... See More"
              : description}
          </p>
          <button className="btn btn-primary py-2 w-100 mx-auto">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
