import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { myContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { getAllDetail } from "../slices/detail-slice";

function Details() {
  // const user = useContext(myContext);
  const { id } = useParams();
  const [productDetail, setDetail] = useState({});
  const [img, setImage] = useState("");
  const dispatch = useDispatch();
  const detailStore = useSelector((state) => state.Detail) || {}; 
  useEffect(() => {
    dispatch(getAllDetail(id)); 
  }, []);

  useEffect(() => {
    setDetail(detailStore.items);
    console.log(detailStore);
    if(detailStore.loading == false && detailStore?.items?.images?.length > 0){
      setImage(detailStore.items.images[0]);
    }
  }, [detailStore, detailStore.items])

  if (detailStore.loading === true) {
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

  const handleImgChange = (imgUrl) => {
    setImage(imgUrl);
  };
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="row border justify-content-center text-center bg-dark text-white">
          <div className="col-lg-6">
            <h3>Product Details</h3>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-4 ">
            <img
              src={img}
              alt="Image"
              height={450}
            />
            <br />
            <br />
            {productDetail.images &&
              productDetail.images.map((item, index) => (
                <img
                className="me-4"
                  onClick={() => handleImgChange(item)}
                  key={index}
                  src={item}
                  alt="Image"
                  height={100}
                />
              ))}
          </div>
          <div className="col-lg-8">
            <h2>{productDetail.title}</h2>
            <p>{productDetail.description}</p>
            <h2>Price: ${productDetail.price}</h2>
            <button className="btn btn-outline-primary p-2 me-4 w-25">
              Buy Now
            </button>
            <button className="btn btn-primary p-2 w-25">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
