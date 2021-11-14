import { createContext, useState, useEffect } from 'react';

import { API_URL } from '../config';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const [brands, setBrands] = useState({});

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  // Get categories
  const getCategories = async () => {
    const res = await fetch(`${API_URL}/categories`);
    setCategories(res.json());
  };

  // Get Brands
  const getBrands = async () => {
    const res = await fetch(`${API_URL}/categories`);
    setBrands(res.json());
  };

  return (
    <NavContext.Provider value={{ categories, brands }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
