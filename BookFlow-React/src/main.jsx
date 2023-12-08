import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./Pages/Log-in.jsx";
import passwordField from "./Pages/Sign-up/UserField-pw.jsx";
import signUpUser from "./Pages/Sign-up/UserFields.jsx";
import UserCategory from "./Pages/User-instance/User-Category.jsx";
import UserAdminTable from "./Pages/Admin-instance/Admin-Usertable.jsx";
import AdminEntryProfile from "./Components/Admin-Entry-Profile.jsx";
import BookCard from "./Components/BookCard.jsx";
import AdminBookTable from "./Pages/Admin-instance/Admin-Bookstable.jsx";
import BookEntry from "./Components/Book-Entry.jsx";
import AdminBookProfile from "./Components/Admin-Book-Profile.jsx";
import BookCopies from "./Components/Book-Copies.jsx";
import StaffBookTable from "./Pages/Staff-instance/Staff-instance-bookTable.jsx";
import StaffBookProfile from "./Pages/Staff-instance/Staff-isntance-bookProfile.jsx";
import ProtectedRoute from "./util/ProtectedRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Router>
      <Route path="/" component={LogIn} exact></Route>
      <Route path="/BookFlow-Signup" component={signUpUser}></Route>
      <Route path="/BookFlow-Password" component={passwordField}></Route>
      {/* <Route path="/BookFlow-userInstance" component={userHomePage}></Route> */}
      {/* <Route path="/BookFlow-userHome" component={UserHome}></Route> */}
      <Route path="/BookFlow-userCategory" component={UserCategory}></Route>
      <Route path="/BookFlow-bookCard" component={BookCard}></Route>
      <ProtectedRoute path="/BookFlow-Admin-userTable" component={UserAdminTable} />
      {/* <Route path="/BookFlow-Admin-userTable" component={UserAdminTable}></Route> */}
      <Route path="/BookFlow-Admin-entryProfile-:userID" component={AdminEntryProfile}></Route>
      <Route path="/BookFlow-Admin-bookProfile:bookID" component={AdminBookProfile}></Route>
      <Route path="/BookFlow-Admin-bookTable" component={AdminBookTable} ></Route>
      <Route path="/BookFlow-Staff-bookTable" component={StaffBookTable}></Route>
      <Route path="/BookFlow-Staff-bookProfile:bookID" component={StaffBookProfile}></Route>
    </Router>
  </div>
);
