import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import MyNavbar from './components/MyNavbar';
import ProductPravider from './context/ProductPravider';

const MyRoutes = () => {
    return (
       <ProductPravider>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route exact path="/create" element={<AddPage/>}/>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="/edit/:name/:id" element={<EditPage/>}/>
                </Routes>
                
            </BrowserRouter>
       </ProductPravider>
    );
};

export default MyRoutes;