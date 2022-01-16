import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark manik"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Dashboard</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#home" />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="orderList" className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#speedometer2" />
            </svg>
            Order List
          </Link>
        </li>
        <li>
          <Link to="makeAdmin" className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#table" />
            </svg>
            Make Admin
          </Link>
        </li>
        <li>
          <Link to="addService" className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#grid" />
            </svg>
            Add service
          </Link>
        </li>
        <li>
          <Link to="book" className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#people-circle" />
            </svg>
            Book
          </Link>
        </li>
        <li>
          <Link to="bookingList" className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#people-circle" />
            </svg>
            Booking List
          </Link>
        </li>
        <li>
          <Link to="review" className="nav-link text-white">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#people-circle" />
            </svg>
            Review
          </Link>
        </li>
      </ul>     
    </div>
  );
};

export default Sidebar;




{/* <div className="dropdown">
<a
  href="#"
  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
  id="dropdownUser1"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  <img
    src="https://github.com/mdo.png"
    alt=""
    width={32}
    height={32}
    className="rounded-circle me-2"
  />
  <strong>mdo</strong>
</a>
<ul
  className="dropdown-menu dropdown-menu-dark text-small shadow"
  aria-labelledby="dropdownUser1"
>
  <li>
    <a className="dropdown-item" href="#">
      New project...
    </a>
  </li>
  <li>
    <a className="dropdown-item" href="#">
      Settings
    </a>
  </li>
  <li>
    <a className="dropdown-item" href="#">
      Profile
    </a>
  </li>
  <li>
    <hr className="dropdown-divider" />
  </li>
  <li>
    <a className="dropdown-item" href="#">
      Sign out
    </a>
  </li>
</ul>
</div> */}
