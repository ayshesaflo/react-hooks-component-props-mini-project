import React from "react";
import Article from "./Article"
function ArticleList(props){
console.log(props.posts)

const posts = (props.posts).map((post) =>{
 return  <Article
        key = {post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
     />
})
  return (
  <main>
    {posts}
  </main>
  )
}

export default (ArticleList)