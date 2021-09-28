import React, { useEffect } from "react";
import {
  useQuery,
  //   useMutation,
  //   useQueryClient,
  //   QueryClient,
  //   QueryCache,
  //   QueryClientProvider,
} from "react-query";

const handleAddBlog = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: {
      title: "title",
      userId: 2,
      body: "body",
    },
  });
};

const handlefetchBlogs = async (id) => {
  console.log(id);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Blogs = (props) => {
  const { isLoading, isError, error, status, data } = useQuery(
    ["blogs", 1],
    (context) => handlefetchBlogs(context.queryKey[1])
  );

  return (
    <div>
      <h2>Posts</h2>
      <p>{status}</p>
      {!isLoading &&
        !isError &&
        data.map((it, ins) => {
          return (
            <div>
              <p>{it.title}</p>
              <p>{it.body}</p>
            </div>
          );
        })}
      <button onClick={handleAddBlog}>Add</button>
    </div>
  );
};

export default Blogs;
