import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import Cart from './components/cart/Cart';
import DetailView from './components/detailitem/DetailView';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';


function App() {
  return (
    <TemplateProvider >
      <ContextProvider>
        <BrowserRouter className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/product/:id' element={<DetailView />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
