import React, { useState } from "react";

const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
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
    },
    ];

    const Home = () => {
    const [current, setCurrent] = useState(0);
    return (
        <>
        {/* ************************Crousel****************************** */}
        <div
            id="default-carousel"
            className="relative w-full h-screen overflow-hidden"
            data-carousel="slide"
        >
            {/* Carousel wrapper */}
            <div className="relative w-full h-full overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
            {/* Items */}
            {images.map((img, idx) => (
                <div
                key={img}
                className={`${
                    current === idx ? "" : "hidden"
                } duration-700 ease-in-out absolute inset-0`}
                data-carousel-item
                >
                <img
                    src={img}
                    className="block w-full h-full object-cover object-center"
                    alt={`slide${idx + 1}`}
                />
                </div>
            ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {images.map((_, idx) => (
                <button
                key={idx}
                type="button"
                className={`w-3 h-3 rounded-full ${
                    current === idx ? "bg-white" : "bg-gray-400"
                }`}
                aria-current={current === idx ? "true" : "false"}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                ></button>
            ))}
            </div>
            {/* Slider controls */}
            <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={() =>
                setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
            >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                />
                </svg>
                <span className="sr-only">Previous</span>
            </span>
            </button>
            <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                />
                </svg>
                <span className="sr-only">Next</span>
            </span>
            </button>
        </div>
        {/* *********************************Product****************************************** */}
        <div className=" m-20 w-[80%] mx-auto">
            <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-4 mb-4 w-full gap-2">
                <h2 className="text-2xl sm:text-3xl">Latest Products</h2>
                <p className="text-orange-600 font-bold cursor-pointer text-sm sm:text-base">
                view all products <i className="fas fa-angle-right"></i>
                </p>
            </div>

            <div className="card-parent flex flex-wrap gap-8 justify-center lg:justify-between ">
                {products.map((product) => (
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
            {/* **********************About Section***************************** */}
            <div className="w-full my-20 px-4">
            <div className="flex flex-col sm:flex-row justify-between border-b border-gray-200 pb-4 mb-4 w-full">
                <h2 className="text-2xl sm:text-3xl">About Sixteen Clothing</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-16 pb-20 gap-10 border-b border-gray-200">
                <div className="left-side w-full md:w-[50%] flex flex-col gap-4">
                <h3 className="text-cyan-700 text-xl">
                    Looking for the best products?
                </h3>
                <p className="break-words text-gray-600 text-sm">
                    We are here to help you find the perfect products for your
                    needs. If you have any questions or need assistance, feel free
                    to contact us. <span className="text-blue-500"> Our team </span>{" "}
                    is dedicated to providing quality products and excellent
                    customer service.
                </p>
                <ul className="list-[square] pl-5 text-gray-600 text-sm flex flex-col gap-4">
                    <li>High quality products</li>
                    <li>Fast delivery</li>
                    <li>24/7 customer support</li>
                    <li>Easy returns</li>
                    <li>Secure payment</li>
                </ul>
                <button className="mt-4 bg-orange-600 text-amber-50 p-3 w-40 rounded-lg cursor-pointer hover:bg-neutral-800 transition duration-300 text-sm">
                    Read More
                </button>
                </div>
                <div className="right-side w-full md:w-[50%]">
                <img
                    src="feature-image.jpg"
                    alt="feature"
                    className="w-full h-auto object-cover rounded-lg"
                />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between my-16 mx-0 lg:mx-5 bg-gray-100 p-6 md:p-10 rounded-xl gap-6 items-center">
                <div className="left-side w-full lg:w-[70%] flex flex-col gap-4 text-center lg:text-left">
                <h2 className="text-cyan-700 text-xl sm:text-2xl">
                    Creative & Unique <b>Sixteen</b> Products
                </h2>
                <p className="break-words text-gray-600 text-sm">
                    Discover a carefully curated selection of stylish and
                    one-of-a-kind items, perfect for every season and crafted to add
                    charm to your lifestyle.
                </p>
                </div>
                <div>
                <button className="bg-orange-600 text-amber-50 p-3 w-40 rounded-lg cursor-pointer hover:bg-neutral-800 transition duration-300 text-sm">
                    Purchase Now
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Home;
