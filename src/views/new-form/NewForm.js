import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../new-form/newForm.scss'

import TheButton from '../../components/button/TheButton'

const NewForm = () => {
const [title, setTitle] = useState("")
const [text, setText] = useState("")

const hendleSubmit = (e) => {
  e.preventDefault();
  const newArticle = {
    title,
    text
  }
  axios.post('https://my-json-server.typicode.com/Naiio97/demo/myArticles')
}
 
  return (
    <div>
        <div className="new-form">
        <form
          className="new-article"
          onSubmit={hendleSubmit}>
            <div className="header-but">
                <h1>Create new article</h1>
                <TheButton type="submit" />
            </div>
            <div className="article-title">
              <span>Article Title</span> <br />
                <input
                      type="text"
                      className="form-control"
                      // value="Email"
                      >
                </input>
            </div>  
        
            <div className="uploade-img">
              <span>Featured image</span>
              <TheButton />
            </div>
            <div className="content">
              <span>Content</span>
                <textarea
                      type="textarea"
                      className="form-control"
                      rows="50"
                      cols="150"
                      // value="Email"
                >
              </textarea>
            </div>
        </form>
    </div>
  )
    </div>
  )
}

export default NewForm