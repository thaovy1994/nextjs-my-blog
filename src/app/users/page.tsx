"use client";
import UsersTable from "@/components/users/users.table";
import { useRouter } from "next/navigation";

const UserPage = async () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  const response = await fetch("http://localhost:8000/blogs", {
    method: "GET",
  });
  const data = await response.json();

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div>
        <UsersTable blogs={data} />
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

export default UserPage;
