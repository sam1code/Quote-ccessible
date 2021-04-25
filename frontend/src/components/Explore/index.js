import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import QuoteCard from "../QuoteCard";
import './style.css'

const Explore = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect( () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/quotes`).then(res => {
      setQuotes(res.data.Quotes)
    })
  }  ,
  []) 
  console.log(quotes);
  
  const token = localStorage.getItem('token');
  
  const handleDelete = (quote_id) => {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_URL}/quotes/delete/${quote_id}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
      console.log(res);
      const tempQuotes = [];
      quotes.map(q => {
        if(q._id!==quote_id)
          tempQuotes.push(q);
      })
      setQuotes(tempQuotes);
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div>
      <Navbar />
      <main className="bg">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Quotes
            </h1>
            <div className="flex flex-wrap -m-4">
              {quotes.map((q,idx) => {
                return <QuoteCard quote={q} key={idx} del={() => handleDelete(q._id)} />
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
)};

export default Explore;
