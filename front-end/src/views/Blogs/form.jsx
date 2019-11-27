import React from 'react'
import { Field, reduxForm } from 'redux-form'

const BlogForm = (props) => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>{/* form body*/}</form>
}

export default reduxForm({ form: 'blog' })(BlogForm)
