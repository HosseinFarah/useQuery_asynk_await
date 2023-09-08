import Axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Book } from "./Book";
export const Books = () => {
  const [getdata, setGetdata] = useState([]);
  const { isLoading } = useQuery(["user"], () => {
    getusers();
  });
  const getusers = () => {
    return Axios.get(
      "http://universities.hipolabs.com/search?country=United+States"
    ).then((res) => setGetdata(res.data))};

  useEffect(() => {
    getusers();
  }, [getdata]);

  return (
    <>
    <div className="container">
      {isLoading ? <h5>Loading ...</h5>:<Link to={"http://universities.hipolabs.com/search?country=United+States"} target="_blank"><h1>Universities Page From "THIS"</h1></Link>}   
      <div className="row">
        {getdata.map((uni, index) => {
          return (
            <div className="col-md-4 my-5" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{uni.country}</h5>
                  <Link to={`/books/${uni.name}`}><h6 className="card-subtitle mb-2 text-muted">
                    {uni.name}
                  </h6></Link>
                  <p className="card-text">{uni.domains}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};
