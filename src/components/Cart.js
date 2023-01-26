import React, { useState } from "react";
import styled from "styled-components";

export default function Cart() {
  const [items, setItems] = useState([]);

  return (
    <Wrapper>
      <CartContainer>
        {items.length > 0 ? (
          <>
            <ItemsList>
              {items.map((item) => (
                <Item key={item.id}>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </Item>
              ))}
            </ItemsList>
            <Total>
              Total: {items.reduce((acc, item) => acc + item.price, 0)}
            </Total>
          </>
        ) : (
          <EmptyCart>
            Carrinho vazio! Você ainda não possui itens no seu carrinho.
          </EmptyCart>
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
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
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
