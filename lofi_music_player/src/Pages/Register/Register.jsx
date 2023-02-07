import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../routes/consts";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      const { nickname, password } = values;
      const requiredValues = { nickname, password };
      alert(JSON.stringify(requiredValues, null, 2));
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <div>
      <Formik
        initialValues={{
          nickname: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.nickname) {
            errors.nickname = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (values.password !== values.confirmPassword || !values.confirmPassword) {
            errors.confirmPassword = `Confirm Password Field is Empty, or Password doesn't match`;
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="nickname"></Field>
              <ErrorMessage name="nickname" component="div"></ErrorMessage>
            </div>
            <div>
              <Field type="password" name="password"></Field>
              <ErrorMessage name="password" component="div"></ErrorMessage>
            </div>
            <div>
              <Field type="password" name="confirmPassword"></Field>
              <ErrorMessage name="confirmPassword" component="div"></ErrorMessage>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
              <span onClick={() => navigate(LOGIN_PATH)}>LogIn</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
