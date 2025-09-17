import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useThemeMode } from "../app/ThemeContext";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { mode, toggle } = useThemeMode();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Wrapper scrolled={scrolled} mode={mode}>
      <Spacer />
      <Menu open={open}>
        <Item to="/" end>Home</Item>
        <Item to="/about">About</Item>
        <Item to="/skills">Skills</Item>
        <Item to="/projects">Projects</Item>
        <Item to="/contact">Contact</Item>
      </Menu>
      <Right>
        <Btn onClick={toggle} aria-label="toggle theme">
          {mode === "light" ? <FiMoon /> : <FiSun />}
        </Btn>
        <MobileBtn onClick={() => setOpen(!open)}>
          <FiMenu />
        </MobileBtn>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.header<{ scrolled: boolean; mode: string }>`
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  backdrop-filter: blur(10px);
  background: ${({ theme }) => theme.card};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;

  ${({ scrolled, mode }) =>
    scrolled &&
    `
      background: ${mode === "light"
      ? "rgba(255,255,255,0.85)"   
      : "rgba(0,0,0,0.7)"           
    };
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  `}
`;

const Menu = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 28px;
  align-items: center;
   justify-content: center;
  flex: 2;

  @media(max-width: 768px) {
    position: absolute;
    top: 64px; right: ${({ open }) => (open ? "0" : "-100%")};
    flex-direction: column;
    background: ${({ theme }) => theme.card};
    border-left: 1px solid ${({ theme }) => theme.border};
    padding: 20px;
    gap: 20px;
    transition: right 0.3s ease;
  }
`;

const Item = styled(NavLink)`
  position: relative;
  padding: 8px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.muted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0; bottom: -4px;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const Spacer = styled.div`
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  padding: 8px;
  margin-left: 32px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  transition: color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primary}50;
  }
`;

const MobileBtn = styled(Btn)`
  display: none;
  @media(max-width: 768px) {
    display: grid;
  }
`;
