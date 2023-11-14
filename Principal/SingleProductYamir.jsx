import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nuevaapai from "../helpers/Apisingles.js";
import { useEffect } from "react";

const SingleProductYamir = () => {
  const { id } = useParams();
  const [Actual, setActual] = useState(undefined);

  useEffect(() => {
    Nuevaapai(`http://localhost:8000/item/${id}`)
      .then((data) => setActual(data))
      .catch((erros) => setActual(false));
  }, []);

  return (
    <>
      {Actual ? (
        <div className="CenterUff">
          <h1>{id}</h1>
          <h1>{Actual.name}</h1>
          <h1>{Actual.descripcion}</h1>
          <img
            style={{
              borderRadius: "5px",
            }}
            width={200}
            height={200}
            src={import.meta.env.VITE_BACKEND_URL + Actual.imagen}
          />
          <br></br>
          <strong> {Actual.precio} $ </strong>
          <br></br>
          <br></br>
          <button style={{

              padding:"2em",
              borderRadius:"5px",
              backgroundColor:"royalblue",
              border:"NONE",
              width:"300PX",
              color:"white",
              marginTop:"2em"

          }} >Comprar</button>
        </div>
      ) : (
        <h1>Noooooooooooooo</h1>
      )}
    </>
  );
};

export default SingleProductYamir;
