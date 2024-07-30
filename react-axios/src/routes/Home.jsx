/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
import blogFecth from '../Axios/config'
const Home = () => {

  const [posts, setPosts] = useState([])

  const getPost = async() => {

    try {
      const responce = await blogFecth.get('/posts');
      
      const data = responce.data;
      setPosts(data);
      
    } catch (erro) {
      console.log(erro);
    }    

  }

  useEffect(() => {
    getPost();

  }, [])

  return(
    <div className='home'>
      <h1>Últimos posts</h1>
      {posts.length ===0 ? 
        <p>Carregando...</p>: (

          posts.map((post) =>(

            <div className='post' key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} className='btn'>Ler mais...</Link>

            </div>

          ))

        )}     
                        
    </div>
  )
  
}

export default Home