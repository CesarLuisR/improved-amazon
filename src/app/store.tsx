import { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";

const initialState: any = {
  cart: [],
  products: [],
  search: {
    toSearch: "",
    category: "",
  },
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

export const useStore = () => useContext(StoreContext)[0];
export const useDispatch = () => useContext(StoreContext)[1];

export default StoreProvider;
