import React from 'react'
import Header from './Header'
import Home from './Home'
import PostDetails from './PostDetails'
import { Route,Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function App() {

  const postDetails = useSelector(state=>state.PostDetails)

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={"/item/"+postDetails.id} element={<PostDetails/>}/>
      </Routes>
    </div>
  )
}
