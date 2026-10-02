import React from 'react'
import { Link } from 'react-router-dom';

export default function Product() 
{

    let allProducts = [
    {
        id: 101,
        title: "New Blue Shirt",
        poster: "https://www.powerlook.in/cdn/shop/files/14017211_5_89676b53-d97a-47fb-acc2-d888c896a5b3.jpg?v=1762945236",
        desc: "The Shirt is of good quality",
        price: 1200
    },
    {
        id: 102,
        title: "The Nice Cargo Pants",
        poster: "https://m.media-amazon.com/images/I/81xRg0piFpL._AC_UY1100_.jpg",
        desc: "The Pants are of good quality",
        price: 9000
    },
    {
        id: 103,
        title: "Classic Black T-Shirt",
        poster: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        desc: "A comfortable and stylish black t-shirt",
        price: 799
    },
    {
        id: 104,
        title: "Premium White Sneakers",
        poster: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        desc: "Clean and premium sneakers for everyday wear",
        price: 2499
    },
    {
        id: 105,
        title: "Oversized Green Hoodie",
        poster: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        desc: "A warm and comfortable oversized hoodie",
        price: 1899
    },
    {
        id: 106,
        title: "Slim Fit Blue Jeans",
        poster: "https://images.unsplash.com/photo-1542272604-787c3835535d",
        desc: "Classic blue jeans with a modern slim fit",
        price: 1599
    },
    {
        id: 107,
        title: "Casual Brown Jacket",
        poster: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        desc: "A stylish jacket perfect for casual outings",
        price: 2999
    },
    {
        id: 108,
        title: "Sports Running Shoes",
        poster: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
        desc: "Lightweight running shoes designed for comfort",
        price: 2199
    },
    {
        id: 109,
        title: "Classic Grey Sweatshirt",
        poster: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
        desc: "Soft grey sweatshirt for everyday comfort",
        price: 1299
    },
    {
        id: 110,
        title: "Casual Cotton Shorts",
        poster: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
        desc: "Comfortable cotton shorts for casual wear",
        price: 699
    }
];

  return (
    <div>
        <div id="productHeader">
            <h2>Best Selling Products</h2>
        </div>
        <div id="productContainer">
            {
                allProducts.map((e)=>(
                    <div className='productCard'>
                        <img src={e.poster} alt={e.title} />
                        <h3>{e.title}</h3>
                        <p>{e.desc}</p>
                        <h5>{e.price}</h5>
                        <Link to={`/details/${e.id}`} ><button>Buy Now</button></Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
