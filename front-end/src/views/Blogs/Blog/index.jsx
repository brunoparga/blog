import React from 'react'

export default function({ data }) {
  return(
    <div className="blog">
      <h3>{data.title}</h3>
      <p>{data.content}</p>
    </div>
  )
}
