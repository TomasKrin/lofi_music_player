import styled from "styled-components";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../routes/consts";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Buttons = ({ onClick }) => {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <Container>
      {isLoggedIn ? <h1>Welcome {user.nickname}</h1> : <h1>Welcome to LoFi music player!</h1>}

      <ButtonContainer>
        <Button style={{ marginRight: `20px` }} onClick={onClick}>
          {isLoggedIn ? <span>Start Listening!</span> : <span>Start Listening As Guest!</span>}
        </Button>
        {!isLoggedIn && <Button onClick={() => navigate(LOGIN_PATH)}>Login</Button>}
      </ButtonContainer>
    </Container>
  );
};

export default Buttons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
