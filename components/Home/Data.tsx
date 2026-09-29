"use client";

import { useFetch } from "@/app/hooks/useFetch";
import React from "react";

const Data = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">useFetch Practice</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {data?.map(function (post: any) {
          return (
            <div key={post.id} className="border rounded-lg p-5 shadow">
              <p className="text-sm text-gray-500">User ID: {post.userId}</p>

              <h2 className="text-xl font-bold mt-3">{post.title}</h2>

              <p className="text-gray-600 mt-3">{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
("");
