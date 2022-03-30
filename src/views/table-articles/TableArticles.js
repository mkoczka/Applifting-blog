import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../table-articles/tableArticles.scss'
import TheButton from '../../components/button/TheButton'
import axios from 'axios'
import { IoPencil, IoTrash  } from "react-icons/io5";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";



const TableArticles = () => {
    
 const [dataTable, setDataTable] = useState([]) 
  

  useEffect(() => {
    axios('https://my-json-server.typicode.com/Naiio97/demo/myArticles')
    .then(res => setDataTable(res.data))
    .catch(err => console.error(err))
  }, []);

  const hendleDelete = () => {
    axios.delete('https://my-json-server.typicode.com')
    .then(res => {
      console.log("Article was deleted");
    })
    .catch(err => {
      console.log("Error");
    })
  }

  return (
    <div className="table-articles">
      <div className="myArt-but">
        <h1>My Articles</h1>
        <Link to={"/new-form"}>
          <TheButton value="Create New Article" /> 
        </Link>
       
      </div>
    
      <table>
        <thead>
          <tr>
            <th><input type="checkbox"></input></th>
              <th>Article title <div className="tit arrows"><TiArrowSortedUp/><TiArrowSortedDown/></div></th>
              <th>Perex <div className="per arrows"><TiArrowSortedUp/><TiArrowSortedDown/></div></th>
              <th>Author <div className="aut arrows"><TiArrowSortedUp/><TiArrowSortedDown/></div></th>
              <th># of comments <div className="com arrows"><TiArrowSortedUp/><TiArrowSortedDown/></div></th>
              <th className="action">action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((d, index) => (
            <tr key={index}>
              <td><input type="checkbox"></input></td>
              <td>{d.title.substring(0, 25)}...</td>
              <td>{d.text.substring(0, 80)}...</td>
              <td>{d.author}</td>
              <td>{d.comments}</td>
              <td>
              <Link to={"/edit-form"}>
                <IoPencil/> 
              </Link>
          
                <IoTrash onClick={hendleDelete}/>
              
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}
  
export default TableArticles