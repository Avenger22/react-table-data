import { useState, useEffect } from "react"
import Post from "../Components/Post"

export default function PostsPage() {

    const [posts, setPosts] = useState([])
  
    function getPostsFromServer() {
      fetch('https://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments')
      .then(response => response.json())
      .then(postsArray => setPosts(postsArray))
    }
  
    // @ts-ignore
    useEffect(getPostsFromServer, [])
  
    return (
  
      <>
  
        <table className='table-data'>
  
          <thead>
  
            <tr>
  
                <th>Nr</th>
                <th>Title</th>
                <th>Body</th>
                <th>Username</th>
                <th>Email</th>
  
              </tr>
  
          </thead>
  
          <tbody>
  
            {
  
              posts.map(post => 
                
                <Post 
                  post = {post}
                  key = {post.id}
                />
  
              )
  
            }
  
          </tbody>
  
        </table>
      
      </>
  
    )

}