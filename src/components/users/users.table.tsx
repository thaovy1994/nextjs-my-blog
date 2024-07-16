"use client";
import { IBlog } from "@/types/backend";
import { useState } from "react";
import CreateModal from "../ui/Dialog/create.modal";

interface IProps {
  blogs: IBlog[];
}

const UsersTable = (props: IProps) => {
  const { blogs } = props;
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  return (
    <>
      <div className="mt-4 mr-20 flex flex-row-reverse">
        <button
          className="rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 hover:text-white"
          onClick={() => setShowAddModal(true)}
        >
          Add New
        </button>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 mx-auto mt-2">
          <div className="px-16 inline-bloc align-middle">
            <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-slate-700 divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-neutral-200">
                      Name
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-white dark:text-neutral-200">
                      Content
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-white dark:text-neutral-200">
                      Author
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white text-center text-sm font-medium">
                      Title
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white text-center text-sm font-medium">
                      Option
                    </td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {blogs?.map((blog) => {
                    return (
                      <tr key={blog.id}>
                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {blog.id}
                        </td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-800 dark:text-neutral-200">
                          {blog.content}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {blog.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {blog.title}
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
      <CreateModal
        showCreateModal={showAddModal}
        setShowCreateModal={setShowAddModal}
      />
    </>
  );
};
export default UsersTable;
