"use client";
import AppTable from "@/components/app.table";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  return (
    <>
      <div>
        <AppTable />
      </div>
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
export default Admin;
