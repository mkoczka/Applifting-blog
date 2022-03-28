import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TheArticles from '../../components/articles/TheArticles'



const RecentArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios('https://my-json-server.typicode.com/Naiio97/demo/myArticles')
    .then(res => setArticles(res.data)) 
    .catch(err => console.error(err))
    
  }, []);

  return (
    <div>
       <TheArticles articles={articles}  />
    </div>
  )
}

export default RecentArticles