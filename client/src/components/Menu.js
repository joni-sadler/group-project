import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  fadeInDown,
  fadeOutUp,
  // slideInLeft,
  // slideInRight,
} from "react-animations";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BurgerMenu from "./TheBurger/BurgerMenu";
import SearchBar from "./SearchBar";
import { BsBag } from "react-icons/bs";

const Menu = ({ homePageState }) => {
  // assemble array of categories
  let listOfCategories = homePageState.categories.categories;

  // assemble array of companies
  let listOfCompanies = [];

  //populating the company list array 
  if (homePageState.companies.companies) {
    listOfCompanies = Object.values(homePageState.companies.companies);
  }

  const [categoryIsActive, setCategoryIsActive] = useState(false);
  const [companyIsActive, setCompanyIsActive] = useState(false);
  const [status, setStatus] = useState("close");

  //toggling and setting the states to false on click
  const onClickCategory = () => {
    setCategoryIsActive(!categoryIsActive);
    setCompanyIsActive(false);
  };

  //toggling and setting the states to false on click
  const onClickCompany = () => {
    setCompanyIsActive(!companyIsActive);
    setCategoryIsActive(false);
  };

  // Determine total number of items in the cart and display next to cart icon
  const [numItemsInCart, setNumItemsInCart] = useState(0);
  const cartItems = Object.values(useSelector((state) => state.cart));

  const calculateCartTotal = (cartItems) => {
    const cartNumPerItem = cartItems.map((item) => {
      return item.numInCart;
    });
    const totalCartItems = cartNumPerItem.reduce((a, b) => a + b, 0);
    setNumItemsInCart(totalCartItems);
  };

  useEffect(() => calculateCartTotal(cartItems), [cartItems]);

  return (
    <Wrapper>
      {/* hamburger menu with class and setting the states to false */}
      <MenuButton
        onClick={() => {
          setStatus(status === "open" ? "close" : "open");
          setCategoryIsActive(false);
          setCompanyIsActive(false);
        }}
      >
        <BurgerMenu status={status} />
      </MenuButton>
      {/* //search bar to search the products */}
      <SearchBar />
      {/* cart button */}
        <Link to="/cart">
          {/* set the status state to close to close the menu  */}
          <CartButton onClick={() => setStatus("close")}>
            <CartItemDiv onClick={() => setStatus("close")}>
              <MenuText>
                <BsBag size={24} style={{color:'white'}}/>
              </MenuText>
              <Circle>
                <CartItems>{numItemsInCart}</CartItems>
              </Circle>
            </CartItemDiv>
          </CartButton>
        </Link>
      {/* sub menu that opens up on hamburger menu click */}
      <MainMenu className={status === "open" ? "openMenu" : "closeMenu"}>
        {/* menu item container moves to left or right based on the click on company and category link */}
        <MenuItemContainer
          style={{
            marginLeft:
              companyIsActive === true || categoryIsActive === true
                ? "5%"
                : "45%",
          }}
        >
          {/* menu links */}
          <Link to="/">
            <MenuItem onClick={() => setStatus("close")}>
              <MenuText>Home</MenuText> {/*home menu */} 
            </MenuItem>
          </Link>

          <Link to="/products">
            <MenuItem onClick={() => setStatus("close")}>
              <MenuText>Shop all products</MenuText> {/*all products menu */} 
            </MenuItem>
          </Link>
          {/* list of categories on click */}
          <CategoryMenuItem onClick={() => onClickCategory()}>
            <MenuText>Shop by category</MenuText>
          </CategoryMenuItem>
          {categoryIsActive === true && (
            <CategoryNav>
              {listOfCategories.map((category) => {
                return (
                  <div>
                    <StyledLink
                      to={`/categories/${category}`}
                      key={category}
                      onClick={() => {
                        setStatus("close");
                        setCategoryIsActive(false);
                        setCompanyIsActive(false);
                      }}
                    >
                      {category}
                    </StyledLink>
                  </div>
                );
              })}
            </CategoryNav>
          )}
          {/* list of companies on click */}
          <CompanyMenuItem onClick={onClickCompany}>
            <MenuText>Shop by company</MenuText>
          </CompanyMenuItem>
          {companyIsActive === true && (
            <CompanyNav>
              {listOfCompanies.map((company) => {
                return (
                  <div>
                    <StyledLink
                      to={`/companies/${company}`}
                      key={company}
                      onClick={() => {
                        setStatus("close");
                        setCategoryIsActive(false);
                        setCompanyIsActive(false);
                      }}
                    >
                      {company}
                    </StyledLink>
                  </div>
                );
              })}
            </CompanyNav>
          )}
        </MenuItemContainer>
      </MainMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: black;
  height: 72px;
`;

const MenuButton = styled.button`
  background: none;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;
const slideDown = keyframes`
  ${fadeInDown};
`;

const slideUp = keyframes`
  ${fadeOutUp};
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-top: 57px;
  z-index: 9;
  opacity: 1;
  transition: margin-left 0.4s linear;
`;

const MainMenu = styled.div`
  position: fixed;
  bottom: 0px;
  height: 100vh;
  width: 100%;
  background-color: white;
  overflow-y: hidden;
  &.openMenu {
    display: block;
    animation: 0.4s ${slideDown};
  }

  &.closeMenu {
    animation: 0.4s ${slideUp} forwards;
  }
`;

const CategoryNav = styled.nav`
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 10%;
  right: 10px;
  width: 80%;
  padding-top: 57px;
  opacity: 1;
  padding-left: 5px;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  animation: 0.6s ${slideDown};
`;

const CompanyNav = styled.nav`
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 0px;
  right: 10px;
  width: 80%;
  height: 100%;
  padding-top: 57px;
  opacity: 1;
  padding-left: 5px;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  animation: 1s ${slideDown};

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

const MenuItem = styled.button`
  width: 150px;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const CartButton = styled.button`
  padding-right: 10px;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
`;

const CategoryMenuItem = styled.button`
  background-color: white;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const CompanyMenuItem = styled.button`
  background-color: white;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const MenuText = styled.p`
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px;
  margin: 10px;
  color: black;
  font-size: 18px;

  &:hover {
    border-radius: 3px;
    background-color: #9ca5b5;
    color: white;
  }
`;

const CartItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`;

const Circle = styled.div`
  background-color: white;
  height: 25px;
  width: 25px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 20px 0px 0px 15px;
`;

const CartItems = styled.p`
  font-size: 16px;
  z-index: 1;
`;

export default Menu;
