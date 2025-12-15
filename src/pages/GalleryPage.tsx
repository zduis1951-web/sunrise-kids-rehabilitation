import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@animaapp/playground-react-sdk';

interface GalleryPageProps {
  language: 'ar' | 'en';
}

const GalleryPage = ({ language }: GalleryPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: galleryImages, isPending, error } = useQuery('GalleryImage');

  const t = {
    ar: {
      title: 'معرض الصور',
      subtitle: 'لحظات من رحلة التطور والتعلم',
    },
    en: {
      title: 'Gallery',
      subtitle: 'Moments from the journey of development and learning',
    },
  };

  // Default images if no data from database
  const defaultImages = [
    {
      id: '1',
      url: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_2.png',
      alt: 'Child speech therapy session with specialist',
      altAr: 'جلسة تخاطب طفل مع اخصائي',
    },
    {
      id: '2',
      url: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
      alt: 'Children drawing with teacher',
      altAr: 'اطفال يرسمون مع معلم',
    },
    {
      id: '3',
      url: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_4.png',
      alt: 'Family talking with center team',
      altAr: 'اسرة تتحدث مع فريق المركز',
    },
    {
      id: '4',
      url: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_5.png',
      alt: 'Equipped physiotherapy room',
      altAr: 'غرفة علاج طبيعي مجهزة',
    },
    {
      id: '5',
      url: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_2.png',
      alt: 'Child speech therapy session with specialist',
      altAr: 'جلسة تخاطب طفل مع اخصائي',
    },
    {
      id: '6',
      url: 'https://c.animaapp.com/mj6qv0f9TBg6RH/img/ai_3.png',
      alt: 'Children drawing with teacher',
      altAr: 'اطفال يرسمون مع معلم',
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
    console.warn('Error loading gallery images from database, using default images:', error.message);
  }

  // Use database images if available, otherwise use default images
  const displayImages = galleryImages && galleryImages.length > 0 ? galleryImages : defaultImages;

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayImages.map((image, index) => {
              // Use Arabic alt text if language is Arabic and it exists, otherwise fallback to English
              const altText = language === 'ar' && image.altAr ? image.altAr : image.alt;
              
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-video overflow-hidden rounded-lg"
                >
                  <img
                    src={image.url}
                    alt={altText}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
