// React を使うために必要なファイルを読み込んでいます
import React from "react";
// React でWebページに表示するための関数を読み込んでいます
import ReactDOM from "react-dom/client";
// 実際にWebページに表示する内容が書かれたファイル（App.jsx）を読み込んでいます
import { App } from "./App.jsx";
// Webページのデザインが書かれたファイル（index.css）を読み込んでいます
import "./index.css";

// ReactDOM.createRoot は、Webページのどこに表示するかを指定するための関数です
// document.getElementById("root") は、HTMLファイルの中で id が "root" となっている場所を指定しています
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode は、Webページを表示する際に問題がないかをチェックするためのものです
  <React.StrictMode>
    {/* <App /> は、実際にWebページに表示する内容（App.jsxファイルの中身）を指定しています */}
    <App />
  </React.StrictMode>,
);
