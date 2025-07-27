import React, { useState } from "react";

const products = [
  {
    src: "product_01.jpg",
    title: "Winter Leather Boots",
    price: "$20",
    text: "Perfect for cold days and rainy weather. Made from high-quality materials that last.",
    label: "Reviews (24)",
    icon: (
      <div>
        <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
        <i className="fas fa-star"></i>
      </div>
    ),
    category: "featured",
  },
  {
    src: "product_02.jpg",
    title: "Padded Wool Coat",
    price: "$30",
    text: "Keeps you warm and stylish all winter long. Ideal for daily wear or travel.",
    label: "Reviews (18)",
    icon: (
      <div>
        <i className="fas fa-star"></i>
      </div>
    ),
    category: "flash",
  },
  {
    src: "product_03.jpg",
    title: "Soft Winter Scarf",
    price: "$40",
    text: "Add a cozy touch to your outfit with this soft scarf. Available in many trendy colors.",
    label: "Reviews (12)",
    icon: (
      <div>
        <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
      </div>
    ),
    category: "featured",
  },
  {
    src: "product_04.jpg",
    title: "Sock Snowman Toy",
    price: "$50",
    text: "A creative handmade snowman made of socks. Great for decoration or a cute gift.",
    label: "Reviews (30)",
    icon: (
      <div>
        <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
        <i className="fas fa-star"></i> <i className="fas fa-star"></i>
      </div>
    ),
    category: "last",
  },
  {
    src: "product_05.jpg",
    title: "Knitted Wool Sweater",
    price: "$60",
    text: "Stay warm and comfortable with this soft wool sweater. Simple design fits all styles.",
    label: "Reviews (15)",
    icon: (
      <div>
        <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
        <i className="fas fa-star">
          {" "}
          <i className="fas fa-star"></i> <i className="fas fa-star"></i>
        </i>
      </div>
    ),
    category: "flash",
  },
  {
    src: "product_06.jpg",
    title: "Snowman Christmas Decor",
    price: "$70",
    text: "Decorate your home with a magical snowman touch. Lightweight and easy to place anywhere.",
    label: "Reviews (20)",
    icon: (
      <div>
        <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
        <i className="fas fa-star"></i>
      </div>
    ),
    category: "last",
  },
];
const navLinks = [
  { name: "All Products", category: "all" },
  { name: "Featured", category: "featured" },
  { name: "Flash Deals", category: "flash" },
  { name: "Last Minute", category: "last" },
];
const Products = () => {
  const [filter, setFilter] = useState("all");
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <>
      <div className="relative mt-20 h-[50vh] uppercase ">
        <img
          src="products-heading.jpg"
          alt="products-heading"
          className=" w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">
            new arrivals
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-amber-50 mt-2">
            sixteen products
          </h1>
        </div>
      </div>
      <div className="mt-10 md:mt-20 w-full md:w-[80%] mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center  md:gap-5 text-sm md:text-base font-semibold text-gray-600 uppercase border-b border-gray-200 pb-4 md:pb-8">
          {navLinks.map((link) => (
            <li
              onClick={() => setFilter(link.category)}
              className={`cursor-pointer transition duration-300 px-3 py-2 md:px-2 md:py-1 rounded-md ${
                filter === link.category
                  ? "text-orange-600"
                  : "hover:text-orange-600"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      <div className=" m-20 w-[80%] mx-auto">
        <div className="card-parent flex flex-wrap gap-8 justify-center">
          {filteredProducts.map((product) => (
            <div className="card mt-10 w-[370px] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
              {/* the top of the card */}
              <div>
                <img src={product.src} alt="product" />
              </div>
              {/* the bottom of the card */}
              <div className="content p-7 flex flex-col gap-7">
                <div className="flex justify-between font-semibold text-lg">
                  <h3 className="text-cyan-700">{product.title}</h3>
                  <p>{product.price}</p>
                </div>
                <div className="text-gray-500 text-sm">
                  <span>{product.text}</span>
                </div>
                <div className="flex justify-between">
                  <div className="text-orange-600">{product.icon}</div>
                  <span className="text-orange-600 text-sm">
                    {product.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
