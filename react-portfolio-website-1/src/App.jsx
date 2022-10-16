import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experiance from "./components/experiance/Experiance"
import Services from "./components/servises/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experiance />
            <Services />
            <Portfolio />
            <Contact />
        </>
    )
}

export default App