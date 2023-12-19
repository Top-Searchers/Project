
import Home from "./pages/landingpage/Home";

import { Provider } from 'react-redux';
import store from "./redux/Store";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./pages/cart/Cart";
import BookDetails from "./pages/cart/book_detail/BookDetails";

function App() {


  return (
  <>
  
  <Provider store={store}>


    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart/" element={<Cart/>} />
        <Route path="/BookDetail/:id" element={<BookDetails/>}/>
      </Routes>


    </Router>


    


  </Provider>
  

  </>
  );
}

export default App;
