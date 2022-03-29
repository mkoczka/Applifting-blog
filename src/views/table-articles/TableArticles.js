import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../table-articles/tableArticles.scss'
import TheButton from '../../components/button/TheButton'
import axios from 'axios'
import { IoPencil } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";



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
              <th>Article title</th>
              <th>Perex</th>
              <th>Author</th>
              <th># of comments</th>
              <th>action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((d, index) => (
            <tr key={index}>
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