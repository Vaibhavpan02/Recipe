import React, { useState } from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { FaBars } from 'react-icons/fa';

function Category() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Hamburger onClick={toggleMenu}>
        <FaBars />
      </Hamburger>
      <List isOpen={isOpen}>
        <SLink to={'/'} onClick={closeMenu}>
          <CiHome />
          <h4>Home</h4>
        </SLink>
        <SLink to={'/cuisine/Italian'} onClick={closeMenu}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'} onClick={closeMenu}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'} onClick={closeMenu}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'} onClick={closeMenu}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </SLink>
      </List>
    </>
  );
}

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #333;
    z-index: 9;
    padding:0rem 0rem;
    margin:0rem;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  svg {
    color: white;
    font-size: 3rem;
  }

  h4 {
    color: white;
    font-size: 1rem;
    margin-top: 0.3rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 6rem;

    svg {
    margin-top:0.2rem;
      font-size: 2rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export default Category;
