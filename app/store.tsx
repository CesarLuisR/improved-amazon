import { createContext, useReducer } from "react";
import reducer from "./reducers";

const initialState: object = {
  car: [],
  products: []
};

const StoreContext = createContext(initialState);

type ProviderProps = (props: { children: JSX.Element }) => React.ReactElement;

const StoreProvider: ProviderProps = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
