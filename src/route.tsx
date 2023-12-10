import { RootRoute, Route, Router } from "@tanstack/react-router";
// import { Document } from "./_document";
import { NotFound } from "./pages/index/NotFound";
import { Home } from "src/pages/index/Home";
import { StudentRegister } from "./features/student/pages/StudentRegister";
import { StudentLogin } from "./features/student/pages/StudentLogin";
import { StudentDocument } from "./features/student/_StudentDocument";
import { StudentAuthDocument } from "./features/student/_StudentAuthDocument";
import { MyStudentDetails } from "./features/student/pages/MyStudentDetails";
import { MyAttendance } from "./features/student/pages/MyAttendance";
import { MyJoinLesson } from "./features/student/pages/MyJoinLesson";

// ホームページのルート
const root_route = new RootRoute({});

// index用のルート
const index_route = new Route({
  getParentRoute: () => root_route,
  path: "/",
  component: () => <Home />,
});

// 404用のルート
const not_found_route = new Route({
  getParentRoute: () => root_route,
  path: "*",
  component: () => <NotFound />,
});

// 生徒用のルート
const student_route = new Route({
  getParentRoute: () => root_route,
  path: "/student",
  component: () => <StudentDocument />,
});

// 生徒が登録する用のルート
const student_register_route = new Route({
  getParentRoute: () => student_route,
  path: "/register",
  component: () => <StudentRegister />,
});

// 生徒がログインする用のルート
const student_login_route = new Route({
  getParentRoute: () => student_route,
  path: "/login",
  component: () => <StudentLogin />,
});

// 生徒がログインした後のルート
const student_auth_route = new Route({
  getParentRoute: () => student_route,
  path: "/auth",
  component: () => <StudentAuthDocument />,
});

// 生徒が自分の情報を確認する用のルート
const student_info_route = new Route({
  getParentRoute: () => student_auth_route,
  path: "/",
  component: () => <MyStudentDetails />,
});

// 生徒が自分の履修授業を確認する用のルート
const student_course_route = new Route({
  getParentRoute: () => student_auth_route,
  path: "/join-lesson",
  component: () => <MyJoinLesson />,
});

// 生徒が自分の出席状況を確認する用のルート
const student_attendance_route = new Route({
  getParentRoute: () => student_auth_route,
  path: "/attendance",
  component: () => <MyAttendance />,
});

// 教師用のルート
// const teacher_route = new Route({
//   getParentRoute: () => root_route,
//   path: "/teacher",
//   component: () => <Document />,
// });

const router = new Router({
  routeTree: root_route.addChildren([
    index_route.addChildren([
      student_route.addChildren([
        student_register_route,
        student_login_route,
        student_auth_route.addChildren([
          student_info_route,
          student_attendance_route,
          student_course_route,
        ]),
      ]),
    ]),
    not_found_route,
  ]),
});

// tanstack routerを型安全に利用するための型定義
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };