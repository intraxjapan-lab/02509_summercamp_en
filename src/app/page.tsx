'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? 'bg-gradient-to-r from-blue-600/95 to-green-600/95' : ''
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
                <h1 className="text-white font-bold text-xl">Summer Camp Japan 2025</h1>
                <p className="text-blue-200 text-sm">Unforgettable Cultural Experience</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center">
              <a href="#contact" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Us
              </a>
            </nav>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-green-300 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      <div className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/mv_sp.jpg')] md:bg-[url('/mv_pc.jpg')]"
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
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

      <div className="w-full px-4 py-16">

        {/* Program Overview Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience Japan like never before with our comprehensive summer program</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                  </svg>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-3">$4,300</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Program Fee</h3>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Save $500 with early application!
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-3">3</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Weeks</h3>
                <p className="text-gray-600">June 20 – July 11, 2026</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-red-100">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="text-5xl font-bold text-red-600 mb-3">Apr 1</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Deadline</h3>
                <p className="text-gray-600">Application Due 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Bird Special Section */}
        <section className="py-16 bg-white">
          <div className="w-full px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto border border-green-100">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
                  ⭐ EARLY BIRD SPECIAL ⭐
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Get $500 discount by applying by December 25th, 2025!
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  *The discount is applicable only to those who have paid the full amount.
                </p>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-16 py-5 text-xl font-bold rounded-full hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Sign up by April 1, 2026 and join us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                Ayusa Summer Camp in Japan！
              </h2>
              <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full text-2xl font-semibold mb-8 shadow-lg">
                June 21－ July 12, 2025
              </div>
              <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
                Enjoy cultural exchanges with Japanese locals through volunteer activities and high school visits, all while improving your Japanese.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 z-10"></div>
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
        <section className="py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">Why Choose Our Program?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">Three pillars of our unforgettable Japanese experience</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">

              {/* Discover the Real Japan */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all duration-300">
                  <div className="w-48 h-32 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center border-4 border-green-400">
                    <img
                      src="/pict01.png"
                      alt="Discover the Real Japan"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">DISCOVER THE REAL JAPAN</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Immerse yourself in Japanese culture through volunteer activities, meeting local Japanese people, and unique sightseeing opportunities.
                  </p>
                </div>
              </div>

              {/* Improve Your Japanese */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all duration-300">
                  <div className="w-48 h-32 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center border-4 border-blue-400">
                    <img
                      src="/pict03.png"
                      alt="Improve Your Japanese"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">IMPROVE YOUR JAPANESE</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Learn Japanese or improve your language skills, not only with daily classes from experienced professional teachers but also through school visits and home stays.
                  </p>
                </div>
              </div>

              {/* Experience Tokyo */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all duration-300">
                  <div className="w-48 h-32 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center border-4 border-green-400">
                    <img
                      src="/pict02.png"
                      alt="Experience the Rich Heritage of Tokyo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">EXPERIENCE THE RICH HERITAGE OF TOKYO</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Whether it&apos;s traditional areas like Asakusa or ultra-modern ones like Akihabara, Tokyo never fails to impress.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Optional Tours Section */}
        <section className="py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-green-100/50"></div>
          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Optional Tours</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Extend your adventure with our carefully curated optional experiences</p>
            </div>

          {/* Tokyo Special Tour */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20 border border-blue-200 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4">Tokyo Special</h3>
                <p className="text-2xl opacity-95">4 nights and 5 days</p>
              </div>
            </div>

            <div className="p-8">
              {/* Image Gallery */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Tour Destinations Gallery</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                          </div>
                          <p className="text-xs text-orange-700 font-medium">Ikebukuro</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-pink-200 to-purple-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-pink-700 font-medium">Shibuya</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-blue-700 font-medium">Akihabara</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-green-200 to-teal-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-green-700 font-medium">Kamakura</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-cyan-700 font-medium">Yokohama</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-violet-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-purple-700 font-medium">More...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Tour Details</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-1">Date</h5>
                      <p className="text-gray-600">July 11 – July 15, 2026</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-1">Return</h5>
                      <p className="text-gray-600">Return Home on July 15 from Haneda airport</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Destinations</h4>
                  <div className="grid gap-4">
                    <div className="border-l-4 border-green-400 pl-4">
                      <h6 className="font-medium text-green-600 mb-1">Ikebukuro</h6>
                      <p className="text-sm text-gray-600">Sunshine City, shopping, aquarium, and Pokémon Center</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h6 className="font-medium text-green-600 mb-1">Shibuya</h6>
                      <p className="text-sm text-gray-600">Famous crossing, youth culture, and trendy spots</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h6 className="font-medium text-green-600 mb-1">Akihabara</h6>
                      <p className="text-sm text-gray-600">Electronics, anime, manga, and gaming culture</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h6 className="font-medium text-green-600 mb-1">Kamakura / Enoshima</h6>
                      <p className="text-sm text-gray-600">Temples, Great Buddha, and coastal views</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h6 className="font-medium text-green-600 mb-1">Yokohama</h6>
                      <p className="text-sm text-gray-600">Chinatown, waterfront, and Red Brick Warehouse</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Duration</h5>
                    <p className="text-lg font-bold text-gray-900">July 11 – July 15, 2026</p>
                    <p className="text-sm text-gray-600">4 nights and 5 days</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Cost</h5>
                    <p className="text-3xl font-bold text-green-600">$800</p>
                    <p className="text-sm text-gray-600">Guided tour, housing, breakfast</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Deadline</h5>
                    <p className="text-lg font-bold text-red-600">April 1, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Korea Tour */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-200 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-12 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4">Korea Tour</h3>
                <p className="text-2xl opacity-95 mb-3">4 nights and 5 days</p>
                <p className="text-lg opacity-80">(Optional for Tokyo Special participants only)</p>
              </div>
            </div>

            <div className="p-8">
              {/* Korea Tour Image Gallery */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Korea Tour Gallery</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-pink-200 to-purple-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                            </svg>
                          </div>
                          <p className="text-xs text-pink-700 font-medium">K-pop Studio</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-indigo-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-purple-700 font-medium">Hongdae</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-indigo-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-indigo-700 font-medium">Palace</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-blue-700 font-medium">Myeong-dong</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Tour Details</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-1">Date</h5>
                      <p className="text-gray-600">July 15 – July 19, 2026</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-1">Return Schedule</h5>
                      <p className="text-gray-600">Return to Japan on July 18 evening, stay near Haneda Airport, depart for home on July 19</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Activities</h4>
                  <p className="text-gray-600 mb-4">Mornings begin with Korean language lessons, followed by cultural activities:</p>
                  <div className="grid gap-4">
                    <div className="border-l-4 border-pink-400 pl-4">
                      <h6 className="font-medium text-pink-600 mb-1">K-pop Dance Studio</h6>
                      <p className="text-sm text-gray-600">Learn moves at a professional studio</p>
                    </div>
                    <div className="border-l-4 border-pink-400 pl-4">
                      <h6 className="font-medium text-pink-600 mb-1">Hongdae</h6>
                      <p className="text-sm text-gray-600">Seoul&apos;s youth district with Korean buddy</p>
                    </div>
                    <div className="border-l-4 border-pink-400 pl-4">
                      <h6 className="font-medium text-pink-600 mb-1">Gyeongbokgung Palace</h6>
                      <p className="text-sm text-gray-600">Discover Joseon dynasty history</p>
                    </div>
                    <div className="border-l-4 border-pink-400 pl-4">
                      <h6 className="font-medium text-pink-600 mb-1">Myeong-dong</h6>
                      <p className="text-sm text-gray-600">Shopping and street food district</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Duration</h5>
                    <p className="text-lg font-bold text-gray-900">July 15 – July 19, 2026</p>
                    <p className="text-sm text-gray-600">4 nights and 5 days</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Cost</h5>
                    <p className="text-3xl font-bold text-green-600">$2,100</p>
                    <p className="text-sm text-gray-600">Housing, breakfast, activities included</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Deadline</h5>
                    <p className="text-lg font-bold text-red-600">January 31, 2026</p>
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
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
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
                  <p>Mail <a href="mailto:intrax@intraxjp.com" className="text-blue-400 hover:text-blue-300 transition-colors">intrax@intraxjp.com</a></p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="md:text-right">
              <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
              <div className="flex md:justify-end gap-6">
                <a href="https://www.facebook.com/ayusasummercampjapan/" target="_blank" className="group">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <p className="text-sm mt-2 text-gray-400 group-hover:text-white transition-colors">Facebook</p>
                </a>

                <a href="https://www.instagram.com/ayusa_summer_camp_in_japan/" target="_blank" className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <p className="text-sm mt-2 text-gray-400 group-hover:text-white transition-colors">Instagram</p>
                </a>

                <a href="https://www.youtube.com/channel/UCQNgrunIYbWzPwWFr9t63YQ/" target="_blank" className="group">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
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