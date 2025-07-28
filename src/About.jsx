import React from "react";

const Team = [
    {
        src: "person-01.png",
        name: "Johnny William",
        job: "CO-Founder",
        text: "As a co-founder, Johnny brings vision and leadership that drive the team forward with innovation and purpose.",
        label: "Reviews (24)",
        icon: (
        <div>
            <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
            <i className="fas fa-star"></i>
        </div>
        ),
    },
    {
        src: "person-02.png",
        name: "George Walker",
        job: "Product Expert",
        text: "George ensures every product meets the highest standards, combining functionality with sleek design.",
        label: "Reviews (18)",
        icon: (
        <div>
            <i className="fas fa-star"></i>
        </div>
        ),
    },
    {
        src: "person-03.png",
        name: "Ahmed Taha",
        job: "Chief Marketing",
        text: "Ahmed leads creative marketing campaigns that connect with audiences and elevate brand presence.",
        label: "Reviews (12)",
        icon: (
        <div>
            <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
        </div>
        ),
    },
    {
        src: "person-04.png",
        name: "Maryam Khaled",
        job: "Product Specialist",
        text: "Maryam specializes in finding the right product solutions tailored to customer needs and preferences.",
        label: "Reviews (30)",
        icon: (
        <div>
            <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
            <i className="fas fa-star"></i> <i className="fas fa-star"></i>
        </div>
        ),
    },
    {
        src: "person-05.png",
        name: "Michael Soft",
        job: "General Manager",
        text: "Michael manages operations with a focus on efficiency and teamwork, ensuring seamless delivery of excellence.",
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
        src: "person-06.png",
        name: "Karry Pitcher",
        job: "Product Photographer",
        text: "Karry captures the essence of every product through stunning visuals that highlight quality and detail.",
        label: "Reviews (20)",
        icon: (
        <div>
            <i className="fas fa-star"></i> <i className="fas fa-star"></i>{" "}
            <i className="fas fa-star"></i>
        </div>
        ),
    },
    ];
    const services = [
    {
        title: "Global Collection",
        text: "Access a wide range of products collected from around the world. Expand your market reach easily and efficiently.",
        icon: "fas fa-globe",
    },
    {
        title: "Customer Relations",
        text: "Build lasting relationships through excellent customer service. Understand and meet your clients' needs effectively.",
        icon: "fas fa-users",
    },
    {
        title: "Product Management",
        text: "Empower your team with efficient product oversight. Organize, monitor and deliver the right products at the right time.",
        icon: "fas fa-box",
    },
    ];

    const About = () => {
    return (
        <>
        <div className="relative mt-20 h-[50vh] uppercase ">
            <img
            src="about-heading.jpg"
            alt="products-heading"
            className=" w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">
                about us
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-amber-50 mt-2">
                our company
            </h1>
            </div>
        </div>

        <div className=" m-20 w-[80%] mx-auto">
            <div className="border-b border-gray-200 pb-4 mb-4 w-full">
            <h2 className="text-2xl sm:text-3xl">Our Background</h2>
            </div>

            <div className="w-full my-20 px-4">
            <div className="flex flex-col lg:flex-row justify-between mt-16 pb-20 gap-10">
                {/* Left Side => Image */}
                <div className="left-side w-full lg:w-1/2">
                <img
                    src="feature-image.jpg"
                    alt="feature"
                    className="w-full h-auto object-cover rounded-lg"
                />
                </div>

                {/* Right Side => Text */}
                <div className="right-side w-full lg:w-1/2 flex flex-col gap-6">
                <h3 className="text-cyan-700 text-xl">
                    Who we are & What we do?
                </h3>

                <p className="text-gray-600 text-sm leading-7">
                    We are a passionate team dedicated to bringing you the latest
                    trends and highest quality products in fashion and lifestyle.
                    Our mission is to make shopping easy, enjoyable, and accessible
                    for everyone, no matter where you are.
                </p>

                <p className="text-gray-600 text-sm leading-7 border-b border-gray-200 pb-6">
                    What we do is more than just selling products—we focus on
                    delivering a unique experience, from fast shipping to excellent
                    customer support. We carefully select every item to ensure it
                    meets our standards for style, comfort, and value.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <i className="fab fa-facebook-f rounded-lg p-4 bg-gray-100 hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer"></i>
                    <i className="fab fa-twitter rounded-lg p-4 bg-gray-100 hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer"></i>
                    <i className="fab fa-instagram rounded-lg p-4 bg-gray-100 hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer"></i>
                    <i className="fab fa-linkedin-in rounded-lg p-4 bg-gray-100 hover:bg-orange-600 hover:text-white transition duration-300 cursor-pointer"></i>
                </div>
                </div>
            </div>

            <div className="border-b border-gray-200 pb-4 mt-10 mb-4 w-full">
                <h2 className="text-2xl sm:text-3xl">Our Team Members</h2>
            </div>

            <div className="card-parent flex flex-wrap gap-8 justify-center lg:justify-between ">
                {Team.map((member) => (
                <div className="card mt-10 w-[370px] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer group">
                    {/* the top of the card */}
                    <div className="img-container relative w-full h-[260px] overflow-hidden bg-gray-100">
                    <img
                        src={member.src}
                        alt="person"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 pointer-events-none"></div>

                    <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-300">
                        <a
                        href="https://github.com"
                        target="_blank"
                        className="text-white text-xl hover:text-orange-600 transition duration-300"
                        >
                        <i className="fab fa-github text-4xl"></i>
                        </a>
                        <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-white text-xl hover:text-orange-600 transition duration-300"
                        >
                        <i className="fab fa-linkedin text-4xl"></i>
                        </a>
                    </div>
                    </div>

                    {/* the bottom of the card */}
                    <div className="content p-7 flex flex-col gap-7">
                    <div className="flex flex-col items-center font-semibold text-lg">
                        <h3 className="text-cyan-700">{member.name}</h3>
                        <p className="text-orange-600 text-sm">{member.job}</p>
                    </div>
                    <div className="text-gray-500 text-sm text-center">
                        <span>{member.text}</span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        <div className="relative bg-fixed bg-center bg-cover bg-[url('services-bg.jpg')] min-h-[600px] py-16 px-4 flex flex-col items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            {/* cards */}
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-6 max-w-6xl w-full">
            {services.map((card) => (
                <div className="w-[280px] bg-white shadow-lg rounded-lg overflow-hidden  hover:scale-105 transition duration-300">
                <div className="bg-orange-600 flex justify-center items-center h-32">
                    <i className={`${card.icon} text-4xl text-white`}></i>
                </div>
                <div className="p-4 text-center space-y-3">
                    <h2 className="text-xl font-semibold text-gray-800">
                    {card.tite}
                    </h2>
                    <p className="text-gray-600 text-sm">{card.text}</p>
                    <button className="mt-4 bg-orange-600 hover:bg-neutral-800 text-white py-1.5 px-4 rounded-full transition duration-300 cursor-pointer">
                    Learn More
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>

        <div className=" m-20 w-[80%] mx-auto">
            <div className="border-b border-gray-200 pb-4 mt-10 mb-4 w-full">
            <h2 className="text-2xl sm:text-3xl">Developer</h2>
            </div>
            <div className="flex flex-col justify-between ">
            <h2 className="text-lg font-semibold text-cyan-700">Zeinab Hassan</h2>
            <p className="text-gray-600 text-sm leading-7">
                Passionate Front-End Developer focused on crafting seamless and
                responsive user experiences using React.js and modern web
                technologies. Skilled in building dynamic interfaces, optimizing
                performance, and turning ideas into accessible, scalable products
                with clean, maintainable code.
            </p>

            <div className="flex gap-4 mt-4">
                <a
                href="https://github.com/zeinab712"
                target="_blank"
                className=" hover:text-orange-600 transition duration-300"
                >
                <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                href="https://www.linkedin.com/in/zeinab-hassan-aab306344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className=" hover:text-orange-600 transition duration-300"
                >
                <i className="fab fa-linkedin text-2xl"></i>
                </a>
            </div>
            </div>
        </div>
        </>
    );
};

export default About;
