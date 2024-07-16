"use client";
import RegisterForm from "./register.form";

const RegisterPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />
        <p className="mt-10 text-center text-sm text-gray-500">
          Did you have an account ?
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
