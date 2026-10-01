import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedUser from './components/ProtectedUser.jsx';
import ProtectedAdmin from './components/ProtectedAdmin.jsx';

import HomePage from './pages/HomePage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import SellPage from './pages/SellPage.jsx';
import RepairPage from './pages/RepairPage.jsx';
import StoresPage from './pages/StoresPage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import WishlistPage from './pages/WishlistPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import OrderSuccessPage from './pages/OrderSuccessPage.jsx';

export default function App(){
  return (
    <Routes>

      <Route path="/" element={<HomePage/>}/>

      <Route path="/buy/:type" element={<CatalogPage/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>

      <Route path="/sell" element={<SellPage/>}/>
      <Route path="/sell/:type" element={<SellPage/>}/>

      <Route path="/repair" element={<RepairPage/>}/>
      <Route path="/repair/:type" element={<RepairPage/>}/>

      <Route path="/stores" element={<StoresPage/>}/>

      <Route
        path="/cart"
        element={
          <ProtectedUser>
            <CartPage/>
          </ProtectedUser>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedUser>
            <CheckoutPage/>
          </ProtectedUser>
        }
      />

      <Route
        path="/order-success"
        element={
          <ProtectedUser>
            <OrderSuccessPage/>
          </ProtectedUser>
        }
      />

      <Route path="/login" element={<AuthPage/>}/>

      <Route
        path="/account"
        element={
          <ProtectedUser>
            <AccountPage/>
          </ProtectedUser>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedUser>
            <OrdersPage/>
          </ProtectedUser>
        }
      />

      <Route
        path="/wishlist"
        element={
          <ProtectedUser>
            <WishlistPage/>
          </ProtectedUser>
        }
      />

      <Route path="/compare" element={<CatalogPage/>}/>

      <Route path="/articles" element={<BlogPage/>}/>
      <Route path="/articles/:id" element={<ArticlePage/>}/>

      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/track-order" element={<SupportPage kind="track"/>}/>

      <Route path="/about" element={<InfoPage kind="about"/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/faq" element={<FaqPage/>}/>
      <Route path="/terms" element={<InfoPage kind="terms"/>}/>
      <Route path="/privacy" element={<InfoPage kind="privacy"/>}/>
      <Route path="/warranty" element={<InfoPage kind="warranty"/>}/>
      <Route path="/returns" element={<InfoPage kind="returns"/>}/>

      <Route
        path="/admin/login"
        element={<AdminLoginPage/>}
      />

      <Route
        path="/admin"
        element={
          <ProtectedAdmin>
            <AdminPage/>
          </ProtectedAdmin>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace/>}
      />

    </Routes>
  );
}