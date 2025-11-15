import React from "react";

const Navigation_bar = (element) => {
  return (
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
        <span className="text-xl font-bold text-gray-800">BrandName</span>
      </div>

      <nav className="hidden md:flex space-x-8">
        {element.navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default Navigation_bar;
