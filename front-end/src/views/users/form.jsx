import React from 'react';
import { Field, reduxForm } from 'redux-form';

const UserForm = ({ handleSubmit, signup }) => (
  <form onSubmit={handleSubmit}>
    <label>
      <strong>Email&nbsp;</strong>
      <Field name="email" component="input" type="email" />
    </label>
    <br />
    <label>
      <strong>Password&nbsp;</strong>
      <Field name="password" component="input" type="password" />
    </label>
    <br />
    {signup
      && (
        <label>
          <strong>Confirm password&nbsp;</strong>
          <Field name="password-confirm" component="input" type="password" />
        </label>
      )}
    <button type="submit">Submit</button>
  </form>
);

export default reduxForm({})(UserForm);
