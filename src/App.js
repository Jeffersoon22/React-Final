import "./App.css";
import Routing from "./components/Routing";
import { Provider } from "react-redux";
import store from "./store/store";
import { useEffect } from "react";
import { authenticationListener } from "./services/authentication";

function App() {
  useEffect(() => {
    authenticationListener();
  }, []);

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
