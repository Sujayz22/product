import { useState } from 'react';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import Rating from '@mui/material/Rating';

const ProductCard = ({ imageUrl, title, price, originalPrice, rating, onSale }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const notifycart = () => toast("Item added to Cart", {
    position: "bottom-right",
    className: 'foo-bar'
  });

  const handleWishlistClick = () => {
    toggleWishlist();
    if (!isWishlisted) {
      toast("Item added to Wishlist", {
        position: "bottom-right",
        className: 'foo-bar'
      });
    } else {
      toast("Item removed from Wishlist", {
        position: "bottom-right",
        className: 'foo-bar'
      });
    }
  };

  return (
    <div className="relative m-2 w-72 h-[28rem] max-w-xs overflow-hidden rounded-lg bg-white shadow-md"> {/* Increased size */}
      <a href="/">
        <img className="h-64 w-full rounded-t-lg object-cover" src={imageUrl} alt={`${title} `} /> {/* Adjusted height */}
      </a>
      {onSale && (
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-bnr text-center text-sm text-white">
          Sale
        </span>
      )}
      <div className="mt-4 px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2.5 mb-1 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />
        </div>
        <p className='mb-4'>
            <span className="text-3xl font-bold text-slate-900">₹{price}</span>
            {onSale && originalPrice && <span className="text-sm text-cs2r pl-2 line-through">₹{originalPrice}</span>}
          </p>
        <div className="flex items-center justify-between space-x-2">
          <div
            onClick={notifycart}
            className="flex items-center rounded-md cursor-pointer bg-btn1 px-5 py-2.5 text-center text-md font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            ADD TO CART
          </div>
          <button
            onClick={handleWishlistClick}
            className="flex items-center rounded-md bg-gray-300 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <FontAwesomeIcon icon={isWishlisted ? faHeartSolid : faHeartRegular} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;