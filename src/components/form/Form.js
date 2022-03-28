import React from 'react'
import TheButton from '../../components/button/TheButton'

import '../form/form.scss'

const Form = () => {
  return (
    <div className="form">
        <form className="new-article">
            <div className="header-but">
                <h1>Create new article</h1>
                <TheButton />
            </div>
            <div className="article-title">
              <span>Article Title</span> <br />
                <input
                      type="text"
                      className="form-control"
                      >
                </input>
            </div>  
        
            <div className="uploade-img">
              <span>Featured image</span>
              <TheButton value="Upload an Image" />
            </div>
            <div className="content">
              <span>Content</span>
                <textarea
                      type="textarea"
                      className="form-control"
                      rows="50"
                      cols="150"
                >
              </textarea>
            </div>
        </form>
    </div>
  )
}

export default Form