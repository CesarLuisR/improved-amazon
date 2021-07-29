import TYPES from "./actions";

const reducer = (state: object, action: { type: string; payload: any }) => {
  switch (action.type) {
    case TYPES.REGISTER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;
