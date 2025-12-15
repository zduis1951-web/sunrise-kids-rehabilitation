import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';

interface BlogPageProps {
  language: 'ar' | 'en';
}

const BlogPage = ({ language }: BlogPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    ar: {
      title: 'المقالات التعليمية',
      subtitle: 'نصائح ومعلومات مفيدة للأهل',
      readMore: 'اقرأ المزيد',
      by: 'بواسطة',
    },
    en: {
      title: 'Educational Articles',
      subtitle: 'Useful tips and information for parents',
      readMore: 'Read More',
      by: 'By',
    },
  };

  const articles = [
    {
      title:
        language === 'ar'
          ? 'كيف تساعد طفلك على تطوير مهارات النطق'
          : 'How to Help Your Child Develop Speech Skills',
      excerpt:
        language === 'ar'
          ? 'نصائح عملية للأهل لتحسين مهارات التواصل اللغوي لدى الأطفال في المنزل.'
          : 'Practical tips for parents to improve children\'s language communication skills at home.',
      date: language === 'ar' ? '15 يناير 2024' : 'January 15, 2024',
      author: language === 'ar' ? 'د. أحمد محمد' : 'Dr. Ahmed Mohamed',
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_2.png',
    },
    {
      title:
        language === 'ar'
          ? 'أهمية العلاج الحسي للأطفال'
          : 'The Importance of Sensory Therapy for Children',
      excerpt:
        language === 'ar'
          ? 'تعرف على فوائد العلاج الحسي وكيف يساعد الأطفال على التكيف مع بيئتهم.'
          : 'Learn about the benefits of sensory therapy and how it helps children adapt to their environment.',
      date: language === 'ar' ? '10 يناير 2024' : 'January 10, 2024',
      author: language === 'ar' ? 'د. سارة علي' : 'Dr. Sarah Ali',
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
    },
    {
      title:
        language === 'ar'
          ? 'دور الأسرة في رحلة التأهيل'
          : 'The Family\'s Role in the Rehabilitation Journey',
      excerpt:
        language === 'ar'
          ? 'كيف يمكن للأهل المشاركة بفعالية في تطوير مهارات أطفالهم.'
          : 'How parents can effectively participate in developing their children\'s skills.',
      date: language === 'ar' ? '5 يناير 2024' : 'January 5, 2024',
      author: language === 'ar' ? 'د. محمد حسن' : 'Dr. Mohamed Hassan',
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_4.png',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 lg:py-24 bg-gradient-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
              {t[language].title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90">{t[language].subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden bg-card border-border">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-heading font-semibold mb-3 text-card-foreground">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent text-foreground border-border hover:bg-muted hover:text-foreground"
                    >
                      {t[language].readMore}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
