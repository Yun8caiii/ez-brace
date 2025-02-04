const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} EZ-Brace. All rights reserved.</p>
          <div className="mt-4">
            <a href="#privacy" className="hover:underline mx-2">Privacy Policy</a>
            <a href="#terms" className="hover:underline mx-2">Terms of Service</a>
            <a href="#contact" className="hover:underline mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;