import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";

// import the custom `useRouteMatch` hook from React Rou
// import the MovieShow component


function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}

export default MoviesPage;
