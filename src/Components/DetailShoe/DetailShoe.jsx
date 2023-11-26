import React from "react";
import { useLocation } from "react-router-dom";

const DetailShoe = () => {
  const localtion = useLocation();
  console.log("location", localtion)
  return <>Details Shoe</>;
};

export default DetailShoe;
