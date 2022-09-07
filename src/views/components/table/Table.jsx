import React from "react";
import './styles.scss'

const Table = (props) => {
  return (
    <table className={"table" + (props.className ? " " + props.className : "")}>
      {props.children}
    </table>
  );
};

export default Table;
