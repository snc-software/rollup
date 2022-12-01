import React from "react";
import { ButtonProps } from "./types";
import "./Button.css";

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
