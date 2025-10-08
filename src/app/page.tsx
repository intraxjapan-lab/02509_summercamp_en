'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-blue-500/95 to-blue-700/95' : ''
      }`}>
        <div className="w-full px-6 py-3">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                <img
                  src="/Ayusa_Logo_white_w180.png"
                  alt="Ayusa by Intrax"
                  className="h-10 w-auto"
                />
              </div>
              <div className="ml-4 hidden lg:block">
                <h1 className="text-white font-bold text-xl">Summer Camp Japan 2026</h1>
                <p className="text-blue-200 text-sm">Unforgettable Cultural Experience</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center">
              <a href="#contact" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Us
              </a>
            </nav>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-blue-300 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 space-y-3">
            <a
              href="#program"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 transition-colors"
            >
              Program Overview
            </a>
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#tours"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-blue-200 py-2 transition-colors"
            >
              Optional Tours
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Background */}
      <div className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/mv_sp.jpg')] md:bg-[url('/mv_pc.jpg')]"
        ></div>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ayusa Summer Camp in Japan！
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            June 20－ July 11, 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Summer Camp in Japan 2026
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Learn or improve your Japanese and make lifelong friends through an unforgettable 3 weeks in Japan.
          </p>
        </div>
      </div>

      {/* Program Overview Section */}
      <section id="program" className="bg-gray-800 py-8 md:py-16">
        <div className="w-full px-4 md:px-12">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center max-w-7xl mx-auto">
            {/* Left Column - Fee and Discount Info */}
            <div className="text-white space-y-4 md:space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-base md:text-lg mb-2">Program Fee <span className="font-bold text-xl md:text-2xl">$4,300</span></p>
              </div>

              <div className="space-y-2">
                <p className="text-red-500 font-semibold text-sm md:text-lg">
                  Get <span className="font-bold">$500 discount</span> by applying by December 25th, 2025!
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  *The discount is applicable only to those who have paid the full amount.
                </p>
              </div>

              <div className="pt-4 md:pt-6 border-t border-gray-600">
                <p className="text-gray-400 mb-1 md:mb-2 text-sm md:text-base">Deadline</p>
                <p className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">April 01, 2026</p>
                <p className="text-xs text-gray-400">* Sign-ups will close as soon as tour capacity has been reached.</p>
              </div>
            </div>

            {/* Middle Column - Dates and Eligibility */}
            <div className="text-white space-y-4 md:space-y-6 md:pl-8 md:border-l md:border-gray-600">
              <div>
                <p className="text-gray-400 mb-2 text-sm md:text-base">— Dates</p>
                <p className="text-base md:text-lg font-semibold">June 20 – July 11, 2026 (3 weeks)</p>
              </div>

              <div>
                <p className="text-gray-400 mb-2 text-sm md:text-base">— Eligibility</p>
                <p className="text-base md:text-lg font-semibold mb-1">15-19 years old at time of program</p>
                <p className="text-base md:text-lg font-semibold">No Japanese language requirement</p>
              </div>
            </div>

            {/* Right Column - Contact Button */}
            <div className="flex justify-center md:justify-end">
              <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-6 md:py-8 rounded-lg text-center transition-colors shadow-xl w-full md:w-auto">
                <p className="text-xl md:text-2xl font-bold mb-2">Contact Us for</p>
                <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4">More Info</p>
                <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4 py-16">

        {/* Video Section */}
        <section className="py-12 md:py-24 relative overflow-hidden bg-white">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              {/* Decorative Line Above Title */}
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-blue-400"></div>
                <div className="mx-3 md:mx-4 w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 relative inline-block px-4">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Ayusa Summer Camp
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  in Japan！
                </span>
              </h2>

              {/* Date Badge with Enhanced Styling */}
              <div className="mb-8 md:mb-10 relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 md:px-12 py-3 md:py-4 rounded-2xl shadow-2xl border border-blue-400/50">
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold tracking-wide">June 21 － July 12, 2026</p>
                </div>
              </div>

              {/* Description with Enhanced Typography */}
              <div className="max-w-4xl mx-auto px-4">
                <p className="text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  Enjoy cultural exchanges with Japanese locals through
                  <span className="font-medium text-blue-600"> volunteer activities</span> and
                  <span className="font-medium text-blue-600"> high school visits</span>,
                  all while improving your Japanese.
                </p>
              </div>

              {/* Decorative Line Below Description */}
              <div className="flex items-center justify-center mt-8 md:mt-10">
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-blue-400"></div>
                <div className="mx-3 md:mx-4 w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 z-10"></div>
                <iframe
                  className="w-full h-full relative z-20"
                  src="https://www.youtube.com/embed/WRUrG_RKivA"
                  title="Ayusa Summer Camp in Japan"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50">
          <div className="w-full px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">Why Choose Our Program?</h2>
              <p className="text-base md:text-lg text-gray-600">Three pillars of our unforgettable Japanese experience</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">

              {/* Discover the Real Japan */}
              <div className="text-center">
                <div className="mb-6 h-32 flex items-center justify-center">
                  <img
                    src="/pict01.png"
                    alt="Discover the Real Japan"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">DISCOVER THE REAL JAPAN</h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Immerse yourself in Japanese culture through volunteer activities, meeting local Japanese people, and unique sightseeing opportunities.
                </p>
              </div>

              {/* Improve Your Japanese */}
              <div className="text-center">
                <div className="mb-6 h-32 flex items-center justify-center">
                  <img
                    src="/pict03.png"
                    alt="Improve Your Japanese"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IMPROVE YOUR JAPANESE</h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Learn Japanese or improve your language skills, not only with daily classes from experienced professional teachers but also through school visits and home stays.
                </p>
              </div>

              {/* Experience Tokyo */}
              <div className="text-center">
                <div className="mb-6 h-32 flex items-center justify-center">
                  <img
                    src="/pict02.png"
                    alt="Experience the Rich Heritage of Tokyo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">EXPERIENCE THE RICH HERITAGE OF TOKYO</h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Whether it&apos;s traditional areas like Asakusa or ultra-modern ones like Akihabara, Tokyo never fails to impress.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Optional Tours Section */}
        <section id="tours" className="py-12 md:py-16 bg-white">
          <div className="w-full px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">Optional Tours</h2>
              <p className="text-base md:text-lg text-gray-600">Extend your adventure with our carefully curated optional experiences</p>
            </div>

          {/* Tokyo Special Tour */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-64 md:h-auto">
                <img
                  src="/images/AdobeStock_485686574_Preview.jpeg"
                  alt="Tokyo Tour"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
                  <h3 className="text-3xl font-bold">Tokyo Special</h3>
                  <p className="text-lg opacity-90">4 nights and 5 days | July 11 – July 15, 2026</p>
                </div>

                <div className="p-6">
                  {/* Key Info Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Cost</p>
                      <p className="text-2xl font-bold text-blue-600">$800</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="text-lg font-bold text-gray-900">4N / 5D</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Deadline</p>
                      <p className="text-lg font-bold text-red-600">Apr 1</p>
                    </div>
                  </div>

                  {/* Destinations */}
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">Destinations</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <span className="font-semibold">Ikebukuro</span> - Shopping, aquarium, Pokémon Center</li>
                      <li>• <span className="font-semibold">Shibuya</span> - Famous crossing, youth culture</li>
                      <li>• <span className="font-semibold">Akihabara</span> - Electronics, anime, manga</li>
                      <li>• <span className="font-semibold">Kamakura / Enoshima</span> - Temples, Great Buddha</li>
                      <li>• <span className="font-semibold">Yokohama</span> - Chinatown, Red Brick Warehouse</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Korea Tour */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-64 md:h-auto">
                <img
                  src="/images/pixta_93882253_M (1).jpg"
                  alt="Korea Tour"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
                  <h3 className="text-3xl font-bold">Korea Tour</h3>
                  <p className="text-lg opacity-90">4 nights and 5 days | July 15 – July 19, 2026</p>
                  <p className="text-sm opacity-80 mt-1">(Optional for Tokyo Special participants only)</p>
                </div>

                <div className="p-6">
                  {/* Key Info Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Cost</p>
                      <p className="text-2xl font-bold text-blue-600">$2,100</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Duration</p>
                      <p className="text-lg font-bold text-gray-900">4N / 5D</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Deadline</p>
                      <p className="text-lg font-bold text-red-600">Jan 31</p>
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">Activities</h4>
                    <p className="text-xs text-gray-600 mb-2">Mornings: Korean language lessons, followed by cultural activities:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <span className="font-semibold">K-pop Dance Studio</span> - Professional studio</li>
                      <li>• <span className="font-semibold">Hongdae</span> - Seoul&apos;s youth district</li>
                      <li>• <span className="font-semibold">Gyeongbokgung Palace</span> - Joseon dynasty history</li>
                      <li>• <span className="font-semibold">Myeong-dong</span> - Shopping and street food</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="w-full px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600">Ready to join us? Fill out the form below and we&apos;ll get back to you soon!</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="w-full px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Company Information */}
            <div>
              <div className="mb-6">
                <img
                  src="/Ayusa_Logo_white_w180.png"
                  alt="Ayusa by Intrax"
                  className="h-16 w-auto mb-4"
                />
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">Ayusa International Japan</p>
                <p>Marinx Tower 7F, 1-9-11 Kaigan, Minato-ku,</p>
                <p>Tokyo, 105-0022, Japan</p>
                <div className="mt-4 space-y-1">
                  <p>Tel +81.3.3434.2636</p>
                  <p>Fax +81.3.3434.2617</p>
                  <p>E-mail <a href="mailto:intrax@intraxjp.com" className="text-blue-400 hover:text-blue-300 transition-colors">intrax@intraxjp.com</a></p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="md:text-right">
              <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
              <div className="flex md:justify-end gap-6">
                <a href="https://www.facebook.com/ayusasummercampjapan/" target="_blank" className="group">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <p className="text-sm mt-2 text-gray-400 group-hover:text-white transition-colors">Facebook</p>
                </a>

                <a href="https://www.instagram.com/ayusa_summer_camp_in_japan/" target="_blank" className="group">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <p className="text-sm mt-2 text-gray-400 group-hover:text-white transition-colors">Instagram</p>
                </a>

                <a href="https://www.youtube.com/channel/UCQNgrunIYbWzPwWFr9t63YQ/" target="_blank" className="group">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <p className="text-sm mt-2 text-gray-400 group-hover:text-white transition-colors">YouTube</p>
                </a>
              </div>
            </div>
          </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400">&copy; 2025 Ayusa International Japan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}