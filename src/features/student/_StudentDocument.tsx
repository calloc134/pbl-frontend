import { Outlet } from "@tanstack/react-router";
import { JwtProvider } from "./context/CredentialProvider";
import { Toaster } from "react-hot-toast";

const StudentDocument = () => (
  <>
    <JwtProvider>
      <Outlet />
    </JwtProvider>
    <Toaster />
  </>
);

export { StudentDocument };
