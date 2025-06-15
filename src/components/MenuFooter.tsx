
import { MapPin, Phone, MessageSquare } from 'lucide-react';
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
          <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-amber-300/30 border-2 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-orange-400 to-amber-400 rounded-full p-4 w-fit mx-auto mb-6 shadow-lg">
                <MapPin className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-100">📍 Location</h3>
              <div className="text-amber-200 leading-relaxed space-y-1 text-lg">
                <p className="font-semibold text-white">Capulas Felix Restaurant</p>
                <p>Near City Center</p>
                <p>Main Street, Downtown</p>
                <p>City, State - 123456</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-green-300/30 border-2 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-400 rounded-full p-4 w-fit mx-auto mb-6 shadow-lg">
                <Phone className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-100">📞 Contact</h3>
              <div className="text-green-200 space-y-3 text-lg">
                <p className="flex items-center justify-center gap-2">
                  <span>📞</span> +91 9876543210
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📞</span> +91 9876543211
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>✉️</span> info@capulasfelix.com
                </p>
                <p className="flex items-center justify-center gap-2 font-semibold text-white">
                  <span>🕐</span> Open: 9:00 AM - 11:00 PM
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feedback */}
          <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-blue-300/30 border-2 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full p-4 w-fit mx-auto mb-6 shadow-lg">
                <MessageSquare className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-100">💬 Feedback</h3>
              <div className="text-blue-200 space-y-3 text-lg">
                <p className="text-white font-medium">We'd love to hear from you!</p>
                <div className="space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <span>📱</span> WhatsApp: +91 9876543210
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>⭐</span> Rate us on Google
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>📧</span> Send feedback via email
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span>💬</span> Follow us on social media
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
