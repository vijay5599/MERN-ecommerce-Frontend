import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function ProtectedAdmin({ children }) {
  // const user = useSelector(selectLoggedInUser);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("usesfwefwefwefr", user);
  if (user === null) {
    return <Navigate to="/login" replace={true}></Navigate>;
  } else if (user && user.role !== "admin") {
    return <Navigate to="/" replace={true}></Navigate>;
  } else {
    return children;
  }
}

export default ProtectedAdmin;
