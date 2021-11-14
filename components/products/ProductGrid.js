import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductGrid = ({ products }) => {
  return (
    <section aria-labelledby="products-heading" className="mt-12">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 px-4 sm:px-6 lg:max-w-none lg:px-0 xl:gap-8 lg:gap-y-10">
        {products.map((product) => {
          console.log(product);
          return (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden group"
            >
              <Image
                src={product.mainImage.formats.small.url}
                alt={product.name}
                width={500}
                height={500}
                className="h-80 w-80 object-center object-cover group-hover:opacity-80 aspect-w-1 aspect-h-1"
              />
              <div className="bg-white p-6 text-center">
                <Link href={`/products/${product.slug}`} passHref>
                  <a className="text-sm font-medium text-gray-900">
                    {product.name}
                  </a>
                </Link>

                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.ratings} out of 5 stars</p>
                  <div className="flex items-center">
                    <StarIcon
                      className={`${
                        product.ratings > 0
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      } 'flex-shrink-0 h-5 w-5'`}
                    />
                    <StarIcon
                      className={`${
                        product.ratings > 1
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      } 'flex-shrink-0 h-5 w-5'`}
                    />
                    <StarIcon
                      className={`${
                        product.ratings > 2
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      } 'flex-shrink-0 h-5 w-5'`}
                    />
                    <StarIcon
                      className={`${
                        product.ratings > 3
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      } 'flex-shrink-0 h-5 w-5'`}
                    />
                    <StarIcon
                      className={`${
                        product.ratings > 4
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      } 'flex-shrink-0 h-5 w-5'`}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.reviewCount} Reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  R{(product.price / 100).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;
