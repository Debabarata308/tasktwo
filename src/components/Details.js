import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  const [data, setData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  const datainfo = async () => {
    const sahoo = await axios.post("https://hoblist.com/api/movieList", {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting"
    });
    console.log(sahoo.data.result);
    setData(sahoo.data.result);
  };

  useEffect(() => {
    Birthday();
    datainfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-4 my-2">
              <div className="card">
                <div className="row w-100 p-2">
                  <div className="col-2">
                    <h1>{item.voting}</h1>
                    <div>Voat</div>
                  </div>

                  <div className="col-4 float-left">
                    <img
                      style={{ height: "11rem", width: "7rem" }}
                      src={item.poster}
                    />
                  </div>
                  <div className="col-6 float-end">
                    <span>
                      {item._id
                        ? item._id.toString().slice(0, 10) + "..."
                        : null}
                    </span>
                    <span>{item.title}</span>
                    <div>Genera:{item.genre}</div>
                    <div>Director:{item.director[0]}</div>
                    <div>Straing :{item.stars[0]}</div>
                  </div>
                </div>
                <div className="row my-2 text-center">
                  <div className="col">
                    <button className="btn btn-primary" type="button">
                      watch Tailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
