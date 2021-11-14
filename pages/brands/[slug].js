import React from 'react';
import { API_URL } from '../../config';

const brand = ({ brand }) => {
  console.log(brand);
  return <div>{brand.name}</div>;
};

export default brand;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/brands?slug=${slug}`);
  const brands = await res.json();

  return {
    props: {
      brand: brands[0],
    },
  };
}
