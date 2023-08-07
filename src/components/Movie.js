import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const idChecker = () => {
    props.onClickdeletehandler(props.id);
  };
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button style={{ backgroundColor: "red" }} onClick={idChecker}>
        Delete
      </button>
    </li>
  );
};

export default Movie;
