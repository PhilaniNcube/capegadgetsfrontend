import React, { Fragment } from 'react';
import ProductGrid from '../../components/products/ProductGrid';
import { API_URL } from '../../config';

const category = ({ category }) => {
  console.log(category);
  return (
    <Fragment>
      <main className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* --- Hero --- */}
        <header className="mt-6 lg:mt-10">
          <div
            className="relative h-60 lg:h-96 rounded-lg flex flex-col justify-end overflow-hidden bg-center bg-cover"
            style={{
              backgroundImage: `url(${category.bannerImage.formats.medium.url})`,
              backgroundRepeat: 'no-repat',
            }}
          >
            <div className="p-6 bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-md lg:p-8 xl:px-10">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                {category.name}
              </h1>
            </div>
          </div>
        </header>

        <ProductGrid products={category.products} />
      </main>
    </Fragment>
  );
};

export default category;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/categories?slug=${slug}`);
  const categories = await res.json();

  return {
    props: {
      category: categories[0],
    },
  };
}
