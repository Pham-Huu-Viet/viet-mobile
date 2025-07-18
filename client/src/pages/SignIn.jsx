import { Eye, EyeClosed, Lock, User } from "lucide-react";
import { SlSocialGoogle, SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputItem from "../components/auth/InputItem";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="section-container bg-gray-20 flex-1">
      <div className="section-content flex-col-center text-sm">
        <div className="card-static-col max-w-[450px] p-8">
          <div className="flex-col-center mb-8 w-full">
            <h1 className="mb-2">Sign in</h1>
            <p>Sign in to continue shopping</p>
          </div>

          {/* Form input */}
          <div className="flex-col-center w-full gap-6">
            <InputItem
              id="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={setEmail}
              iconLeft={<User />}
            />

            <InputItem
              id="password"
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={setPassword}
              iconLeft={<Lock />}
              iconRight={isShowPassword ? <EyeClosed /> : <Eye />}
              handleIconRight={() => setIsShowPassword((prev) => !prev)}
            />

            <a href="#" className="text-accent ml-auto">
              Forgot Password?
            </a>

            {/* Button Sign in */}
            <div className="btn-in-card text-accent h-12">Sign in</div>
          </div>

          {/* Or */}
          <div className="flex-center relative my-1 w-full py-5">
            <span className="bg-gray-20 absolute top-1/2 z-10 -translate-y-1/2 px-4">
              Or
            </span>
            <div className="bg-border-gray-20 absolute top-1/2 left-0 h-px w-full -translate-y-1/2"></div>
          </div>

          {/* Sign in Oauth */}
          <div className="flex-col-center mb-6 w-full gap-3">
            {/* With Google */}
            <div className="btn-in-card text-accent h-12">
              <SlSocialGoogle className="text-text mr-2" />
              Sign in with Google
            </div>

            {/* With Facebook */}
            <div className="btn-in-card text-accent h-12">
              <SlSocialFacebook className="text-text mr-2" />
              Sign in with Facebook
            </div>
          </div>

          {/* to Register */}
          <p>
            Don't have an account?{" "}
            <Link to="/signUp" className="text-accent">
              Create Your Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
