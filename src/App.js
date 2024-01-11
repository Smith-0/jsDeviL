import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nabvar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.background = "#181818";
      document.body.style.color = "#ffffff";
      document.body.style.transition = "background 0.2s";
    } else {
      document.body.style.background = `#daf2e9`;
      document.body.style.color = "#000000";
      document.body.style.transition = "background 0.2s";
    }
  }, [theme]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="App" data-theme-background={theme}>
      <Navbar offset={offset} theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
