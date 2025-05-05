
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">Welcome to UPSCCircle</h1>
            <p className="text-center text-gray-600 mb-8">Join the community of UPSC aspirants</p>
            
            <AuthForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
