import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { mainBackgroundColor } from "../../consts/colors";
import { useCreateUser } from "../../hooks/user";
import { LOGIN_PATH } from "../../routes/consts";

const validationSchema = Yup.object().shape({
  nickname: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

const Register = () => {
  const navigate = useNavigate();

  const { mutateAsync: createUser } = useCreateUser();

  const handleSubmit = (values) => {
    const { confirm_password, ...user } = values;
    createUser(user)
      .then(() => {
        navigate(LOGIN_PATH);
      })
      .catch((error) => {
        console.error("failed to create user", error);
      });
  };

  return (
    <PageContainer>
      <Formik
        initialValues={{
          nickname: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <h1>Register</h1>
            <RowContainer>
              <FormikInput type="text" name="nickname" placeholder="Nickname" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="password" name="password" placeholder="Password" />
            </RowContainer>
            <RowContainer>
              <FormikInput type="password" name="confirmPassword" placeholder="Confirm Passsword" />
            </RowContainer>
            <RowContainer>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              <span onClick={() => navigate(LOGIN_PATH)}>LogIn</span>
            </RowContainer>
          </StyledForm>
        )}
      </Formik>
    </PageContainer>
  );
};

export default Register;

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
