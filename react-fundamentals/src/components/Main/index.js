import React from "react";
import { Routes, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = (props) => (
  <Routes>
    <Route path="/" element={<Series />} />
    <Route path="/series/:showId" element={<SingleSeries />} />
  </Routes>
);

export default Main;
