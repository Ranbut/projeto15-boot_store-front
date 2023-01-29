import React, { useEffect, useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { token, produtosCarrosel, setProdutos } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const URL = process.env.REACT_APP_API_URL;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    setLoading(true);
    axios
      .get(`${URL}/cart`, config)
      .then((res) => {
        setProdutos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        alert(err.res.data.message);
        navigate("/");
      });
  }, [token, navigate, setProdutos]);

  const handleRemoveItem = (itemId) => {
    const URL = process.env.REACT_APP_API_URL;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    setLoading(true);
    axios
      .delete(`${URL}/cart/${itemId}`, config)
      .then((res) => {
        setProdutos(produtosCarrosel.filter((item) => item.id !== itemId));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        alert(err.res.data.message);
      });
  };

  const handleCheckout = () => {
    const URL = process.env.REACT_APP_API_URL;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    setLoading(true);
    axios
      .post(`${URL}/checkout`, { produtosCarrosel }, config)
      .then((res) => {
        setLoading(false);
        navigate("/checkout");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        alert(err.res.data.message);
      });
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Wrapper>
      <CartContainer>
        {produtosCarrosel.length === 0 ? (
          <EmptyCart>
            Carrinho vazio! Você ainda não possui itens no seu carrinho.
          </EmptyCart>
        ) : (
          <>
            <ItemsList>
              {produtosCarrosel.map((item) => (
                <Item key={item.id}>
                  <ItemPic>{produtosCarrosel.image}</ItemPic>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                  <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                    Remover
                  </RemoveButton>
                </Item>
              ))}
            </ItemsList>
            <Total>Total: {Item.price}</Total>
            <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
          </>
        )}
      </CartContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CartContainer = styled.div`
  padding: 20px;
  background-color: #f3f6f4;
  width: 50%;
  height: 80%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;

const ItemsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ItemPic = styled.img`
  width: 25px;
  height: 30px;
  border-radius: 50%;
`;

const ItemName = styled.span`
  font-family: "Open Sans";
  font-size: 18px;
  color: #333;
`;

const ItemPrice = styled.span`
  font-family: "Open Sans";
  font-size: 18px;
  color: #333;
`;

const Total = styled.p`
  font-family: "Open Sans";
  font-size: 22px;
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
  color: #333;
`;

const EmptyCart = styled.p`
  font-family: "Open Sans";
  font-size: 21px;
  color: #333;
  text-align: center;
`;

const RemoveButton = styled.button`
  background-color: #ff0000;
  color: #fafafa;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 18px;
  font-family: "Open Sans";
  cursor: pointer;
  &:hover {
    background-color: #ff3b3b;
  }
`;

const CheckoutButton = styled.button`
  background-color: #564eba;
  color: #fafafa;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 18px;
  font-family: "Open Sans";
  cursor: pointer;
  &:hover {
    background-color: #826ef0;
  }
`;
