import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { mainBackgroundColor } from "../../consts/colors";
import { HOME_PATH, REGISTER_PATH } from "../../routes/consts";
import { useLoginUser } from "../../hooks/user";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const validationSchema = Yup.object().shape({
  nickname: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const { mutateAsync: loginUser } = useLoginUser();

  const handleSubmit = (values) => {
    loginUser(values)
      .then((response) => {
        setUser(response);
        navigate(HOME_PATH);
      })
      .catch((error) => {
        console.log("Failed to login:", error);
      });
  };

  return (
    <PageContainer>
      <Formik
        initialValues={{
          nickname: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <h1>Login</h1>
            <RowContainer>
              <FormikInput type="text" name="nickname" placeholder="Nickname" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="password" name="password" placeholder="Password" />
            </RowContainer>
            <RowContainer>
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
              <span onClick={() => navigate(REGISTER_PATH)}>Sign Up</span>
            </RowContainer>
          </StyledForm>
        )}
      </Formik>
    </PageContainer>
  );
};

export default Login;

const PageContainer = styled.div`
  ${mainBackgroundColor}
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 16px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    margin-top: 15px;
    align-self: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
