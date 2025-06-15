
import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Download, ExternalLink, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const QRGenerator = () => {
  const [url, setUrl] = useState('https://capulas-felix-restaurant.com');
  const [qrCode, setQrCode] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async (text: string) => {
    try {
      const qrDataURL = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        color: {
          dark: '#8B4513',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'M'
      });
      setQrCode(qrDataURL);
    } catch (err) {
      console.error('Error generating QR code:', err);
      toast.error('Failed to generate QR code');
    }
  };

  useEffect(() => {
    generateQR(url);
  }, [url]);

  const downloadQR = () => {
    if (qrCode) {
      const link = document.createElement('a');
      link.download = 'capulas-felix-menu-qr.png';
      link.href = qrCode;
      link.click();
      toast.success('QR code downloaded successfully!');
    }
  };

  const testQR = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <QrCode className="h-10 w-10 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-800">Capulas Felix</h1>
          </div>
          <p className="text-xl text-gray-600">Restaurant QR Code Generator</p>
          <p className="text-gray-500 mt-2">Generate QR codes for easy menu access</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* QR Code Display */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800 flex items-center justify-center gap-2">
                <QrCode className="h-6 w-6 text-orange-600" />
                Your Menu QR Code
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              {qrCode && (
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-orange-100">
                  <img 
                    src={qrCode} 
                    alt="QR Code for Capulas Felix Menu" 
                    className="w-64 h-64 mx-auto"
                  />
                </div>
              )}
              
              <div className="flex gap-3 w-full">
                <Button 
                  onClick={downloadQR} 
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-200"
                  disabled={!qrCode}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download QR
                </Button>
                <Button 
                  onClick={testQR} 
                  variant="outline" 
                  className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Test Link
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* URL Input and Info */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Customize Your QR Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Restaurant Website URL
                </label>
                <Input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://your-restaurant-website.com"
                  className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter the URL where customers can view your menu
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-gray-800 mb-2">How to use your QR code:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Print the QR code and place it on tables</li>
                  <li>• Customers scan with their phone camera</li>
                  <li>• They're instantly directed to your menu</li>
                  <li>• No app download required!</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-gray-800 mb-2">💡 Pro Tips:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use high-quality printing for best scanning</li>
                  <li>• Place QR codes at eye level on tables</li>
                  <li>• Include brief instructions like "Scan for Menu"</li>
                  <li>• Test the QR code before printing</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-orange-200">
          <p className="text-gray-600">
            🍽️ Enhance your dining experience with digital menus
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Capulas Felix - Making dining seamless and modern
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
