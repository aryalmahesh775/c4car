import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout";
import {
  ChatPage,
  CustomersPage,
  HomePage,
  NotFoundPage,
  OfferPage,
  ReminderPage,
  ServicePage,
  SparePartPage,
  UsedCarsPage,
} from "./component/pages";
import OrderHistoryPage from "./component/pages/order";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/usedCars" element={<UsedCarsPage />} />
            <Route path="/sparePart" element={<SparePartPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/offers" element={<OfferPage />} />
            <Route path="/reminders" element={<ReminderPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/orderHistory" element={<OrderHistoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
