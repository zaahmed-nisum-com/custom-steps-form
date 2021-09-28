import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Blogs from "./react-query/blog";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {},
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Blogs />
    </QueryClientProvider>
  );
}

export default App;
