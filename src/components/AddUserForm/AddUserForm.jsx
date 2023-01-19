import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Error } from '../../GlobalStyles.styled';

export function AddUserForm({ setModalOpen }) {
  const handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    resetForm();
    setModalOpen(false);
  };

  const initialValues = {
    name: '',
    username: '',
    phone: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().required(),
    phone: yup.string().required(),
  });

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <Error component="div" name="name" />
          </div>
          <div>
            <label htmlFor="lastName">User name</label>
            <Field type="text" name="username" id="lastName" />
            <Error component="div" name="username" />
          </div>
          <div>
            <label htmlFor="pnone">Pnone number</label>
            <Field type="text" name="phone" id="pnone" />
            <Error component="div" name="phone" />
          </div>
          <Button type="submit">Save</Button>
          <Button
            className="secondary"
            type="button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

AddUserForm.prototype = {
  setModalOpen: PropTypes.func.isRequired,
};
