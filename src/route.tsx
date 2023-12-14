import { RootRoute, Route, Router } from "@tanstack/react-router";
// import { Document } from "./_document";
import { NotFound } from "./pages/index/NotFound";
import { Home } from "src/pages/index/Home";
import { StudentRegister } from "./features/student/pages/StudentRegister";
import { StudentLogin } from "./features/student/pages/StudentLogin";
import { StudentDocument } from "./features/student/pages/_StudentDocument";
import { StudentAuthDocument } from "./features/student/pages/_StudentAuthDocument";
import { MyStudentDetails } from "./features/student/pages/MyStudentDetails";
import { MyAttendance } from "./features/student/pages/MyAttendance";
import { MyJoinLesson } from "./features/student/pages/MyJoinLesson";
import { TeacherDocument } from "./features/teacher/pages/_TeacherDocument";
import { TeacherRegister } from "./features/teacher/pages/TeacherRegister";
import { TeacherLogin } from "./features/teacher/pages/TeacherLogin";
import { TeacherAuthDocument } from "./features/teacher/pages/_TeacherAuthDocument";
import { MyTeacherDetails } from "./features/teacher/pages/MyTeacherDetails";
import { AddJoinLesson } from "./features/student/pages/AddJoinLesson";
import { AllStudents } from "./features/teacher/pages/AllStudents";
import { AllTeachers } from "./features/teacher/pages/AllTeachers";
import { AllMyLessons } from "./features/teacher/pages/AllMyLessons";
import { AddLesson } from "./features/teacher/pages/AddLesson";
import { AllAttendanceByLesson } from "./features/teacher/pages/AllAttendanceByLesson";
import { TeacherLogout } from "./features/teacher/pages/TeacherLogout";
import { StudentLogout } from "./features/student/pages/StudentLogout";

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

// 生徒が自分の授業を追加するためのルート
const student_add_course_route = new Route({
  getParentRoute: () => student_auth_route,
  path: "/add-join-lesson",
  component: () => <AddJoinLesson />,
});

// 生徒がログアウトするためのルート
const student_logout_route = new Route({
  getParentRoute: () => student_auth_route,
  path: "/logout",
  component: () => <StudentLogout />,
});

// 教師用のルート
const teacher_route = new Route({
  getParentRoute: () => root_route,
  path: "/teacher",
  component: () => <TeacherDocument />,
});

// 教師が登録する用のルート
const teacher_register_route = new Route({
  getParentRoute: () => teacher_route,
  path: "/register",
  component: () => <TeacherRegister />,
});

// 教師がログインする用のルート
const teacher_login_route = new Route({
  getParentRoute: () => teacher_route,
  path: "/login",
  component: () => <TeacherLogin />,
});

// 教師がログインした後のルート
const teacher_auth_route = new Route({
  getParentRoute: () => teacher_route,
  path: "/auth",
  component: () => <TeacherAuthDocument />,
});

// 教師が自分の情報を確認する用のルート
const teacher_info_route = new Route({
  getParentRoute: () => teacher_auth_route,
  path: "/",
  component: () => <MyTeacherDetails />,
});

// 教師がすべての生徒を確認する用のルート
const teacher_all_students_route = new Route({
  getParentRoute: () => teacher_auth_route,
  path: "/students",
  component: () => <AllStudents />,
});

// 教師がすべての教師を確認する用のルート
const teacher_all_teachers_route = new Route({
  getParentRoute: () => teacher_auth_route,
  path: "/teachers",
  component: () => <AllTeachers />,
});

// 教師が自分の担当するすべての授業を確認する用のルート
const teacher_all_lessons_route = new Route({
  getParentRoute: () => teacher_auth_route,
  path: "/lessons",
  component: () => <AllMyLessons />,
});

// 教師が担当する授業を追加するためのルート
const teacher_add_lesson_route = new Route({
  getParentRoute: () => teacher_auth_route,
  path: "/add-lesson",
  component: () => <AddLesson />,
});

// 教師が特定の授業における生徒の出席状況を確認するためのルート
const teacher_attendance_route = new Route({
  getParentRoute: () => teacher_auth_route,
  path: "/lessons/$lessonUuid/attendances",
  component: () => <AllAttendanceByLesson />,
});

// 教師がログアウトするためのルート
const teacher_logout_route = new Route({
  getParentRoute: () => teacher_auth_route,
  path: "/logout",
  component: () => <TeacherLogout />,
});

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
          student_add_course_route,
          student_logout_route,
        ]),
        teacher_route.addChildren([
          teacher_register_route,
          teacher_login_route,
          teacher_auth_route.addChildren([
            teacher_info_route,
            teacher_all_students_route,
            teacher_all_teachers_route,
            teacher_all_lessons_route,
            teacher_add_lesson_route,
            teacher_attendance_route,
            teacher_logout_route,
          ]),
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
