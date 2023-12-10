import { Outlet } from "@tanstack/react-router";
import { JwtProvider } from "../context/CredentialProvider";
import { Toaster } from "react-hot-toast";

const TeacherDocument = () => (
  <>
    <JwtProvider>
      <Outlet />
    </JwtProvider>
    <Toaster />
  </>
);

export { TeacherDocument };
