import { ToastContainer } from "react-toastify";
import "../src/styles/App.css";
import CharProvider from "./context/CharContext";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <ToastContainer />
      <CharProvider>
        <Routes />
      </CharProvider>
    </>
  );
};

export default App;
