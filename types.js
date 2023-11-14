export const acciones = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CARGA: "CARGA",
};

export const REDUCER = (state, action) => {
  if (action.type == acciones.ADD) {
    console.log(action);
  }
  if (action.type == acciones.CARGA) {
    const lista = action.paylodad;
    return { ...state, lista };
  }

  return state;
};
