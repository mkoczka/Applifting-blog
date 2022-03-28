import React from 'react'
import '../comments/comments.scss'

import { IoChevronDown, IoChevronUp} from "react-icons/io5";

const TheComents = () => {
  return (
  
        <div className="comments">
            <h2>Comments (4)</h2>
            <div className="com-input">
            <img src="#"></img>
            <input type="text" placeholder="Join the discussion"></input>
            </div>
            <div className="comment">
                <img src="#"></img>
                <div className="name-time">
                    <h3>Nicolas Bureš</h3>
                    <span>2 hours ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates.</p>
                <div className="com-icons">
                    <span>+3</span>
                    <div className="up"><IoChevronUp /></div>
                    <div className="down"><IoChevronDown /></div>
                </div>
            </div>
        </div>   
  )
}

export default TheComents