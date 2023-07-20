import { QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./libs/AppRouter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./libs/tanStack";
import AppToaster from "./libs/AppToaster";

//TODO: add en empty screen in UI
//TODO: add content to page 404
//TODO: add logout button
//FIXME: logged in users can travel threw the app inside the url bar

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
      <AppToaster />
    </QueryClientProvider>
  );
}

export default App;
