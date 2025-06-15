
import { MapPin, Phone, MessageSquare, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MenuFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-white py-16 mt-20 relative overflow-hidden">
      {/* Coffee texture background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-12 w-20 h-20 bg-amber-600 rounded-full blur-2xl"></div>
        <div className="absolute bottom-12 right-16 w-24 h-24 bg-orange-600 rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-yellow-600 rounded-full blur-xl"></div>
      </div>
      
      {/* Subtle coffee bean pattern */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cellipse cx='20' cy='20' rx='8' ry='12' transform='rotate(45 20 20)'/%3E%3Cpath d='M15 20c0-3 2-5 5-5s5 2 5 5c0 1-1 2-2 2h-6c-1 0-2-1-2-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Location */}
          <Card className="bg-gradient-to-br from-amber-800/40 to-orange-800/30 backdrop-blur-lg border-amber-600/40 border-2 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-full p-4 w-fit mx-auto mb-6 shadow-lg">
                <MapPin className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-100">📍 Location</h3>
              <div className="text-amber-200 leading-relaxed space-y-1 text-lg">
                <p className="font-semibold text-white">Capulas Felix Restaurant</p>
                <p>Chinia Road, Police Line</p>
                <p>Garwah - 822114</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-green-800/40 to-emerald-800/30 backdrop-blur-lg border-green-600/40 border-2 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full p-4 w-fit mx-auto mb-6 shadow-lg">
                <Phone className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-100">📞 Contact</h3>
              <div className="text-green-200 space-y-3">
                <p className="flex items-center justify-center gap-2 text-base sm:text-lg">
                  <span>📞</span> 
                  <span className="break-all sm:break-normal">+91 9686239355</span>
                </p>
                <div className="bg-green-600/20 px-2 py-2 rounded-lg">
                  <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
                    <span className="flex items-center gap-1">
                      <span>📱</span> 
                      <span className="font-medium">WhatsApp:</span>
                    </span>
                    <span className="break-all sm:break-normal font-mono">+91 9662487587</span>
                  </p>
                </div>
                <p className="flex items-center justify-center gap-2 font-semibold text-white text-base sm:text-lg">
                  <span>🕐</span> Open: 9:00 AM - 11:00 PM
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feedback & Social */}
          <Card className="bg-gradient-to-br from-purple-800/40 to-pink-800/30 backdrop-blur-lg border-purple-600/40 border-2 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 w-fit mx-auto mb-6 shadow-lg">
                <MessageSquare className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-100">💬 Connect</h3>
              <div className="text-purple-200 space-y-3 text-lg">
                <p className="text-white font-medium">We'd love to hear from you!</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.instagram.com/capulas.felix?utm_source=qr&igsh=MWhpMmJqMzc1amxrdw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 px-3 py-2 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 text-white font-medium"
                  >
                    <Instagram className="h-5 w-5" />
                    Follow us on Instagram
                  </a>
                  <p className="flex items-center justify-center gap-2">
                    <span>⭐</span> Rate us on Google
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>💬</span> Send us your feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-300/30 mt-12 pt-8 text-center">
          <p className="text-amber-200 text-lg">
            © 2024 Capulas Felix Restaurant. All rights reserved. | 
            <span className="text-orange-300 font-semibold"> ☕ Serving authentic flavors with love ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;
