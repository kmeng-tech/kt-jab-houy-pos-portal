import React from 'react';
import { ProductSearch } from '../components/ProductSearch';
import { Cart } from '../components/Cart';

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="lg:col-span-2">
        <ProductSearch />
      </div>

      <div className="lg:col-span-1">
        <Cart />
      </div>
    </>
  );
};

export default DashboardPage;
