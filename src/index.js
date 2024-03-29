import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css'
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App(){
    return <>
    <Header/>
    <Menu />
    <Footer/>
    </>
}
function Header(){
    // const style={color:"red",fontSize:"48px",textTransform:"uppercase"}
    const style={}
return <header className="header">
<h1 style={style}> Fast React Pizza Co.</h1>
</header>
}
function Menu(){
return <menu className="menu"><h2>Our Menu</h2><Pizza /></menu>
}
function Footer(){
return (
<footer className="footer">{new Date().toLocaleTimeString()}. We are currently open</footer>
)
}
function Pizza(){
    return <div>
        <img src="/pizzas/spinaci.jpg" alt="Pizza"></img>
        <h3>Tomato, mozarella, spinach, and ricotta cheese</h3>
    </div>
}
// react version 18
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App/></React.StrictMode>)
// strict mode render the componet twice for finding bugs(during developmnet)
// react before version 18
// React.render(<App/>,document.getElementById('root'))