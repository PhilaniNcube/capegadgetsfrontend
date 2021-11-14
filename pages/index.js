/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, StarIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { API_URL } from '../config';

export default function Home({ categories, brands, products }) {
  return (
    <Fragment>
      <header className="bg-white shadow ">
        <nav aria-label="Top"></nav>
        <nav aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        </nav>
      </header>

      <div className="pt-12 lg:max-w-7xl lg:mx-auto lg:pt-16 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <aside className="hidden lg:block lg:col-span-2">
          <nav id="nav" aria-label="Categories">
            <ul className="border-gray-200 space-y-4">
              {categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link href={`/categories/${category.slug}`} passHref>
                      <a className="text-sm text-gray-500">{category.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className="lg:col-span-10">
          {/*------Hero-----*/}
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-none lg:px-0">
            <div
              className="relative h-96 rounded-lg flex flex-col justify-end overflow-hidden bg-center bg-cover"
              style={{
                backgroundImage: 'url(/images/electronics.jpg)',
                backgroundRepeat: 'no-repat',
              }}
            >
              <div className="p-6 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-md lg:p-8 xl:px-10">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  New Arrivals
                </h1>
                <p className="text-sm text-gray-200 mt-2">
                  Quality and affordable products delivered to your door with
                  personalized service
                </p>
              </div>
            </div>
          </div>

          {/*------Menu------*/}

          <Disclosure
            id="menu"
            className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:hidden"
          >
            {({ open }) => (
              <Fragment>
                <Disclosure.Button
                  id="button"
                  as="button"
                  className={`${
                    open ? '' : ''
                  } max-w-7xl mx-auto flex justify-between mt-10 items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden`}
                >
                  <span
                    className={`${
                      open ? '' : ''
                    } text-sm font-medium text-gray-900`}
                  >
                    Menu
                  </span>
                  {open ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  id="nav"
                  as="nav"
                  aria-label="Categories"
                  className="pt-4 px-2"
                >
                  <ul
                    className={`${
                      open ? 'border-b' : ''
                    } border-t border-gray-200 pt-6 space-y-4`}
                  >
                    {categories.map((category) => {
                      return (
                        <li key={category.id}>
                          <Link href={category.slug} passHref>
                            <a className="text-sm text-gray-500">
                              {category.name}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Disclosure.Panel>
                <div
                  aria-hidden="true"
                  className={`${
                    open ? 'border-transparent' : 'border-gray-200'
                  } mt-4 mx-2 border-b`}
                ></div>
              </Fragment>
            )}
          </Disclosure>

          {/*------Product Grid------*/}
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
                        <p className="sr-only">
                          {product.ratings} out of 5 stars
                        </p>
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
        </main>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/categories`);
  const res = await axios.get(`${API_URL}/brands?_sort=name:ASC`);
  const resProducts = await axios.get(`${API_URL}/products`);

  return {
    props: { categories: data, brands: res.data, products: resProducts.data },
  };
}
