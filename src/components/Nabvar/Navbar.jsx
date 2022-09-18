import React, { useEffect, useState } from "react";
import {
  HiMenu,
  HiHome,
  HiUser,
  HiChartPie,
  HiMoon,
  HiSun,
} from "react-icons/hi";
import { MdViewList, MdContactPage, MdClose } from "react-icons/md";
import { scroller, animateScroll as scroll } from "react-scroll";

import "./Navbar.css";

const Navbar = ({ theme, setTheme, offset }) => {
  const [isSmallNavActive, setIsSmallNavActive] = useState(false);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    let navbar = document.getElementById("navbar");
    if (offset > 100) {
      navbar.classList.add("sticky__navbar");
    } else if (offset < 100) {
      navbar.classList.remove("sticky__navbar");
    }
  }, [offset]);

  const handleSmallNav = () => {
    let smallNav = document.querySelector(".small__nav");
    smallNav.classList.toggle("active");
    setIsSmallNavActive((prev) => !prev);
  };

  const scrollOptions = {
    duration: 1000,
    delay: 50,
    smooth: true,
    offset: -100,
  };

  return (
    <div>
      <div id="navbar" className="navbar__container">
        <div className="logo" onClick={() => scroll.scrollToTop(scrollOptions)}>
          js<span className="it__text">Dev</span>iL
        </div>
        <div className="nav__links">
          <div
            className="nav__link"
            onClick={() => scroll.scrollToTop(scrollOptions)}
          >
            Home
          </div>
          <div
            className="nav__link"
            onClick={() => scroller.scrollTo("about", scrollOptions)}
          >
            About
          </div>
          <div
            className="nav__link"
            onClick={() =>
              scroller.scrollTo("skills", {
                duration: 1000,
                delay: 50,
                smooth: true,
                offset: -200,
              })
            }
          >
            Skills
          </div>
          <div
            className="nav__link"
            onClick={() => scroller.scrollTo("portfolio", scrollOptions)}
          >
            Portfolio
          </div>
          <div
            className="nav__link"
            style={{ marginRight: "60px" }}
            onClick={() => scroller.scrollTo("contacts", scrollOptions)}
          >
            Contacts
          </div>
          <div className="nav__link switch__mode">
            <div onClick={switchTheme}></div>
          </div>
        </div>
      </div>

      <div className="small__nav" onClick={handleSmallNav}>
        <div onClick={() => scroll.scrollToTop(scrollOptions)}>
          <HiHome className="icon" />
          <span style={{ "--i": 1 }}>home</span>
        </div>

        <div onClick={() => scroller.scrollTo("about", scrollOptions)}>
          <HiUser className="icon" />
          <span style={{ "--i": 2 }}>about</span>
        </div>

        <div
          onClick={() =>
            scroller.scrollTo("skills", {
              duration: 1000,
              delay: 50,
              smooth: true,
              offset: -200,
            })
          }
        >
          <HiChartPie className="icon" />
          <span style={{ "--i": 3 }}> skills</span>
        </div>

        <div onClick={() => scroller.scrollTo("portfolio", scrollOptions)}>
          <MdViewList className="icon" />
          <span style={{ "--i": 4 }}>Portfolio</span>
        </div>

        <div onClick={() => scroller.scrollTo("contacts", scrollOptions)}>
          <MdContactPage className="icon" />
          <span style={{ "--i": 5 }}>contact me</span>
        </div>

        <div>
          {theme === "light" ? (
            <HiMoon className="icon" onClick={switchTheme} />
          ) : (
            <HiSun className="icon" onClick={switchTheme} />
          )}

          {theme === "light" ? (
            <span style={{ "--i": 6 }}>dark mode</span>
          ) : (
            <span style={{ "--i": 6 }}>light mode</span>
          )}
        </div>
        <div>
          {isSmallNavActive ? (
            <MdClose className="menu__icon" style={{ "--i": 0 }} />
          ) : (
            <HiMenu className="menu__icon" style={{ "--i": 0 }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
