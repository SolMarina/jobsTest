import React from "react";
export default function CardList(data) {
  let dataArray = data.data;

  return (
    <div>
      {dataArray.map((card) => (
        <div
          className="card border-primary mb-3"
          style={{ maxWidth: "18rem", marginBottom: "30px" }}
        >
          <div className="card-header">Jobs</div>
          <div className="card-body text-primary">
            <h5 className="card-title">{card.company}</h5>
            <p className="card-text">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
