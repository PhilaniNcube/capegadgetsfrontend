import React, { Fragment } from 'react';
import Image from 'next/image';
import { API_URL } from '../../config';

const product = ({ product }) => {
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto mt-6 lg:mt-10 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src={product.mainImage.formats.medium.url}
              width={800}
              height={800}
              alt={product.name}
              className="aspect-w-1 aspect-h-1 w-full bg-gray-300"
            />
          </div>
        </div>
        <div className="w-full">
          <span className="flex justify-between font-semibold md:font-bold text-md lg:text-xl">
            <h1 className="text-gray-900">{product.name}</h1>
            <h1 className="text-gray-700">
              R{(product.price / 100).toFixed(2)}
            </h1>
          </span>
          <div>
            <button
              type="submit"
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add To Cart
            </button>

            <div className="w-full">
              <h3 className="mt-6 font-medium">Description:</h3>
              <p className="text-gray-500">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default product;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/products?slug=${slug}`);
  const products = await res.json();

  return {
    props: {
      product: products[0],
    },
  };
}
