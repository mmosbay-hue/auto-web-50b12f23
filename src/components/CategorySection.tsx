import { Article } from '@/types';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  articles: Article[];
}

const CategorySection = ({ title, articles }: CategorySectionProps) => {
  if (!articles || articles.length === 0) return null;

  const mainArticle = articles[0];
  const otherArticles = articles.slice(1, 5);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4 border-b-2 border-blue-600 pb-2">
        <h2 className="text-2xl font-bold text-blue-600 uppercase">{title}</h2>
        <a href="#" className="flex items-center text-sm font-semibold text-blue-600 hover:underline">
          Xem tất cả <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <img src={mainArticle.imageUrl} alt={mainArticle.title} className="w-full h-auto object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105" />
          </div>
          <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600">{mainArticle.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{mainArticle.excerpt}</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherArticles.map(article => (
            <div key={article.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h4 className="text-md font-semibold mt-2 leading-tight group-hover:text-blue-600">{article.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;