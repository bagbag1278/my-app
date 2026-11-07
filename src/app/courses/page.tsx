import type { Metadata } from "next";
import CourseManagement from "./CourseManagement";

export const metadata: Metadata = {
  title: "Courses — AURA",
  description: "Manage courses in the AURA learning catalog.",
};

export default function CoursesPage() {
  return <CourseManagement />;
}
