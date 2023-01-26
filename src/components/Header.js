import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <Content>
      <h1>BootStore</h1>
      <input type="text" placeholder="O que você procura?" />

      <UserArea>
        <PersonIcon />
        <h2>Entre ou cadastre-se</h2>
        <Link to={"/cart"}><CartIcon /></Link>
      </UserArea>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  background-color: #5f5aa2;
  position: fixed;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 2.5rem;
    padding: 30px 20px;
    text-transform: uppercase;
    color: #fafafa;
  }

  input {
    width: 500px;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 15px;
    box-sizing: border-box;
    padding: 15px;
  }

  input::placeholder {
    font-family: "Open Sans";
    padding: 10px;
  }
`;

const UserArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  right: 150px;

  h2 {
    font-family: "Open Sans";
    color: #fafafa;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    margin-left: 15px;
  }
`;

const PersonIcon = styled(BsPersonFill)`
  color: #fafafa;
  font-size: 25px;
`;
const CartIcon = styled(FaShoppingCart)`
  color: #fafafa;
  font-size: 25px;
  position: relative;
  left: 100px;
  cursor: pointer;
`;
