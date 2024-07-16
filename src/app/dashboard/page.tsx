"use client";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  return (
    <>
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
export default Dashboard;
