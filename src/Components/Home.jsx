import { useContext } from "react";
import { siteName } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";

export const Home = () => {
  const { name } = useContext(siteName);
  const { data } = useQuery(["name"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="mt-5">Welcome to My React Bootstrap Homepage</h1>
          <div className="alert alert-primary col-5" role="alert">
            Main Page .<h5>setName: {name}</h5>
          </div>
          <div className="alert alert-primary col-6 mx-1">
            <h5>{data?.fact}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
