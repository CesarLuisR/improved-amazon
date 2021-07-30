import TYPES from "./actions";

const reducer = (state: object, action: { type: string; payload: any }) => {
  switch (action.type) {
    case TYPES.REGISTER:
      return { ...state, user: action.payload };

    case TYPES.PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default reducer;
