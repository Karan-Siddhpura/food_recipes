import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import './App.css';
import Card from './Card';

function App() {

  const [query, setQuery] = useState("Search for recipes")
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes();
  }, []);

  const APP_ID = process.env.APP_ID;
  const APP_KEY = process.env.APP_KEY
  var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const res = await Axios.get(url);
    setRecipes(res.data.hits);
    console.log(res.data)
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
    setQuery("")
  }

  return (
    <div className="app">

      {/*--------------------------Header----------------------- */}
      <div className="header">
        <div class="custom-shape-divider-bottom-1621410602">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="logo">
          <p>Recipes</p>
        </div>
        <div className="header__info">
          <div className="info__left">
            <div className="left__icon">
              <FastfoodOutlinedIcon className="icon" />
              <h2>Food Recipes</h2>
            </div>
            <form className="left__input" onSubmit={submit}>
              <input type="text"
                placeholder="Search Recipes"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                }}
              />
              <button className="btn">
                Search
              </button>
            </form>
          </div>
          <div className="info__right">
            <img src="./images/img1.svg" alt="image" />
          </div>
        </div>
      </div>
      {/*---------------Cards---------------------------*/}
      <section>
        <div className="main">
          {recipes.map(recipes => {
            return (
              <Card
                label={recipes.recipe.label}
                image={recipes.recipe.image}
                url={recipes.recipe.url}
              />
            );
          })}
        </div>
      </section>
      <div className="footer">
        <h4>foodRecipes@gmail.com</h4>
      </div>
    </div>
  );
}

export default App;
