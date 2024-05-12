import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";
import Dashboard from "./components/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnboardingOrchestrator from "./components/onboarding/OnboardingOrchestrator";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/onboarding",
    element: <OnboardingOrchestrator />,
  },
  // {
  //   path: "/forgot-password",
  //   element: <ForgotPasswordForm />,
  // },
  // {
  //   path: "/onboarding-page",
  //   element: <OnboardingPage />,
  // },
  // {
  //   path: "/user/onboarding",
  //   element: <OnboardingSteps />,
  // },
  // {
  //   path: "/chat",
  //   element: <Chat />,
  // },
  // {
  //   path: "/spending-activity",
  //   element: <SpendingActivityFull />,
  // },
  // {
  //   path: "/insights",
  //   element: <Insights />,
  // },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
