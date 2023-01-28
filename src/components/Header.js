import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs"
import { BiLogOut } from "react-icons/bi"
import { useEffect, useState } from "react";

export default function Header() {

  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [produtoName, setProdutosName] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userSession");
    if (loggedInUser) {
      const foundUser = JSON.parse(localStorage.getItem("userSession"));
      setUser(foundUser);
    }
  }, []);

  console.log(user);

  const handleLogout = () => {
    setUser();
    localStorage.clear();
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?type=&name=${produtoName}`);
    }
  }

  function renderLoginStatus(){
    if(!user)
      return(<h2><Link to={"/signin"}>Entre</Link> ou <Link to={"/signup"}>cadastre-se</Link></h2>)
    else
      return(
      <>
        <h2>
          Seja bem-vindo, {user.user.name}
        </h2>
        <LogOutIcon onClick={handleLogout}/>
      </>);
  }

  return (
    <Content>
      <h1><Link to={"/"}>BootStore</Link></h1>
      <div>
        <input type="text" placeholder="O que você procura?" onChange={e => setProdutosName(e.target.value)} onKeyDown={handleSearchKeyDown} />
        <Link to={`/search?type=&name=${produtoName}`}><SearchIcon/></Link>
      </div>
      <UserArea>
        <PersonIcon />
        {renderLoginStatus()}
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

const LogOutIcon = styled(BiLogOut)`
  color: #fafafa;
  font-size: 25px;
  cursor: pointer;
`;

const SearchIcon = styled(BsSearch)`
  color: #000;
  font-size: 25px;
  position: relative;
  right: 35px;
  cursor: pointer;
  top: 5px;
`;