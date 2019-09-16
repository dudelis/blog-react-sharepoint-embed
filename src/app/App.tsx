import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";
import MainForm from "./components/MainForm";
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

ReactDOM.render(
  <MainForm />,
  document.getElementById("root")
);
