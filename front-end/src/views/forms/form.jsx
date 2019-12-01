import React from 'react';
import { Field, reduxForm } from 'redux-form';

const BlogForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      <strong>Title&nbsp;</strong>
      <Field name="title" component="input" type="text" />
    </label>
    <br />
    <label>
      <strong>Content&nbsp;</strong>
      <Field name="content" component="textarea" type="text" />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
);

export default reduxForm({})(BlogForm);
