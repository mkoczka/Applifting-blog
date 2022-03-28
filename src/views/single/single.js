import React from 'react'
import TheSidebar from '../../components/sidebar/TheSidebar'
import SingleArticle from '../../components/singleArticle/SingleArticle'
import TheComments from '../../components/comments/TheComments'

import '../single/single.scss'
const Single = () => {
  return (
    <>
    <div className="single">
        <SingleArticle />
        <TheSidebar />
    </div>
    <div className="com">
        <TheComments />
    </div></>
    
  )
}

export default Single