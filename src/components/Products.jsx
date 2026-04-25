import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getAllProduct } from "../slices/product-slice";

function Products() {
  const { id } = useParams();
  const [allProducts, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productstore = useSelector((state) => state.Product) || [];
  console.log(productstore);
  useEffect(() => {
    dispatch(getAllProduct(id));
  }, []);

  useEffect(() => {
    setProducts(productstore.items);
  }, [productstore])

  if (productstore.loading === true) {
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
      <div className="container-fluid bg-dark text-white">
        <div className="row border justify-content-center text-center bg-dark text-white">
          <div className="col-lg-6 ">
            <h1>All Products</h1>
          </div>
        </div>
        <div className="row justify-content-center w-100 py-5">
          {allProducts.map((item, index) => (
            <div className="col-lg-3 mb-4 text-center" key={index}>
              <div className="card p-3 bg-dark text-white border-white">
                <img src={item.images[0]} alt="Image" />
                <h2>{item.title.slice(0, 25)}....</h2>
                <Link
                  to={`/product-details/${item.id}`}
                  style={{ display: "block" }}
                >
                  <button className="btn btn-outline-primary w-100">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
