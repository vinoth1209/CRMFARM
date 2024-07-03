import { QueryClient, QueryClientProvider } from "react-query";
import CustomLayout from "./Layouts/CustomLayout";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/useStateContext/ContextProvider";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
    <ContextProvider >
        <CustomLayout />
      </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
