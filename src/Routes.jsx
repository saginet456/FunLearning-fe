import { Route, Routes as BaseRoutes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeStudent from "./Pages/Student/Home";
import LoginPageStudent from "./Pages/Student/Login";
import SignUp from "./Pages/Student/Signup";
import HomeParent from "./Pages/Parent/Home";
import LoginPageParent from "./Pages/Parent/Login";
import SignUpParent from "./Pages/Parent/Signup";
import HomeTeacher from "./Pages/Teacher/Home";
import LoginPageTeacher from "./Pages/Teacher/Login";
import SignUpTeacher from "./Pages/Teacher/Signup";
import IntroPage from "./Pages/Intro/IntroPage";

export default function Routes() {
    return (
        <BaseRoutes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/student" element={<HomeStudent />} />
            <Route path="/student/login" element={<LoginPageStudent />} />
            <Route path="/student/signup" element={<SignUp />} />
            <Route path="/parent" element={<HomeParent />} />
            <Route path="/parent/login" element={<LoginPageParent />} />
            <Route path="/parent/signup" element={<SignUpParent />} />
            <Route path="/teacher" element={<HomeTeacher />} />
            <Route path="/teacher/login" element={<LoginPageTeacher />} />
            <Route path="/teacher/signup" element={<SignUpTeacher />} /> */}
        </BaseRoutes>
    );
}