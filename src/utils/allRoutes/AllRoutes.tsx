import { Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/auth/signin";
import RootLayout from "../../pages/RootLayout/RootLayout";
import OrganizationAdminDashboard from "../../pages/organizationAdmin/OrganizationAdminDashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<SignInPage />} />
      <Route path="insightreports" element={<RootLayout/>}>
        <Route index element={<OrganizationAdminDashboard/>}/>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
