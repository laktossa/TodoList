import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes/router";
import stores from "./stores/reducers";

function App() {
  return (
    <div className="h-screen">
      <Provider store={stores}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
