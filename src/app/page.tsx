"use client";
import UsersTable from "@/components/users/users.table";
import { useEffect, useState } from "react";

export default function Home(): JSX.Element {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "GET",
      });
      const data = await response.json();
      setBlogs(data);
    };
    fetchData();
  });

  if (!blogs) {
    return <div>loading...</div>;
  }
  return (
    <>
      <UsersTable blogs={blogs} />
    </>
  );
}
