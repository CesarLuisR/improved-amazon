interface ITypes {
  REGISTER: string
}

const TYPES: ITypes = {
  REGISTER: "REGISTER",
}

export const registerAction = (value: object) => {
  return {
    type: TYPES.REGISTER,
    payload: value
  }
}

export default TYPES