import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  language: 'ar' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const t = {
    ar: {
      about: 'عن المركز',
      aboutText: 'صن رايز مركز لتأهيل وتدريب أبنائنا ذوي الإحتياجات الخاصة بكافة مجالات التدريب والتأهيل وأنشطة متعدده تخدم الخطة العلاجية لكل طفل.',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      services: 'الخدمات',
      programs: 'البرامج',
      blog: 'المقالات',
      contact: 'اتصل بنا',
      contactInfo: 'معلومات الاتصال',
      address: '14 شارع توفيق أحمد البكري متفرع من إبراهيم نوار، خلف مستشفى حسبو الدولي، مدينة نصر، القاهرة، مصر',
      phone: '00201007996750',
      whatsapp: 'واتساب',
      workingHours: 'ساعات العمل',
      hours: 'السبت - الخميس: 7:30 ص - 8:00 م',
      friday: 'الجمعة: مغلق',
      followUs: 'تابعنا',
      rights: '© 2024 مركز صن رايز. جميع الحقوق محفوظة.',
      policies: 'السياسات',
      tagline: 'صن رايز تعليم لاجل الحياة',
      tiktok: 'تيك توك',
    },
    en: {
      about: 'About Center',
      aboutText: 'Sunrise Center for Rehabilitation and Training of Children with Special Needs - comprehensive training and rehabilitation services with diverse activities serving each child\'s treatment plan.',
      quickLinks: 'Quick Links',
      home: 'Home',
      services: 'Services',
      programs: 'Programs',
      blog: 'Articles',
      contact: 'Contact',
      contactInfo: 'Contact Information',
      address: '14 Tawfiq Ahmed El-Bakry St., branching from Ibrahim Nawar, behind Hasabo International Hospital, Nasr City, Cairo, Egypt',
      phone: '00201007996750',
      whatsapp: 'WhatsApp',
      workingHours: 'Working Hours',
      hours: 'Saturday - Thursday: 7:30 AM - 8:00 PM',
      friday: 'Friday: Closed',
      followUs: 'Follow Us',
      rights: '© 2024 Sunrise Center. All rights reserved.',
      policies: 'Policies',
      tagline: 'Sunrise - Education for Life',
      tiktok: 'TikTok',
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gray-50">
              {t[language].about}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {t[language].aboutText}
            </p>
            <p className="text-sm text-primary font-semibold">
              {t[language].tagline}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gray-50">
              {t[language].quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].home}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].services}
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].programs}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].blog}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].contact}
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].policies}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gray-50">
              {t[language].contactInfo}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{t[language].address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href={`tel:${t[language].phone}`}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://wa.me/201007996750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t[language].whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gray-50">
              {t[language].workingHours}
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">{t[language].hours}</p>
                  <p className="text-sm text-gray-300">{t[language].friday}</p>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gray-50">
              {t[language].followUs}
            </h3>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/profile.php?id=100066682265528"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sunrise.center.egy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@sunrisecentersunrisecenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@sunrise.center82"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="text-center">
          <p className="text-sm text-gray-400">{t[language].rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
