import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../table-articles/tableArticles.scss'
import TheButton from '../../components/button/TheButton'
import axios from 'axios'
import { IoPencil } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";


import Data from '../../myArticles.json'

const TableArticles = (value) => {
    
 const [dataTable, setDataTable] = useState(Data) 
  

  // useEffect(() => {
  //   axios('https://my-json-server.typicode.com/Naiio97/demo/myArticles')
  //   .then(res => setDataTable(res.data))
  //   .catch(err => console.error(err))
  // }, []);

  return (
    <div className="table-articles">
      <div className="myArt-but">
        <h1>My Articles</h1>
        <Link to={"/new-form"}>
          <TheButton value="Ahoj" /> 
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
          {dataTable.map((data) => (
            <tr key={data.id}>
            <td>{data.title.substring(0, 25)}...</td>
            <td>{data.parex.substring(0, 80)}...</td>
            <td>{data.author}</td>
            <td>{data.comments}</td>
            <td>
              <Link to={"/edit-form"}>
                <IoPencil/> 
              </Link>
            
             
              <Link to={"/"}>
                <IoTrash/>
              </Link>
              
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}
  
export default TableArticles