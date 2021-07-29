import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #060608;
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 30rem;
  align-items: center;
  margin-top: 5rem;
`;

export const ImageContainer = styled.div` 
  width: 40%;
`;

export const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 15rem;
`;

export const Input = styled.input`
  background-color: #232f3e;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: 0.5px solid #616161;
  border-radius: 0.7rem;
  color: #b6b1ad;
  font-size: 0.9rem;
  font-family: "Noto Sans JP", sans-serif;
  outline: none;

  &::placeholder {
    color: #b6b1ad;
  }
`;

export const SubmitButton = styled.input.attrs((props) => ({
  type: "submit",
}))`
  background-color: #f15603;
  width: 8rem;
  height: 3rem;
  border: 0.5px solid #616161;
  border-radius: 0.7rem;
  color: #ecebef;
  font-size: 0.9rem;
  font-family: "Noto Sans JP", sans-serif;
  outline: none;
  cursor: pointer;
`;
