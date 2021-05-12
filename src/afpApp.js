import React, { useEffect, useState } from "react";
import CardList from "./components/afp/AfpCapital";
import reqCompany from "./api/reqCompany";
import "./afpApp.css"

export default function AfpApp () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    reqCompany
      .get("/positions.json?description=api")
      .then((resp) => {
        setData(resp.data);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  const handleLoading = () => {
    if (isLoading) {
      return (
        <div>
          <h3>Cargando...</h3>
        </div>
      );
    } else {
      return (
        <div>
          <div className="app">
          <CardList data={data} />
          </div>
        </div>
      );
    }
  };

  return handleLoading();
};
