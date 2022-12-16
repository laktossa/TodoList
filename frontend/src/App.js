import { RouterProvider } from "react-router-dom";
import routes from "./routes/router";

function App() {
  return (
    <div className="h-screen">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
