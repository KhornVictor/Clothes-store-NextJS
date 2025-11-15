import Navigation_bar from "../components/ui/Navigation_bar.jsx";

const Layout = () => {
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <Navigation_bar navItems={["Home", "Features", "Pricing", "About"]} />
      </header>

      <body className="w-full">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your{" "}
              <span className="text-blue-600">Digital Experience</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              The all-in-one platform to streamline your workflow and boost
              productivity
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-medium text-lg transition-colors border border-gray-200 shadow-sm">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-gray-600">
                Everything you need to succeed in one integrated platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Analytics",
                  desc: "Real-time insights and customizable dashboards",
                },
                {
                  title: "Automation",
                  desc: "Streamline repetitive tasks with smart workflows",
                },
                {
                  title: "Collaboration",
                  desc: "Seamless team communication and file sharing",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Join 10,000+ companies using our platform to transform their
                business
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
                Create Free Account
              </button>
            </div>
          </div>
        </section>
      </body>

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
