import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavLink className="navbar-brand" to="/" style={({isActive})=>{return{color:isActive?"red":""}}}>
            {" "}
            Home
          </NavLink>
          <NavLink className="navbar-brand" to="/about" style={({isActive})=>{return{color:isActive?"red":""}}}>
            {" "}
            About
          </NavLink>
          <NavLink className="navbar-brand" to="/books" style={({isActive})=>{return{color:isActive?"red":""}}}>Universities</NavLink>
        </ul>
      </div>
    </nav>
  );
};
