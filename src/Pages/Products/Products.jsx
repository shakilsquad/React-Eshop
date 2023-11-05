/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
    const {products} = useLoaderData()
    console.log(products);
    return (
        <div className='p-7'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                  products?.map( product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;