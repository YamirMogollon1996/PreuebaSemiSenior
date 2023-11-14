import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import carrito from "../assets/cart.svg";
import "../Component4/Todo.css";
import axios from "axios";
import { ContextoGlobalYamir } from "./contextoglobal/contextoGlobal";
import { acciones } from "./types";


const PruebaSemisenor = () => {
  
    const navigate =  useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  const estado = useContext(ContextoGlobalYamir);
  const { state, dispatch } = useContext(ContextoGlobalYamir);
  const [first, setfirst] = useState([])

  
  //todo Documento Filtrado en el contexto global and copiar y hacer seguridad Seria
  //todo Fishing



  const OnclickforNavigate =  (  item )=>{
        navigate(`/item/${item.id}`)

  }
  const obtnerQueryParmas = ()=>{

      const data  =   searchParams.get("item")
       setfirst(state.lista?.filter((item) => item.name.includes(data)));    
     
  }

  const Cambiareinpiut = (e) => {
    setSearchParams({ item: e.target.value });
  };
  const FechingData = async () => {
    const first = await axios.get("http://localhost:8000/data");
    const secondo = await first.data;
    dispatch({
      type: acciones.CARGA,
      paylodad: secondo,
    });
  };

  useEffect(() => {
    FechingData();
    console.log(import.meta.env.VITE_BACKEND_URL);
  }, []);
  useEffect(() => {
  
    if (estado.lista?.length !=  0  ) {  
          obtnerQueryParmas()
    }
  
  }, [searchParams]);
  return (
    <>
      <div className="Jis">
        <div className="center_up">
          <div className="FontainerCenter">
            <img width={200} height={200} src={carrito}></img>
            <h1>Bazar OnLine</h1>
            <div className="centerD">
              <br></br>
              <br></br>
              <input
                onChange={Cambiareinpiut}
                placeholder="producot"
                className="Los"
              ></input>
              <button className="buton">buscar</button>
              <h1> Resultados de las busuqedad : {searchParams.get("item")}</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <hr></hr> */}
      
      <div>

        
      </div>
      {first != undefined ? (


        first.map((item) => (
          <div onClick={  ()=>OnclickforNavigate(item)} className="marvel">
            <h1>{item.name}</h1>
            <p>{item.descripcion}</p>
            <img
              style={{
                borderRadius: "5px",
              }}
              width={200}
              height={200}
              src={import.meta.env.VITE_BACKEND_URL + item.imagen}
            />
            <br></br>
            <strong> {item.precio} $</strong>
             
          </div>
        
        
        ))
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default PruebaSemisenor;
