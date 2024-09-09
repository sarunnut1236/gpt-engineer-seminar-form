import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe', email: 'john@example.com', googleConnected: true }));
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
      <Card className="w-[350px] bg-[#FFFEFA]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">Login to Leadership Seminar</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGoogleLogin} className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-100">
            <FcGoogle className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
          <p className="mt-4 text-sm text-center text-gray-600">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;