import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { REGISTER_PATH } from "../../routes/consts";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
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
        }}
        validate={(values) => {
          const errors = {};

          if (!values.nickname) {
            errors.nickname = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          console.log(errors);
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
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              <span onClick={() => navigate(REGISTER_PATH)}>Register</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
