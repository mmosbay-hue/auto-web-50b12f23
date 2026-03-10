import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">TIN TỨC</h3>
            <p className="text-gray-400 text-sm">Trang thông tin điện tử tổng hợp nhanh và chính xác nhất. Tin tức 24h về các lĩnh vực kinh tế, xã hội, thể thao, giải trí...</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Chuyên mục</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Thời sự</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Thế giới</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kinh doanh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Công nghệ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Thể thao</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Thông tin</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Liên hệ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Chính sách bảo mật</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Theo dõi chúng tôi</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 Trang Tin Tức. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;