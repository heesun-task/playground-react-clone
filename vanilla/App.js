import { Counter } from "./src/components/Counter.js";
import CustomReact from "./src/customReact";

function App () {
  const layout = document.createElement('div');
  layout.setAttribute('id', 'content');
  layout.innerHTML = `<p>test zone</p>`;
  document.getElementById('root').append(layout);


  CustomReact.render(Counter)
}
App();
