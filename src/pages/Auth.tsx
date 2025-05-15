
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState(false);

  const handleSendOtp = () => {
    if (phoneNumber.length < 10) {
      toast({
        variant: "destructive",
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
      });
      return;
    }

    // Simulate OTP sending
    setSentOtp(true);
    toast({
      title: "OTP Sent",
      description: "A one-time password has been sent to your phone",
    });
  };

  const handleVerifyOtp = () => {
    if (otp.length < 4) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a valid OTP",
      });
      return;
    }

    // Simulate authentication
    toast({
      title: "Authentication successful",
      description: "Welcome to MediateX",
    });
    
    // Navigate to onboarding (for new users) or dashboard (for existing users)
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/30">
      {/* Back button */}
      <Button 
        variant="ghost" 
        className="absolute top-4 left-4 flex items-center gap-2" 
        onClick={() => navigate('/')}
      >
        <ArrowLeft size={20} />
        Back
      </Button>
      
      {/* Language selector */}
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      
      <div className="w-full max-w-md">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">MediateX</CardTitle>
            <CardDescription>
              {sentOtp 
                ? "Enter the OTP sent to your phone"
                : "Sign in with your phone number"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">{t('login')}</TabsTrigger>
                <TabsTrigger value="signup">{t('signup')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                {!sentOtp ? (
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="text-lg h-12"
                      />
                    </div>
                    <Button 
                      className="w-full h-12 text-lg" 
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        className="text-lg h-12 text-center tracking-widest"
                      />
                    </div>
                    <Button 
                      className="w-full h-12 text-lg" 
                      onClick={handleVerifyOtp}
                    >
                      Verify
                    </Button>
                    <div className="text-center">
                      <Button 
                        variant="link" 
                        onClick={() => setSentOtp(false)}
                        className="text-sm"
                      >
                        Change phone number
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="signup">
                {!sentOtp ? (
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="text-lg h-12"
                      />
                    </div>
                    <Button 
                      className="w-full h-12 text-lg" 
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        className="text-lg h-12 text-center tracking-widest"
                      />
                    </div>
                    <Button 
                      className="w-full h-12 text-lg" 
                      onClick={handleVerifyOtp}
                    >
                      Verify
                    </Button>
                    <div className="text-center">
                      <Button 
                        variant="link" 
                        onClick={() => setSentOtp(false)}
                        className="text-sm"
                      >
                        Change phone number
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="flex justify-center text-sm text-muted-foreground">
            By continuing, you agree to our Terms and Privacy Policy
          </CardFooter>
        </Card>

        {/* Skip button for demo purposes */}
        <div className="mt-4 text-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/onboarding')}
            className="text-sm"
          >
            {t('skip')} (Demo)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
