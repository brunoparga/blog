import React from 'react';
import { Field, reduxForm } from 'redux-form';

const BlogForm = (props) => {
  const { handleSubmit } = props;
  return (
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ form: 'blog' })(BlogForm);
