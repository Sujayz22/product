import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { products } from '../helpers/productsData';

const ProductList = () => {
  const listRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    isDown = true;
    listRef.current.classList.add('active');
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = listRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
    listRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1; //scroll-fast
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftD = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRightD = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mx-4 py-4">
     
      <div
        ref={listRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide"
        style={{ maxWidth: 'calc(4 * 24.4rem)' }}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={handleMouseMove}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[18rem]"> {/* Fixed width for each card */}
            <ProductCard
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              onSale={product.onSale}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 my-4">
        <button onClick={scrollLeftD} className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
        </button>
        <button onClick={scrollRightD} className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
