import Image from "next/image";
import InputCustom from "../shared/InputCustom";
import ButtonCustom from "../shared/ButtonCustom";

interface AuthModalProps {
  isLogin: boolean;
  isOpen: boolean;
  onClose: () => void;
  onchangeMode: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({ isLogin, isOpen, onClose ,onchangeMode }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      { isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[55]">
          <div className="fixed inset-0 bg-secondary/80"  onClick={onClose}></div>

          <div className="bg-white rounded-3xl shadow-lg py-5 md:py-10 px-[30px] md:px-[60px] w-full max-w-md z-53">
            
            <div className="flex justify-between items-start">
              <h2 className="text-lg md:text-[32px] font-bold [line-height:100%] mb-5 text-secondary">
                {isLogin ? 'LogIn' : 'Create Account'}
              </h2>
              <button
                type="button"
                className=" text-secondary/40 text-2xl hover:text-gray-500"
                onClick={onClose}>
                ×
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" key={22}>
              {/* Name and Surname */}
              {!isLogin && (
                <InputCustom 
                  type="text" 
                  id="name" 
                  label="Name and Surname" 
                  placeholder="Enter your name and surname" />
              )}
              {/* Email Address */}
              <InputCustom 
                type="email" 
                id="email" 
                label="Email Address" 
                placeholder="Enter your email address" />

              {/* Password */}
              <InputCustom 
                  type="password" 
                  id="password" 
                  label="Password" 
                  placeholder="Enter your password" />

              {/* Forgot password for login*/}
              {isLogin && (
                  <p className="mt-5 mb-6 text-sm text-[#33333399] text-right">
                    <a href="#" className="hover:underline">Forgot your password?</a>
                  </p>
              )} 
              {/* Terms and Privacy Agreement */}
              {!isLogin && (
                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-secondary/40 [line-height:100%]">
                    I agree with{' '}
                    <a href="#" className="text-primary hover:underline">
                      Terms
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary hover:underline">
                      Privacy
                    </a>
                  </label>
                </div>
              )}
              {/* Sign Up Button */}
              <ButtonCustom type="submit" label={isLogin ? 'Sign In' : 'Sign Up'} classBtnExtra="w-full" />
    
              <p className="w-ful block text-center py-2.5 m-0 text-secondary/40 [line-height:100%]">or</p>
              {/* Sign Up with Google */}
              <button type="button"
                className="flex items-center gap-2.5 w-full bg-white border border-secondary2 font-semibold [line-height:100%] text-secondary/40 px-6 py-2.5 rounded-[50px] hover:bg-gray-100 transition duration-300 ">
                <Image alt="google Icon" src="/images/auth/google.svg" width={24} height={24} />                
                <span className="w-full text-center text-base md:text-xl ">Sign {isLogin ? 'In' : 'Up'} with Google</span>
              </button>

              {/* Already have an account? */}
              <p className="text-sm text-center mt-4">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <a href="#" className="text-primary font-semibold hover:underline" 
                  onClick={onchangeMode}>
                  {isLogin ? 'Sign Up' : 'Log In'}
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;