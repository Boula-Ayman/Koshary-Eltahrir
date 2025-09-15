const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 كشري التحرير. كل الحقوق محفوظة.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-red-500">
            Facebook
          </a>
          <a href="#" className="hover:text-red-500">
            Instagram
          </a>
          <a href="#" className="hover:text-red-500">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
