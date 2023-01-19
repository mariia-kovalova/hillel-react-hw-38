import { ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const Button = styled.button`
  max-width: fit-content;
  margin: 0 auto 10px;
  padding: 0.5rem 1rem;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  margin-bottom: 10px;
`;
