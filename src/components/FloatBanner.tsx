'use client';

export default function FloatBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
      <div className="w-full px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-2 md:mb-0">
            <p className="font-semibold">Please contact us as soon as possible!</p>
            <p className="text-sm">Participation can only be guaranteed if full payment has been received.</p>
          </div>
          <a
            href="#contact"
            className="bg-white/90 text-blue-700 px-6 py-2 rounded font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-md"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}