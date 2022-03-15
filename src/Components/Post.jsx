import { useNavigate } from "react-router-dom"

export default function Post({post}) {

    const navigate = useNavigate()
    
    function handlePostClick(post) {
        navigate(`/posts/${post.id}`)
    }

    return (

        <>

            <tr className="post-item" onClick={() => {
                handlePostClick(post)
            }}>

                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.user.username}</td>
                <td>{post.user.email}</td>

            </tr>

        </>

    )

}