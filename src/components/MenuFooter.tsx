
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MenuFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Location</h3>
              <p className="text-gray-300 leading-relaxed">
                Capulas Felix Restaurant<br />
                Near City Center<br />
                Main Street, Downtown<br />
                City, State - 123456
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Contact</h3>
              <div className="text-gray-300 space-y-2">
                <p>📞 +91 9876543210</p>
                <p>📞 +91 9876543211</p>
                <p>✉️ info@capulasfelix.com</p>
                <p>🕐 Open: 9:00 AM - 11:00 PM</p>
              </div>
            </CardContent>
          </Card>

          {/* Feedback */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Feedback</h3>
              <div className="text-gray-300 space-y-3">
                <p>We'd love to hear from you!</p>
                <div className="space-y-2">
                  <p>📱 WhatsApp: +91 9876543210</p>
                  <p>⭐ Rate us on Google</p>
                  <p>📧 Send feedback via email</p>
                  <p>💬 Follow us on social media</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Capulas Felix Restaurant. All rights reserved. | 
            <span className="text-orange-400"> Serving authentic flavors with love</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;
