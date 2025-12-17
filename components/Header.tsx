import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  setPage: (page: string) => void;
  currentPage: string;
  setTargetServiceId?: (id: number) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage, currentPage, setTargetServiceId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const caseStudiesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Navigation items including Live Dashboard
  const navItems = ['Home', 'Services', 'CaseStudies', 'Pricing', 'LiveDashboard', 'About'];

  // Helper to display names nicely in UI but use correct page key
  const getLabel = (item: string) => {
    if (item === 'CaseStudies') return 'Case Studies';
    if (item === 'LiveDashboard') return 'Live Dashboard';
    return item;
  };

  const handleNav = (page: string) => {
    setPage(page);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsCaseStudiesOpen(false);
  };

  const handleServiceClick = (id: number) => {
    if (setTargetServiceId) {
      setTargetServiceId(id);
    }
    setPage('Services');
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
    setHoveredNav('Services');
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
    setHoveredNav(null);
  };

  const handleCaseStudiesEnter = () => {
    if (caseStudiesTimeoutRef.current) clearTimeout(caseStudiesTimeoutRef.current);
    setIsCaseStudiesOpen(true);
    setHoveredNav('CaseStudies');
  };

  const handleCaseStudiesLeave = () => {
    caseStudiesTimeoutRef.current = setTimeout(() => {
      setIsCaseStudiesOpen(false);
    }, 150);
    setHoveredNav(null);
  };

  // Categorize services for the mega menu
  const aiServices = SERVICES.filter(s => s.category === 'AI Agents & Workflows');
  const advisoryServices = SERVICES.filter(s => s.category === 'Advisory & Tech Infrastructure');

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer z-20 group" onClick={() => handleNav('Home')}>
            <div className="mr-2 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
               <span className="text-white font-black text-sm">E</span>
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tighter group-hover:opacity-80 transition-opacity">
              ELEVOR <span className="text-blue-600">AI</span>
            </span>
          </div>
          
          {/* Desktop Nav - "Liquid Glass" Pill Style */}
          <nav className="hidden lg:flex items-center bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-sm relative" onMouseLeave={() => setHoveredNav(null)}>
            {navItems.map((item) => {
              const isActive = currentPage === item;
              const isHovered = hoveredNav === item;
              const isDropdownOpen = (item === 'Services' && isServicesOpen) || (item === 'CaseStudies' && isCaseStudiesOpen);

              return (
                <div 
                  key={item}
                  className="relative px-4 py-2"
                  onMouseEnter={() => {
                    if (item === 'Services') handleServicesEnter();
                    else if (item === 'CaseStudies') handleCaseStudiesEnter();
                    else setHoveredNav(item);
                  }}
                  onMouseLeave={() => {
                    if (item === 'Services') handleServicesLeave();
                    else if (item === 'CaseStudies') handleCaseStudiesLeave();
                    else setHoveredNav(null);
                  }}
                >
                  {/* Liquid Background Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100/50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Nav Item Content */}
                  <button
                    onClick={() => handleNav(item)}
                    className={`relative z-10 text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                      isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {getLabel(item)}
                    {(item === 'Services' || item === 'CaseStudies') && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} 
                      />
                    )}
                  </button>

                  {/* Dropdowns */}
                  {item === 'CaseStudies' && (
                     <div 
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-56 transition-all duration-200 origin-top z-50 ${isCaseStudiesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                     >
                        <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden p-2">
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleNav('CaseStudies'); }}
                                className={`group flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${currentPage === 'CaseStudies' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <span>Portfolio</span>
                                {currentPage === 'CaseStudies' && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleNav('Blog'); }}
                                className={`group flex items-center justify-between w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${currentPage === 'Blog' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <span>Blog</span>
                                {currentPage === 'Blog' && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                            </button>
                        </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
             <button 
               onClick={() => handleNav('Contact')}
               className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
             >
               Sign In
             </button>
            <button 
              onClick={() => handleNav('Contact')}
              className="
                relative overflow-hidden
                bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700
                text-white 
                font-bold py-2.5 px-6 rounded-full 
                shadow-[0_4px_14px_0_rgba(37,99,235,0.39),inset_0_1px_0_rgba(255,255,255,0.3)]
                border border-blue-500/50
                hover:shadow-[0_6px_20px_rgba(37,99,235,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]
                transform hover:-translate-y-0.5
                transition-all duration-300
                text-sm group
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10"></div>
              <span className="relative z-20 flex items-center gap-2">
                Get Started <ArrowRight size={16} className="text-blue-100 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 hover:text-gray-900 bg-gray-100 rounded-lg">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown (Services) */}
      <div 
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform origin-top z-40 ${
          isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}
        onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-12 gap-12">
            
            {/* Column 1: AI Services */}
            <div className="col-span-6 border-r border-gray-100 pr-12">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Artificial Intelligence
                 </h3>
                 <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold">{aiServices.length} Agents</span>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {aiServices.map((service) => (
                  <div 
                    key={service.id} 
                    onClick={() => handleServiceClick(service.id)}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all duration-200"
                  >
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <service.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1 group-hover:text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Development Services */}
            <div className="col-span-6 pl-4">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Development & Advisory
                 </h3>
                 <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-[10px] font-bold">{advisoryServices.length} Solutions</span>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {advisoryServices.map((service) => (
                  <div 
                    key={service.id} 
                    onClick={() => handleServiceClick(service.id)}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all duration-200"
                  >
                     <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <service.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{service.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1 group-hover:text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                            {i === 3 ? '+' : ''}
                        </div>
                    ))}
                 </div>
                 <div className="text-sm">
                     <span className="font-bold text-gray-900">Need a custom agent?</span>
                     <span className="text-gray-500 ml-1">Our architects are ready.</span>
                 </div>
              </div>
              <button onClick={() => handleNav('Contact')} className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center bg-blue-50 px-4 py-2 rounded-full transition-colors">
                 Talk to Sales <ArrowRight size={14} className="ml-2" />
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => {
               if (item === 'CaseStudies') {
                 return (
                   <div key={item} className="border-b border-gray-50 pb-2 mb-2">
                      <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Work</div>
                      <button
                        onClick={() => handleNav('CaseStudies')}
                        className={`block w-full text-left px-3 py-3 text-lg font-bold rounded-xl ${
                          currentPage === 'CaseStudies' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Portfolio
                      </button>
                      <button
                        onClick={() => handleNav('Blog')}
                        className={`block w-full text-left px-3 py-3 text-lg font-bold rounded-xl ${
                          currentPage === 'Blog' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Blog
                      </button>
                   </div>
                 );
               }
               return (
                  <button
                    key={item}
                    onClick={() => handleNav(item)}
                    className={`block w-full text-left px-3 py-3 rounded-xl text-lg font-bold transition-colors ${
                      currentPage === item ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {getLabel(item)}
                  </button>
               );
            })}
            <div className="pt-6">
               <button 
                onClick={() => handleNav('Contact')}
                className="block w-full text-center bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;