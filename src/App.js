import { Provider } from "react-redux"
import RouterControl from "./router"
import "./App.css"
import "./styles/globalStyles.css"
import store from "./store/store"

const App = () => {
  return(
    <>
      <Provider store={store}>
        <RouterControl />
      </Provider>
    </>
  );
}

export default App
