import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostItemPage() {

    const params = useParams()
    const [postItem, setPostItem] = useState(null)

    function getIndividualPostFromServer () {

        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}?_expand=user&_embed=comments`)
          .then(resp => resp.json())
          .then(postFromServer => setPostItem(postFromServer))
        
    }
    
    useEffect(getIndividualPostFromServer, [])

    if (postItem === null) {
        return <main>Loading...</main>
    }

    //@ts-ignore
    if (postItem.title === undefined) {
        return <main>Post item not found</main>
    }

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

                    <tr className="post-item">

                        <td>{postItem.id}</td>
                        <td>{postItem.title}</td>
                        <td>{postItem.body}</td>
                        <td>{postItem.user.username}</td>
                        <td>{postItem.user.email}</td>

                    </tr>

                </tbody>

            </table>

            <div className="post-comments">

                <ul className="ul-comments">

                    {
                        postItem.comments.map(comment => 
                            
                            <div className="comment-li">

                                <li className="comment">
                                    Title: {comment.name}
                                </li>

                                <li className="comment">
                                    Email: {comment.email}
                                </li>

                                <li className="comment">
                                    Body of comment: {comment.body}
                                </li>

                            </div>

                        )

                    }

                </ul>

            </div>

        </>

    )

}