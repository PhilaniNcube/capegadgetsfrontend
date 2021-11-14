import React from 'react';
import { API_URL } from '../../config';

const category = ({ category }) => {
  console.log(category);
  return <div>{category.name}</div>;
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
