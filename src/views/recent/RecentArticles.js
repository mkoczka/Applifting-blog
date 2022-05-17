import React, { useState, useEffect } from "react";
import axios from "axios";
import TheArticles from "../../components/articles/TheArticles";

const RecentArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios("https://fullstack.exercise.applifting.cz/articles", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "6a4fca7d-0167-4ca6-bba8-e8016ab13d71",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        setArticles(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TheArticles articles={articles} />
    </div>
  );
};

export default RecentArticles;
