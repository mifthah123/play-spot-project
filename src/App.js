import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import Header from './Components/layout/header';
import AddTocart from './Components/addTocart';
import StoreContextProvider from './store/StoreContextProvider';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "add-cart",
      element: <AddTocart />
    }
  ])
  return (
    <div className="App">
      <StoreContextProvider>
        <Header />
        <RouterProvider router={router}></RouterProvider>
      </StoreContextProvider>
      {/* <Home /> */}
    </div>
  );
}

export default App;
