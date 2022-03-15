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

        <div className="table-wrapper">

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

            <table className="post-comments">

                <thead>

                    <tr>

                        <th>Post Nr</th>
                        <th>Comment Nr</th>
                        <th>Comment Title</th>
                        <th>Comment Body</th>
                        <th>Comment Email</th>
                        <th>Username</th>

                    </tr>

                </thead>

                <tbody className="ul-comments">

                    {
                        postItem.comments.map(comment => 
                            
                            <tr className="comment-li">

                                <td className="comment">
                                    {postItem.id}
                                </td>

                                <td className="comment">
                                    {comment.id}
                                </td>

                                <td className="comment">
                                    {comment.name}
                                </td>
                                <td className="comment">
                                    {comment.body}
                                </td>

                                <td className="comment">
                                    {comment.email}
                                </td>

                                <td className="comment">
                                    {postItem.user.username}
                                </td>

                            </tr>

                        )

                    }

                </tbody>

            </table>

        </div>

    )

}