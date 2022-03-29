import React,{useState, useEffect}  from 'react'
import axios from 'axios'
import TheSidebar from '../../components/sidebar/TheSidebar'
import SingleArticle from '../../components/singleArticle/SingleArticle'
import TheComments from '../../components/comments/TheComments'

import '../single/single.scss'
const Single = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios('https://my-json-server.typicode.com/Naiio97/demo/comments')
    .then(res => setComments(res.data)) 
    .catch(err => console.error(err))
    
  }, []);


  return (
    <>
    <div className="single">
        <SingleArticle />
        <TheSidebar />
    </div>
    <div key={comments} className="com">
        <TheComments comments={comments} />
    </div></>
    
  )
}

export default Single