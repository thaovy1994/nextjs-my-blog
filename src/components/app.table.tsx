"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const AppTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/users", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 mx-auto mt-2">
        <div className="p-1.5 inline-bloc align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-slate-700 divide-y divide-gray-200 dark:divide-neutral-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-neutral-200">
                    Name
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-neutral-200">
                    Age
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-neutral-200">
                    Email
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white text-end text-sm font-medium">
                    Options
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white text-end text-sm font-medium"></td>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {users &&
                  users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {user.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          {/* <Link to={`/users/${user.id}`}></Link> */}
                          <Link
                            href="/users/${user.id}"
                            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                            aria-current="page"
                          >
                            Detail
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppTable;
