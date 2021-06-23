import React from "react";

function Article(props){
console.log(props.title)
// console.log(props.title)
// console.log(props.date)
// console.log(props.preview)
// console.log(props.minutes)
const data = props.date ? props.date : "January 1, 1970"

  return (
  <article>
      <h3>{props.title}</h3>
      <small>{data}</small>
      <p>{props.preview}{props.minutes}</p>
  </article>
  )
}

export default (Article)