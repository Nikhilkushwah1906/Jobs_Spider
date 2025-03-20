import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./admin/login/LoginPage";
import DashboardAdmin from "./admin/login/DashboardAdmin";
import HomePage from "./userinterface/HomePage";
import CompanyJobs from "./admin/Comapny_Jobs/ComapnyJobs";
import DisplayAllCompanyJobs from "./admin/Comapny_Jobs/DisplayAllCompanyJobs";
import MainShowFilterJobsComponent from "./userinterface/filterpage/MainShowFilterJobsComponent";
import SearchBarMob2 from "./userinterface/components/SearchBarMob2";
import ShowJobsCards from "./userinterface/filterpage/ShowJobsCards"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            element={<DisplayAllCompanyJobs />}
            path={"/displayallcompanyjobs"}
          />
          <Route element={<CompanyJobs />} path={"/companyjobs"} />
          <Route element={<SearchBarMob2 />} path={"/searchBarmob2"} />
          <Route element={<MainShowFilterJobsComponent />} path={"/searchjobs"} />
          <Route element={<Loginpage />} path={"/loginpage"} />
          <Route element={<HomePage />} path={"/"} />
          <Route element={<DashboardAdmin />} path={"/dashboardadmin/*"} />
          <Route element={<ShowJobsCards />} path={"/showjobscards"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
