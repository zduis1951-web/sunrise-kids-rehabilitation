import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@animaapp/playground-react-sdk';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, BookHeart, Laptop, Heart, Users, Star } from 'lucide-react';

interface ProgramsPageProps {
  language: 'ar' | 'en';
}

const ProgramsPage = ({ language }: ProgramsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: programs, isPending, error } = useQuery('Program');

  const t = {
    ar: {
      title: 'برامجنا وأنشطتنا',
      subtitle: 'أنشطة متنوعة لتنمية مهارات الأطفال',
      creativeProgram: 'برامج إبداعية',
      creativeDesc: 'أنشطة فنية وموسيقية متنوعة تساعد الأطفال على التعبير عن أنفسهم وتنمية مهاراتهم الإبداعية والحركية الدقيقة.',
      religiousProgram: 'برامج دينية',
      religiousDesc: 'تعليم القيم والأخلاق الإسلامية بطريقة محببة ومناسبة لقدرات كل طفل، مع التركيز على بناء الشخصية الإيجابية.',
      techProgram: 'برامج تكنولوجية',
      techDesc: 'استخدام التقنية الحديثة والتطبيقات التعليمية التفاعلية لجعل التعلم أكثر متعة وفعالية.',
      socialProgram: 'برامج اجتماعية',
      socialDesc: 'أنشطة تفاعلية تساعد الأطفال على تطوير مهارات التواصل والتفاعل الاجتماعي.',
      physicalProgram: 'برامج حركية',
      physicalDesc: 'أنشطة رياضية وحركية تساعد على تطوير المهارات الحركية الكبرى والصغرى.',
      musicProgram: 'برامج موسيقية',
      musicDesc: 'تعليم الموسيقى والإيقاع لتطوير المهارات السمعية والتعبيرية.',
    },
    en: {
      title: 'Our Programs & Activities',
      subtitle: 'Diverse activities to develop children\'s skills',
      creativeProgram: 'Creative Programs',
      creativeDesc: 'Various artistic and musical activities that help children express themselves and develop their creative and fine motor skills.',
      religiousProgram: 'Religious Programs',
      religiousDesc: 'Teaching Islamic values and ethics in a loving way suitable for each child\'s abilities, focusing on building a positive personality.',
      techProgram: 'Technology Programs',
      techDesc: 'Using modern technology and interactive educational applications to make learning more fun and effective.',
      socialProgram: 'Social Programs',
      socialDesc: 'Interactive activities that help children develop communication and social interaction skills.',
      physicalProgram: 'Physical Programs',
      physicalDesc: 'Sports and movement activities that help develop gross and fine motor skills.',
      musicProgram: 'Music Programs',
      musicDesc: 'Teaching music and rhythm to develop auditory and expressive skills.',
    },
  };

  const getIconForProgram = (title: string) => {
    if (title.includes('إبداع') || title.includes('Creative') || title.includes('فن') || title.includes('Art')) return Palette;
    if (title.includes('دين') || title.includes('Religious') || title.includes('قرآن') || title.includes('Quran')) return BookHeart;
    if (title.includes('تكنولوج') || title.includes('Tech') || title.includes('كمبيوتر') || title.includes('Computer')) return Laptop;
    if (title.includes('اجتماع') || title.includes('Social') || title.includes('تواصل') || title.includes('Communication')) return Users;
    if (title.includes('حرك') || title.includes('Physical') || title.includes('رياض') || title.includes('Sport')) return Heart;
    if (title.includes('موسيق') || title.includes('Music') || title.includes('إيقاع') || title.includes('Rhythm')) return Star;
    return Palette;
  };

  // Default programs if no data from database
  const defaultPrograms = [
    {
      id: '1',
      title: t[language].creativeProgram,
      titleAr: t.ar.creativeProgram,
      description: t[language].creativeDesc,
      descriptionAr: t.ar.creativeDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
    },
    {
      id: '2',
      title: t[language].religiousProgram,
      titleAr: t.ar.religiousProgram,
      description: t[language].religiousDesc,
      descriptionAr: t.ar.religiousDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_2.png',
    },
    {
      id: '3',
      title: t[language].techProgram,
      titleAr: t.ar.techProgram,
      description: t[language].techDesc,
      descriptionAr: t.ar.techDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_4.png',
    },
    {
      id: '4',
      title: t[language].socialProgram,
      titleAr: t.ar.socialProgram,
      description: t[language].socialDesc,
      descriptionAr: t.ar.socialDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_5.png',
    },
    {
      id: '5',
      title: t[language].physicalProgram,
      titleAr: t.ar.physicalProgram,
      description: t[language].physicalDesc,
      descriptionAr: t.ar.physicalDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
    },
    {
      id: '6',
      title: t[language].musicProgram,
      titleAr: t.ar.musicProgram,
      description: t[language].musicDesc,
      descriptionAr: t.ar.musicDesc,
      image: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_2.png',
    },
  ];

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>
      </div>
    );
  }

  if (error) {
    console.warn('Error loading programs from database, using default programs:', error.message);
  }

  // Use database programs if available, otherwise use default programs
  const displayPrograms = programs && programs.length > 0 ? programs : defaultPrograms;

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
            {displayPrograms.map((program, index) => {
              // Use Arabic fields if language is Arabic and they exist, otherwise fallback to English
              const title = language === 'ar' && program.titleAr ? program.titleAr : program.title;
              const description = language === 'ar' && program.descriptionAr ? program.descriptionAr : program.description;
              const IconComponent = getIconForProgram(title);
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-colors">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={program.image}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-xl font-heading font-semibold text-card-foreground">
                          {title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
