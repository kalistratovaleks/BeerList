import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { MainPage } from "./components/main_page";
import { PizzaComboPage } from "./components/pages/pizza_combo";
import { SteakComboPage } from "./components/pages/steak_combo";
import { DetailsPage } from "./components/pages/details_page";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pizza_combo" element={<PizzaComboPage />} />
        <Route path="/steak_combo" element={<SteakComboPage />} />
        <Route path="/beer_details/:id" element={<DetailsPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
