interface ITypes {
  REGISTER: string;
  PRODUCTS: string;
  SEARCH: string;
}

const TYPES: ITypes = {
  REGISTER: "REGISTER",
  PRODUCTS: "PRODUCTS",
  SEARCH: "SEARCH"
};

export const registerAction = (value: object) => {
  return {
    type: TYPES.REGISTER,
    payload: value,
  };
};

export const productAction = (value: object[]) => {
  return {
    type: TYPES.PRODUCTS,
    payload: value,
  };
};

export const searchAction = (value: object) => {
  return {
    type: TYPES.SEARCH,
    payload: value
  }
}

export default TYPES;
