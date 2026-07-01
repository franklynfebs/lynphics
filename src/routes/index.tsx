import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home";
import FrameworkPage from "../pages/Framework";
import AboutPage from "../pages/About";
import InsightsPage from "../pages/Insights";
import ConsultationPage from "../pages/Consultation";
import PrivacyPage from "../pages/Privacy";
import TermsPage from "../pages/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "framework",
        element: <FrameworkPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "insights",
        element: <InsightsPage />,
      },
      {
        path: "consultation",
        element: <ConsultationPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
    ],
  },
]);