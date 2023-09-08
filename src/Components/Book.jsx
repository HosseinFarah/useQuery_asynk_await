import Axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
export const Book = () => {
  const Navigate = useNavigate()
  const [uni, setUni] = useState([]);
  const { data } = useQuery(["name"], () => {getUni()});
  const getUni = async () => {
    const res = await Axios.get(
      "http://universities.hipolabs.com/search?country=United+States"
    );
    return setUni(res.data);
  };
   useEffect(()=>{
    getUni()
   },[uni])

  const { book } = useParams();
  return (
    <div className=" container col col-3">
      University :
      <br />
      {book}
      {uni.map((uni, index) => {
        if (uni.name === book)
          return (
            <div key={index} className="card">
              <img
                src="https://via.placeholder.com/50"
                className="card-img-top"
                alt="Book Cover"
              />
              <div className="card-body">
                <Link to={uni.web_pages[0]} target="_blank"><h5 className="card-title">{uni.name}</h5></Link>
                <p className="card-text">{uni.domains}</p>
              </div>
            </div>
          );
        else return false;
      })}
      <button onClick={()=>{Navigate("/books")}}>Back</button>
    </div>
  );
};
