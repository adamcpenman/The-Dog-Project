import React, { useState, useEffect } from "react";
import axios from "axios";

export function useDodImages(breed, count) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
      .then(result => {
        setImages(result.data.message);
        // this.setState({
        // images: result.data.message
        // })
        console.log(result);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, [breed, count]);

  return [images, setImages];
}
