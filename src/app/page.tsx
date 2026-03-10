import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import { Article } from '@/types';

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Việt Nam đặt mục tiêu trở thành trung tâm AI của khu vực',
    excerpt: 'Chính phủ vừa phê duyệt chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng Trí tuệ nhân tạo đến năm 2030.',
    imageUrl: 'https://picsum.photos/seed/ai/800/450',
    category: 'Công nghệ',
    author: 'Minh Anh',
    date: '2024-07-26',
    url: '#',
  },
  {
    id: '2',
    title: 'Thị trường chứng khoán biến động mạnh sau thông tin lãi suất',
    excerpt: 'VN-Index ghi nhận phiên giảm điểm sâu nhất trong vòng 3 tháng qua, nhiều nhà đầu tư lo lắng.',
    imageUrl: 'https://picsum.photos/seed/stock/400/225',
    category: 'Kinh doanh',
    author: 'Hà Trang',
    date: '2024-07-26',
    url: '#',
  },
  {
    id: '3',
    title: 'Đội tuyển U23 Việt Nam sẵn sàng cho vòng loại châu Á',
    excerpt: 'HLV trưởng đã công bố danh sách 23 cầu thủ chính thức tham dự giải đấu quan trọng sắp tới.',
    imageUrl: 'https://picsum.photos/seed/football/400/225',
    category: 'Thể thao',
    author: 'Quốc Vượng',
    date: '2024-07-25',
    url: '#',
  },
  {
    id: '4',
    title: 'Phát hiện loài sinh vật biển mới ở độ sâu 5000m',
    excerpt: 'Các nhà khoa học quốc tế đã công bố phát hiện một loài cá mới với khả năng phát quang sinh học độc đáo.',
    imageUrl: 'https://picsum.photos/seed/science/400/225',
    category: 'Khoa học',
    author: 'Bảo Ngọc',
    date: '2024-07-25',
    url: '#',
  },
  {
    id: '5',
    title: 'Xuất khẩu nông sản đạt kỷ lục mới trong quý 2 năm 2024',
    excerpt: 'Giá trị xuất khẩu các mặt hàng nông sản chủ lực như gạo, cà phê, và trái cây tăng trưởng ấn tượng.',
    imageUrl: 'https://picsum.photos/seed/export/800/450',
    category: 'Kinh doanh',
    author: 'Thanh Hùng',
    date: '2024-07-26',
    url: '#',
  },
  {
    id: '6',
    title: 'VinFast ra mắt mẫu xe điện thông minh mới với nhiều cải tiến',
    excerpt: 'Mẫu xe mới được trang bị công nghệ tự lái cấp độ 3 và có phạm vi hoạt động lên tới 500km mỗi lần sạc.',
    imageUrl: 'https://picsum.photos/seed/car/800/450',
    category: 'Công nghệ',
    author: 'Gia Huy',
    date: '2024-07-25',
    url: '#',
  },
  {
    id: '7',
    title: 'Lạm phát toàn cầu có dấu hiệu hạ nhiệt, nhưng rủi ro vẫn còn',
    excerpt: 'Các ngân hàng trung ương lớn trên thế giới vẫn tỏ ra thận trọng trong các quyết định chính sách tiền tệ.',
    imageUrl: 'https://picsum.photos/seed/inflation/800/450',
    category: 'Thế giới',
    author: 'Thu An',
    date: '2024-07-24',
    url: '#',
  },
  {
    id: '8',
    title: 'Nắng nóng kỷ lục bao trùm châu Âu, gây ảnh hưởng nghiêm trọng',
    excerpt: 'Nhiều quốc gia phải ban bố tình trạng khẩn cấp do nhiệt độ tăng cao, gây ra cháy rừng và các vấn đề sức khỏe.',
    imageUrl: 'https://picsum.photos/seed/heatwave/400/225',
    category: 'Thế giới',
    author: 'Hoàng Nam',
    date: '2024-07-26',
    url: '#',
  },
  {
    id: '9',
    title: 'Tay vợt Lý Hoàng Nam vô địch giải quần vợt quốc tế',
    excerpt: 'Chiến thắng ấn tượng này giúp Lý Hoàng Nam cải thiện đáng kể vị trí trên bảng xếp hạng ATP.',
    imageUrl: 'https://picsum.photos/seed/tennis/800/450',
    category: 'Thể thao',
    author: 'Minh Chiến',
    date: '2024-07-24',
    url: '#',
  },
  {
    id: '10',
    title: 'Sơn Tùng M-TP hé lộ dự án âm nhạc mới sau thời gian im ắng',
    excerpt: 'Nam ca sĩ đã đăng tải một đoạn teaser ngắn trên mạng xã hội, thu hút sự chú ý lớn từ người hâm mộ.',
    imageUrl: 'https://picsum.photos/seed/music/400/225',
    category: 'Giải trí',
    author: 'Linh Chi',
    date: '2024-07-26',
    url: '#',
  },
];

const getArticlesByCategory = (category: string) => {
  return [mockArticles.find(a => a.category === category)!, ...mockArticles.filter(a => a.id !== mockArticles.find(a => a.category === category)!.id).slice(0, 4)];
}

export default function HomePage() {
  const heroMainArticle = mockArticles[0];
  const heroSideArticles = mockArticles.slice(1, 4);

  const techArticles = getArticlesByCategory('Công nghệ');
  const businessArticles = getArticlesByCategory('Kinh doanh');
  const sportArticles = getArticlesByCategory('Thể thao');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection mainArticle={heroMainArticle} sideArticles={heroSideArticles} />
        <CategorySection title="Công nghệ" articles={techArticles} />
        <CategorySection title="Kinh doanh" articles={businessArticles} />
        <CategorySection title="Thể thao" articles={sportArticles} />
      </main>
      <Footer />
    </div>
  );
}