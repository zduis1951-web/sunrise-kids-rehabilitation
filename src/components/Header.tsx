import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  language: 'ar' | 'en';
  onLanguageToggle: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

const Header = ({ language, onLanguageToggle, isDark, onThemeToggle }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      programs: 'البرامج',
      sessions: 'الجلسات',
      blog: 'المقالات',
      gallery: 'المعرض',
      faq: 'الأسئلة',
      contact: 'اتصل بنا',
      bookNow: 'احجز الآن',
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      programs: 'Programs',
      sessions: 'Sessions',
      blog: 'Blog',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
  };

  const navItems = [
    { path: '/', label: t[language].home },
    { path: '/about', label: t[language].about },
    { path: '/services', label: t[language].services },
    { path: '/programs', label: t[language].programs },
    { path: '/sessions', label: t[language].sessions },
    { path: '/blog', label: t[language].blog },
    { path: '/gallery', label: t[language].gallery },
    { path: '/faq', label: t[language].faq },
    { path: '/contact', label: t[language].contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/60 backdrop-blur-md shadow-xl' 
          : 'bg-background/40 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
              <svg viewBox="0 0 512 512" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="256" cy="256" r="60" fill="hsl(var(--accent))"/>
                <circle cx="256" cy="256" r="50" fill="hsl(var(--card))"/>
                <circle cx="256" cy="256" r="40" fill="hsl(var(--primary))"/>
                <path d="M256 80 L256 40" stroke="hsl(var(--accent))" strokeWidth="12" strokeLinecap="round"/>
                <path d="M256 472 L256 432" stroke="hsl(var(--accent))" strokeWidth="12" strokeLinecap="round"/>
                <path d="M432 256 L472 256" stroke="hsl(var(--accent))" strokeWidth="12" strokeLinecap="round"/>
                <path d="M40 256 L80 256" stroke="hsl(var(--accent))" strokeWidth="12" strokeLinecap="round"/>
                <circle cx="180" cy="320" r="25" fill="hsl(var(--primary))"/>
                <path d="M180 345 Q160 380 140 420 L160 420 L180 380 L200 420 L220 420 Q200 380 180 345 Z" fill="hsl(var(--primary))"/>
                <circle cx="332" cy="320" r="25" fill="hsl(var(--secondary))"/>
                <path d="M332 345 Q312 380 292 420 L312 420 L332 380 L352 420 L372 420 Q352 380 332 345 Z" fill="hsl(var(--secondary))"/>
                <path d="M120 420 Q256 360 392 420" stroke="hsl(var(--primary))" strokeWidth="20" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-base sm:text-lg lg:text-xl font-heading font-black text-foreground group-hover:text-gradient transition-all duration-300 block leading-tight">
                {language === 'ar' ? 'صن رايز' : 'Sunrise'}
              </span>
              <span className="text-xs font-semibold text-muted-foreground leading-tight">
                {language === 'ar' ? 'تعليم لأجل الحياة' : 'Education for Life'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center mx-4 max-w-4xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-bold transition-all duration-300 rounded-lg xl:rounded-xl relative group whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-primary bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 shadow-md'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 lg:w-10 xl:w-12 h-0.5 lg:h-1 bg-gradient-1 rounded-t-full shadow-lg" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions - Responsive */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-tertiary/10 hover:text-primary transition-all duration-300 rounded-lg xl:rounded-xl hover:scale-110"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onLanguageToggle}
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-tertiary/10 hover:text-primary transition-all duration-300 rounded-lg xl:rounded-xl hover:scale-110"
              aria-label="Toggle language"
            >
              <span className="text-xs sm:text-sm font-black">
                {language === 'ar' ? 'EN' : 'ع'}
              </span>
            </Button>

            {/* Book Now Button - Hidden on mobile, visible on tablet+ */}
            <Button
              asChild
              className="hidden md:flex bg-gradient-1 text-primary-foreground hover:shadow-2xl hover:scale-110 transition-all duration-500 rounded-lg xl:rounded-xl px-3 sm:px-4 lg:px-6 h-8 sm:h-9 lg:h-11 text-xs sm:text-sm lg:text-base font-black relative overflow-hidden group"
            >
              <Link to="/sessions">
                <span className="relative z-10 whitespace-nowrap">{t[language].bookNow}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-tertiary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle - Only on mobile/tablet */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Full width, responsive */}
        {isMobileMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-primary bg-primary/10 shadow-sm border-r-4 border-primary'
                      : 'text-foreground hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Book Now Button for Mobile */}
              <Button
                asChild
                className="mt-3 md:hidden bg-gradient-1 text-primary-foreground hover:shadow-lg transition-all duration-200 rounded-lg h-11 sm:h-12 text-sm sm:text-base font-semibold"
              >
                <Link to="/sessions" onClick={() => setIsMobileMenuOpen(false)}>
                  {t[language].bookNow}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
