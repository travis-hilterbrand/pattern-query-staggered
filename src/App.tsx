import { QueryClientProvider } from "@tanstack/react-query";
import { Report } from "./components/Report";
import { queryClient } from "./api/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Report />
    </QueryClientProvider>
  );
}

export default App;
