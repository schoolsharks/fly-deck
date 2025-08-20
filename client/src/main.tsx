import ReactDOM from "react-dom/client";
// import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
// import { store } from "./app/store";
import { ThemeProvider } from "./theme/ThemeProvider";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </BrowserRouter>
);
