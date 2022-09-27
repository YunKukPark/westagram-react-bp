import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'Pages/Login';
import Home from 'Pages/Home';
import PageNotFound from 'Pages/404/PageNotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
