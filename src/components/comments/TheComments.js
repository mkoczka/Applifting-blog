import React from 'react'
import TheComment from '../comment/TheComment'
import profile from '../../assets/profile.jpg'

import '../comments/comments.scss'

const TheComments = ({comments}) => {
  return (
    <div className="the-comments">
        <h2>Comments (4)</h2>
        <div className="com-input">
                <img className="input-img" src={profile}></img>
                <input type="text" placeholder="Join the discussion"></input>
            </div>
        <div className="comments">
            {comments.map((a) => (
                <TheComment comment={a} />
            ))}
        </div>
    </div>
  )
}

export default TheComments