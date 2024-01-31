import { Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/auth/signin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<SignInPage />} />
      
    </Routes>
  );
};

export default AllRoutes;
