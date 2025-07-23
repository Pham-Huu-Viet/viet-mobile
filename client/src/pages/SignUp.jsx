import { Eye, EyeClosed, Lock, Mail, Phone, User } from "lucide-react";
import { SlSocialGoogle, SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputItem from "../components/ui/InputItem";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  return (
    <div className="section-container bg-gray-20 flex-1">
      <div className="section-content flex-col-center text-sm">
        <div className="card-static-col max-w-[450px] p-8">
          <div className="flex-col-center mb-8 w-full">
            <h1 className="mb-2">Sign Up</h1>
            <p>Sign up to access all features</p>
          </div>

          {/* Form input */}
          <div className="flex-col-center w-full gap-6">
            {/* Name */}
            <InputItem
              id="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={setName}
              iconLeft={<User />}
            />

            {/* Email */}
            <InputItem
              id="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={setEmail}
              iconLeft={<Mail />}
            />

            {/* Phone */}
            <InputItem
              id="phone"
              placeholder="Phone"
              type="tel"
              value={phone}
              onChange={setPhone}
              iconLeft={<Phone />}
            />

            {/* Password */}
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

            {/* Confirm password */}
            <InputItem
              id="confirmPassword"
              placeholder="Confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={setConfirmPassword}
              iconLeft={<Lock />}
              iconRight={isShowConfirmPassword ? <EyeClosed /> : <Eye />}
              handleIconRight={() => setIsShowConfirmPassword((prev) => !prev)}
            />

            {/* Button Sign up */}
            <div className="btn-in-card text-accent h-12">Sign up</div>
          </div>

          {/* Or */}
          <div className="flex-center relative my-1 w-full py-5">
            <span className="bg-gray-20 absolute top-1/2 z-10 -translate-y-1/2 px-4">
              Or
            </span>
            <div className="bg-border-gray-20 absolute top-1/2 left-0 h-px w-full -translate-y-1/2"></div>
          </div>

          {/* Sign up Oauth */}
          <div className="flex-col-center mb-6 w-full gap-3">
            {/* With Google */}
            <div className="btn-in-card text-accent h-12">
              <SlSocialGoogle className="text-text mr-2" />
              Sign up with Google
            </div>

            {/* With Facebook */}
            <div className="btn-in-card text-accent h-12">
              <SlSocialFacebook className="text-text mr-2" />
              Sign up with Facebook
            </div>
          </div>

          {/* to Register */}
          <p>
            Already have an account?{" "}
            <Link to="/signIn" className="text-accent">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
