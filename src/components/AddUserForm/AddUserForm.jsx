import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Button, Error } from '../../GlobalStyles.styled';
import { FormStyled, Label } from './AddUserForm.styled';

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

export function AddUserForm({ onSubmit, onCloseModal }) {
  function handleSubmit(values, { resetForm }) {
    onSubmit(values);
    resetForm();
  }

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <div>
            <Label htmlFor="name">Name</Label>
            <Field type="text" name="name" id="name" />
            <Error component="div" name="name" />
          </div>
          <div>
            <Label htmlFor="lastName">User name</Label>
            <Field type="text" name="username" id="lastName" />
            <Error component="div" name="username" />
          </div>
          <div>
            <Label htmlFor="pnone">Pnone number</Label>
            <Field type="text" name="phone" id="pnone" />
            <Error component="div" name="phone" />
          </div>
          <Button type="submit">Save</Button>
          <Button
            className="secondary"
            type="button"
            onClick={() => onCloseModal()}
          >
            Cancel
          </Button>
        </FormStyled>
      </Formik>
    </div>
  );
}

AddUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
