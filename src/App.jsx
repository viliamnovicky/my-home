import { useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import Food from "./pages/Food";
import Map from "./pages/Map";

import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
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
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <AppLayout menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility} />
            }
          >
            <Route index element={<Navigate replace to="home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="food" element={<Food />}></Route>
            <Route path="coffee" element={<Coffee />}></Route>
            <Route
              path="map"
              element={
                <Map menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility} />
              }
            ></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--green-50)", // Green background for success
              color: "var(--green-900)", // Green text color for success
              fontWeight: "500",
            },
          },
          error: {
            duration: 3000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--red-50)", // Red background for error
              color: "var(--red-900)", // Red text color for error
              fontWeight: "500",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
