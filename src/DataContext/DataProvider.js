import { useReducer, useContext } from "react";
import DataContext from "./Context";
import { reducerFunction } from "./ReducerFunction";
import { products } from "../products.json";
const initialState = {
  products: products,
  cart: [],
  saveLater: [],
};

export const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <DataContext.Provider value={{ dataState, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
