import React from "react";

function About(props){
  const about = props.about;
  const image = props.image? props.image : "https://via.placeholder.com/215";

  return (
  <aside>
    <img src = {image} alt = "blog logo" />
    <p>{about}</p>
  </aside>
  )
}

export default (About)