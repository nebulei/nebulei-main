import { Route, Routes } from "react-router-dom";

import {
  LoginPath,
  RegisterPath,
  PasswordResetPath,
  PasswordResetSuccessPath,
} from "./urls";

import Login from "./views/Login";
import Register from "./views/Register";
import ResetPassword from "./views/ResetPassword";
import ResetPasswordSuccess from "./views/ResetPasswordSuccess";



function Auth() {
  return (
    <div id='Auth'>

      <Routes>
          <Route path={RegisterPath} element={<Login />} />
          <Route path={LoginPath} element={<Register />} />
          <Route path={PasswordResetPath} element={<ResetPassword />} />
          <Route path={PasswordResetSuccessPath} element={<ResetPasswordSuccess />} />
      </Routes>

    </div>
  );
};

export default Auth;