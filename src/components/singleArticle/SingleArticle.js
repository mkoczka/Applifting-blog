import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
import axios from 'axios'
import '../singleArticle/singleArticle.scss'
import img from '../../assets/cat.jpg'
 

import { BsDot } from 'react-icons/bs';

const SingleArticle = () => {

    

    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [article, setArticle] = useState({})

//    useEffect(() => {
//     const getArticle = () => {
//         const res = axios('https://my-json-server.typicode.com/Naiio97/demo/myArticles')
//         setArticle(res.data)
//     };
//     getArticle()
//   }, [path]); 

//Zde mi nefunguje vykreslování dat

  return (

      <div className="single-article">
        <div className="article">
          <h1>Text o kočce</h1>
          <div className="aut-date">
            <span>Nicolas Bureš</span>
            <BsDot />
            <span>09/05/2021</span>
          </div>
          <img src={img} alt="kočka"></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates.</p> <br />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates.</p> <br />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates.</p> <br />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates.</p> <br />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates.</p> <br />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic dicta iusto a illum atque, eum ullam sit optio doloribus, sint alias magni molestias sunt deserunt dignissimos voluptatibus fugiat voluptates.</p>
        </div>
    </div>
  )
}
export default SingleArticle