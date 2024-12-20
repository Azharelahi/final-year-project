import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Press
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Shipping & Returns
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Order Tracking
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">
            Sign up for our newsletter to receive exclusive deals and updates.
          </p>
          <form action="#">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md w-full mb-4 text-gray-800"
            />
            <button className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} E-Commerce Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
