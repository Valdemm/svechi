import React from "react";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categorios from "./components/Categorios";

import "./scss/app.scss";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categorios />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price="500" />
            <PizzaBlock test="2222" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
