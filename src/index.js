import _ from "lodash";
import "./Views/HomeView";
import "../style.css";
import HomeView from "./Views/HomeView";

function component() {
  var element = document.createElement("div");

  // lodash is required for next line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.appendChild(HomeView());

  return element;
}

document.body.appendChild(component());
