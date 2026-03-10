import { Article } from '@/types';

interface HeroSectionProps {
  mainArticle: Article;
  sideArticles: Article[];
}

const HeroSection = ({ mainArticle, sideArticles }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg">
            <img src={mainArticle.imageUrl} alt={mainArticle.title} className="w-full h-auto object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-sm font-semibold bg-blue-600 px-2 py-1 rounded-md">{mainArticle.category}</span>
              <h1 className="text-2xl md:text-4xl font-bold mt-2 leading-tight group-hover:underline">{mainArticle.title}</h1>
              <p className="hidden md:block mt-2 text-gray-200">{mainArticle.excerpt}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          {sideArticles.map(article => (
            <div key={article.id} className="group flex items-start space-x-4 cursor-pointer">
              <img src={article.imageUrl} alt={article.title} className="w-28 h-20 object-cover rounded-md flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                <h2 className="text-sm font-bold leading-tight group-hover:underline">{article.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;