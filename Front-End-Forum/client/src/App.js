import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "../src/axios/axiosConfig.jsx"; // Import axios configuration
import Home from "./Pages/Home/Home.jsx";
import LoginPage from "./component/SignUp/LoginPage.jsx";
import RegisterPage from "./component/SignUp/RegisterPage.jsx";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Questions from "./Pages/Question/QuestionDetail.jsx";
import Howitworks from "./component/Howitworks/Howitworks.jsx";
import ForgotPassword from "./Pages/LogIn/ForgotPassword.jsx";
import SingleQuestion from "./Pages/Question/SingleQuestion.jsx";
import AllQuestion from "./Pages/Question/AllQuestion.jsx"; // Fixed import path
import TermsOfService from "./component/termsOfService/TermsOfService.jsx";
import PrivacyPolicy from "./component/privacyPolicy/PrivacyPolicy.jsx";

// Create a context for the application state (user, etc.)
export const AppState = createContext();

function App() {
  const [users, setUser] = useState(null); // Initialize users as null
  const [loading, setLoading] = useState(true); // State to handle loading
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    async function checkUser() {
      const token = localStorage.getItem("token"); // Check for token in localStorage
      if (!token) {
        setLoading(false); // No token, stop loading
        return;
      }
      try {
        const { data } = await axios.get("/users/check", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser({ username: data.username, user_id: data.user_id }); // Store user data
      } catch (error) {
        console.error(
          "User not authenticated:",
          error.response || error.message
        );
        navigate("/login"); // Redirect to login if error occurs
      } finally {
        setLoading(false); // Stop loading after API response
      }
    }
    checkUser(); // Run checkUser on component mount
  }, [navigate]); // Added navigate as dependency

  if (loading) {
    return <div>Loading...</div>; // Show loading message while checking user
  }

  // ProtectedRoute component for protected routes
  const ProtectedRoute = ({ children }) => {
    return users ? children : <LoginPage />;
  };

  return (
    // Provide user state to the whole app via context
    <AppState.Provider value={{ users, setUser }}>
      {/* Header is always displayed */}
      <Header />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<Howitworks />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        PrivacyPolicy
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Protected Routes */}
        <Route
          path="/Question"
          element={
            <ProtectedRoute>
              <Questions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/single-questions/question_id"
          element={<SingleQuestion />}
        />
        <Route path="/all-questions" element={<AllQuestion />} />
      </Routes>

      {/* Footer is always displayed */}
      <Footer />
    </AppState.Provider>
  );
}

export default App;
