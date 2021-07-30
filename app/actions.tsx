interface ITypes {
  REGISTER: string;
  PRODUCTS: string;
}

const TYPES: ITypes = {
  REGISTER: "REGISTER",
  PRODUCTS: "PRODUCTS",
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

export default TYPES;
