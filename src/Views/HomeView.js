const { createElement } = require("react");

const HomeView = () => {
  const element = document.createElement("div");

  element.innerHTML = "Home View";

  return element;
};

export default HomeView;
