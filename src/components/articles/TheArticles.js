import React from 'react'
import TheArticle from '../article/TheArticle'
import '../articles/articles.scss'

const TheArticles = ({articles}) => {
  return (
    <div className="the-articles">
        <h1>Recent articles</h1>
        <div className="articles">
            {articles.map((a, index) => (
                <TheArticle key={index} article={a} />
            ))}
        </div>
   </div>
  )  
}

export default TheArticles