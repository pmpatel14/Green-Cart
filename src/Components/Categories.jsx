import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";

const Categories = () => {
  const { navigate, addToCart, cartItems, removeFromCart } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6
    xl:grid-cols-7 mt-6 gap-6"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col
        justify-center items-center relative"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-108 transition
            max-w-28"
            />
            <p className="text-sm font-medium">{category.text}</p>

            {/* Add to Cart Button */}
            {category.featuredProduct && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute bottom-2 right-2"
              >
                {!cartItems[category.featuredProduct._id] ? (
                  <button
                    className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 w-16 h-8 rounded cursor-pointer"
                    onClick={() => addToCart(category.featuredProduct._id)}
                  >
                    <img
                      src={assets.cart_icon}
                      alt="cart_icon"
                      className="w-4"
                    />
                    <span className="text-xs">Add</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-center gap-1 w-16 h-8 bg-primary/25 rounded select-none">
                    <button
                      onClick={() =>
                        removeFromCart(category.featuredProduct._id)
                      }
                      className="cursor-pointer text-sm px-1 h-full"
                    >
                      -
                    </button>
                    <span className="w-4 text-center text-xs">
                      {cartItems[category.featuredProduct._id]}
                    </span>
                    <button
                      onClick={() => addToCart(category.featuredProduct._id)}
                      className="cursor-pointer text-sm px-1 h-full"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
