import { Search, Menu, User } from 'lucide-react';

const Header = () => {
  const navLinks = ["Thời sự", "Thế giới", "Kinh doanh", "Công nghệ", "Thể thao", "Giải trí"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-blue-600">TIN TỨC</a>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <a key={link} href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <User className="h-4 w-4" />
              <span>Đăng nhập</span>
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;