import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../slices/category-slice";

function Dashboard() {
  const [allCategory, setCategory] = useState([]);
  const dispatch = useDispatch();
  const categoryStore = useSelector((state) => state.Category) || [];
  console.log(categoryStore);
  useEffect(() => {
    dispatch(getAllCategories());
    }, []);

  useEffect(() => {
    setCategory(categoryStore.items);
  }, [categoryStore])  

  if (categoryStore.loading === true) {
    return (
      <>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid bg-dark text-white justify-content-center text-center">
        <div className="row list justify-content-center text-center">
          <div className="col-lg-6 mb-4">
            <h1>All Categories</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {allCategory.slice(0, 5).map((item, index) => (
            <div className="col-lg-4 mb-3 text-center" key={index}>
              <div className="card p-3 bg-dark text-white border-white">
                <img src={item.image} alt="Image" />
                <h2>{item.name.slice(0, 25)}.... </h2>
                <Link to={`/all-products/${item.id}`}>
                  <button className="btn btn-success w-100">See More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
