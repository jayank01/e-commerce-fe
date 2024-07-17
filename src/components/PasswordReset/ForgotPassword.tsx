import { Outlet } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="w-100 vendor d-flex justify-content-center align-items-center bg-dark text-light">
      <div className="forgot  bg-light text-black d-flex flex-column justify-content-center align-items-center p-3 rounded">
        <Outlet />
      </div>
    </div>
  );
};
export default ForgotPassword;
