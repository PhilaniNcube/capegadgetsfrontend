/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import { API_URL } from '../config';

const categories = ({ categories }) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4">
            {categories.map((category) => (
              <div key={category.id} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-2 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={category.image.formats.medium.url}
                    alt={category.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-2 mb-6 text-sm md:text-lg font-bold text-gray-500">
                  <Link href={`/category/${category.slug}`}>
                    <a href={category.slug}>
                      <span className="absolute inset-0" />
                      {category.name}
                    </a>
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default categories;

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/categories`);

  return {
    props: { categories: data },
  };
}
