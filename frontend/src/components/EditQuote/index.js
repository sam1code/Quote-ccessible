import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { isAuthenticated } from "../auth";
// import './style.css';

const EditQuote = (props) => {
  const [quote, setQuote] = useState({});
  const [value, setValue] = useState({
      quote: '',
      author: '',
      created_by: ''
  });
//   const { id } = useParams();
  const id = props.match.params.id;
  const token = localStorage.getItem("token");
  const url = `${process.env.REACT_APP_BACKEND_URL}/quotes/find/${id}`;
  console.log(token)
  useEffect(() => {
    axios.get(url,{
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    // setQuote(data.quote);
  },[]);


  if(!isAuthenticated())
  {
      <Redirect to="/" />
  }

  const inputs = document.querySelectorAll(".input");

    function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
    }

    function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
    }

    inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
    });
  console.log(quote);
  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Please have a LOOK</h3>
          <p className="text">
            Please try not to upload Quotes which are already there in this
            website upload new or your OWN | UPLOAD Quotes of your or others
            with their credentials |
            <br />
            <br />
            <br />
            Thankyou
          </p>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form>
            <h3 className="title">Upload Quote</h3>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder="Quote" onChange={e=> setValue({ ...value, quote:e.target.value})}></textarea>
              <div className="input-container">
                <input type="text" name="name" className="input" placeholder="Authorname" onChange={e => setValue({...value, author: e.target.value})} />
              </div>
            </div>
            <input type="submit" value="UPLOAD" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditQuote;
