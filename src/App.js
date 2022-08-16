import logo from './logo.svg';
import './App.css';
import Signup from './InternalPages/Signup/Signup';
import Login from './InternalPages/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './InternalPages/LandingPage';
import Schedules from './InternalPages/Schedules/Schedules';
import Termsofuse from './Component/terms/Terms';
import Privacy from './Component/terms/Privacy';
import Refund from './Component/terms/Refund';
import Profile from './InternalPages/Profile/Profile';
import FullWidthTabs from './InternalPages/Billing/Billing';
import AllAppointments from './InternalPages/AllAppointments/AllAppointments';
import Reports from './InternalPages/Reports/Reports';
import Pricing from './Component/Pricing';
import Appointment from './InternalPages/Appointments/Appointment';
import HomePage from './InternalPages/HomePage/HomePage';
import Main from './InternalPages/HomePage/Main';
import SchedulesPage from './MerchantDash/Schedules/Schedules';
import AddSchedules from './MerchantDash/Schedules/AddSchedules';
import QrCode from './MerchantDash/QrCode/QrCode';
import Billing from './MerchantDash/Billing/Billing';
import Appointments from './MerchantDash/Appointments/Appointments';
import ReportsPage from './MerchantDash/Reports/ReportsPage';
import Accounts from './MerchantDash/Accounts/Accounts';
function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/register' component={Signup}/>
        <Route path='/terms' component={Termsofuse}/>
        <Route path='/privacy' component={Privacy}/>
        <Route path='/refund' component={Refund}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/billing' component={FullWidthTabs}/>
        <Route path='/appointment' component={AllAppointments}/>
        <Route path='/allappointment' component={Appointment}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/home' component={Main}/>
        <Route path='/schedules' component={Schedules}/>
        <Route path='/add/schedules' component={AddSchedules}/>
        <Route path='/merchant/qrcode' component={QrCode}/>
        <Route path='/merchant/billing' component={Billing}/>
        <Route path='/merchant/appointments' component={Appointments}/>
        <Route path='/merchant/reports' component={ReportsPage}/>
        <Route path='/merchant/accounts' component={Accounts}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}
export default App;
