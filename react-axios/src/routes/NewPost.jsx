/* eslint-disable no-unused-vars */

import {React} from 'react'
import "./NewPost.css"
import blogFetch from "../Axios/config";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const NewPost = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async(e) => {
    e.preventDefault();

    const post =  {title, body, userId: 1};
    await blogFetch.post("/posts", {

      body: post,

    })
    
    navigate("/");  

  };
  return (
    <div className="new-post">
      <h2>Inserir novo post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text"
           name="title"
            id="title"
             placeholder="Digite um título"
             onChange={(e) => setTitle(e.target.value)}
             />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea name="body" id="body" placeholder="Digite o conteúdo" 
           onChange={(e) => setBody(e.target.value)}></textarea>
          <input type="submit" value="Criar post" className="btn" 
         />
          
        </div>
      </form>
    </div>
  )
}

export default NewPost