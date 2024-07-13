"use client";
import { useRouter } from "next/navigation";

const dashboard = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };
  return (
    <>
      Dashboard Page
      <div>
        <button
          className="border-2 rounded-lg bg-slate-600 text-white p-1"
          onClick={() => handleBtn()}
        >
          Back Home Page
        </button>
      </div>
    </>
  );
};
export default dashboard;
