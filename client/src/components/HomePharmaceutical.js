import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { hostURL } from "../URL";

const HomePharmaceutical = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${hostURL}/products?type=pharmaceutical&_limit=4`)
      .then((res) => {
        setPopularProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {popularProducts.map((item) => {
        return (
          <>
            <Product item={item} key={item.id} />
          </>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default HomePharmaceutical;
