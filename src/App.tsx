import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

// import NavBar from "./Components/NavBar";
const Pokedex = lazy(() => import("./pages/pokedex"));
const Pokemon = lazy(() => import("./pages/pokemon"));
const NotFound = lazy(() => import("./pages/404"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/pokemon/:slug" element={<Pokemon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
