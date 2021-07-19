import React, { Component } from "react";
import styles from "./todo";
import Button from "../../components/button/button";

class Todo extends Component {
  render() {
    return (
      <>
        <h3>Todo</h3>
        <Button type="Edit" />
        <Button type="Delete" />
        <Button type="Add" />
      </>
    );
  }
}

export default Todo;
