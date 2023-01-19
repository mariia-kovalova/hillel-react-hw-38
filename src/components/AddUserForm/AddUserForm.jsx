import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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

  const Error = styled(ErrorMessage)`
    color: red;
    margin-bottom: 10px;
  `;

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
          <div className="grid">
            <button type="submit">Save</button>
            <button
              type="button"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

AddUserForm.prototype = {
  setModalOpen: PropTypes.func.isRequired,
};
