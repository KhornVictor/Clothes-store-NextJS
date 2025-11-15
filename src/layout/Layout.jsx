import Navigation_bar from "../components/ui/Navigation_bar";
import Homepage from "../components/ui/Homepage";

const Layout = () => {
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <Navigation_bar navItems={["Home", "Features", "Pricing", "About"]} />
      </header>

      <Homepage />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                <span className="text-white font-bold text-xl">BrandName</span>
              </div>
              <p className="mt-2 max-w-xs">
                Building the future of digital experiences
              </p>
            </div>

            <div className="flex space-x-6">
              {["Terms", "Privacy", "Contact", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} BrandName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
