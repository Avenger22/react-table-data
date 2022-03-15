import {Routes, Route, Navigate} from 'react-router-dom'
import PostsPage from "./Pages/PostsPage"
import './App.css'
import PostItemPage from './Pages/PostItemPage'

function App() {

  return (

    <>

      <Routes>

        <Route 
            index 
            element={<Navigate replace to="/posts" />} 
        />

        <Route 
          path = "/posts" 
          element = {<PostsPage />}>
        </Route>

        <Route 
            path = "/posts/:id" 
            element = {<PostItemPage />}>
        </Route>

      </Routes>
    
    </>

  )

}

export default App