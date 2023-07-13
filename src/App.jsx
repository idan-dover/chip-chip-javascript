import { QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./libs/AppRouter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./libs/tanStack";
import AppToaster from "./libs/AppToaster";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />;
      <ReactQueryDevtools initialIsOpen={false} />
      <AppToaster />
    </QueryClientProvider>
  );
}

export default App;
