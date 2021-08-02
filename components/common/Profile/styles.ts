import styled from "styled-components";

export const ProfileWrapper = styled.div`
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgb(255, 153, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 100%;
  border: 3px solid rgb(22, 29, 38);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(34, 48, 64);
`;

export const AvatarImage = styled(Avatar)` 
  overflow: hidden;
`;

export const AvatarLetter = styled(Avatar)`
  color: rgb(255, 254, 229);
  font-family: "Noto Sans JP", sans-serif;
  font-size: 2rem;
`;