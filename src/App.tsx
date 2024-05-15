import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { useEffect, useState } from "react";
import LoginPage from "./component/pages/loginPage";

function App() {
  const [authUser, setAuthUser] = useState<boolean>(false); // place this condition in redux and access this value or can create a private route that can help to access the

  useEffect(() => {
    const hello = localStorage.getItem("c4CarLoginStatus");

    if (hello) {
      setAuthUser(JSON.parse(hello));
    } else {
      setAuthUser(false);
    }
  }, []);

  console.log(authUser);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* create private route instead of this status check and implement redux it is better for state management  */}
          {!authUser ? (
            <>
              <Route
                path="/"
                element={<LoginPage setAuthUser={setAuthUser} />}
              ></Route>
              <Route
                path="*"
                element={
                  <>
                    {" "}
                    <div className="text-xl font-semibold">
                      Go Back to login page
                    </div>{" "}
                    Please Login First
                  </>
                }
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Layout />}>
                <Route path="/home" index element={<HomePage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/usedCars" element={<UsedCarsPage />} />
                <Route path="/sparePart" element={<SparePartPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/offers" element={<OfferPage />} />
                <Route path="/reminders" element={<ReminderPage />} />
                <Route path="/customers" element={<CustomersPage />} />
                <Route path="/orderHistory" element={<OrderHistoryPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<Navigate to="/home" />} /> /
                {/* route to home page if user trying to get to only localhost 3000 */}
              </Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
