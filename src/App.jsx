import { useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import Food from "./pages/Food";
import Map from "./pages/Map";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [menuVisibility, setMenuVisibility] = useState(false)
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility}/>}>
            <Route index element={<Navigate replace to="home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="food" element={<Food />}></Route>
            <Route path="coffee" element={<Coffee />}></Route>
            <Route path="map" element={<Map menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
