"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  FiBookOpen,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";

type CourseStatus = "Published" | "Draft";

type Course = {
  id: string;
  title: string;
  instructor: string;
  category: string;
  lessons: number;
  students: number;
  status: CourseStatus;
  price: number;
  color: string;
};

const starterCourses: Course[] = [
  {
    id: "1",
    title: "Build Your Personal Style",
    instructor: "Maya Chen",
    category: "Style & Design",
    lessons: 12,
    students: 284,
    status: "Published",
    price: 49,
    color: "from-violet-500/45 to-fuchsia-400/20",
  },
  {
    id: "2",
    title: "The Art of Conscious Fashion",
    instructor: "Jordan Lee",
    category: "Sustainability",
    lessons: 8,
    students: 176,
    status: "Published",
    price: 35,
    color: "from-emerald-400/35 to-cyan-400/20",
  },
  {
    id: "3",
    title: "Color Theory for Everyday",
    instructor: "Avery Morgan",
    category: "Style & Design",
    lessons: 10,
    students: 0,
    status: "Draft",
    price: 39,
    color: "from-pink-400/40 to-orange-300/20",
  },
];

const courseStatusStyles: Record<CourseStatus, string> = {
  Published: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
  Draft: "bg-amber-400/10 text-amber-200 ring-amber-300/20",
};

export default function CourseManagement() {
  const [courses, setCourses] = useState(starterCourses);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All courses");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query);
      const matchesStatus =
        statusFilter === "All courses" || course.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [courses, search, statusFilter]);

  const handleAddCourse = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title") ?? "").trim();
    const instructor = String(formData.get("instructor") ?? "").trim();

    if (!title || !instructor) return;

    setCourses((current) => [
      {
        id: crypto.randomUUID(),
        title,
        instructor,
        category: String(formData.get("category") ?? "Style & Design"),
        lessons: Number(formData.get("lessons") ?? 0),
        students: 0,
        status: "Draft",
        price: Number(formData.get("price") ?? 0),
        color: "from-violet-400/40 to-fuchsia-400/20",
      },
      ...current,
    ]);
    setIsFormOpen(false);
    event.currentTarget.reset();
  };

  const publishedCount = courses.filter(
    (course) => course.status === "Published",
  ).length;
  const totalStudents = courses.reduce(
    (total, course) => total + course.students,
    0,
  );
  const totalLessons = courses.reduce(
    (total, course) => total + course.lessons,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0b0911] text-white">
      <header className="sticky top-0 z-10 border-b border-white/[0.07] bg-[#0d0b13]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold tracking-[0.16em]"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 text-xs tracking-normal">
              A
            </span>
            AURA<span className="-ml-2 text-fuchsia-300">.</span>
          </Link>
          <nav
            aria-label="Catalog pages"
            className="flex items-center gap-1 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1"
          >
            <Link
              href="/products"
              className="rounded-lg px-3 py-2 text-xs text-white/50 transition hover:text-white sm:px-4"
            >
              Products
            </Link>
            <Link
              href="/courses"
              aria-current="page"
              className="rounded-lg bg-violet-400/10 px-3 py-2 text-xs font-medium text-violet-200 sm:px-4"
            >
              Courses
            </Link>
          </nav>
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-pink-400 text-[10px] font-bold">
            AU
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs text-white/40">Learning catalog</p>
            <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Courses
            </h1>
            <p className="mt-2 text-sm text-white/45">
              Create and organize courses for your community.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold shadow-lg shadow-violet-950/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300"
          >
            <FiPlus />
            Add course
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard
            label="Total courses"
            value={String(courses.length).padStart(2, "0")}
            detail="Across your learning catalog"
            icon={<FiBookOpen />}
            tone="violet"
          />
          <StatCard
            label="Published"
            value={String(publishedCount).padStart(2, "0")}
            detail="Available to learners"
            icon={<FiCheck />}
            tone="green"
          />
          <StatCard
            label="Total learners"
            value={totalStudents.toLocaleString("en-US")}
            detail={`${totalLessons} lessons in your catalog`}
            icon={<FiUsers />}
            tone="pink"
          />
        </div>

        <section
          aria-labelledby="course-list-heading"
          className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#100e17]"
        >
          <div className="flex flex-col gap-4 border-b border-white/[0.07] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 id="course-list-heading" className="text-base font-semibold">
                All courses
              </h2>
              <p className="mt-1 text-xs text-white/40">
                {filteredCourses.length} of {courses.length} courses
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="relative sm:w-64">
                <FiSearch
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/35"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search courses..."
                  aria-label="Search courses"
                  className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.025] pl-9 pr-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-violet-400/50"
                />
              </label>
              <div className="relative">
                <select
                  aria-label="Filter by course status"
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="h-10 w-full appearance-none rounded-lg border border-white/10 bg-[#100e17] py-0 pl-3 pr-9 text-xs text-white/65 outline-none focus:border-violet-400/50 sm:w-36"
                >
                  <option>All courses</option>
                  <option>Published</option>
                  <option>Draft</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/40" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-white/[0.06] text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                  <th className="w-10 px-6 py-3.5">
                    <input
                      type="checkbox"
                      aria-label="Select all courses"
                      className="size-3.5 accent-violet-500"
                    />
                  </th>
                  <th className="px-3 py-3.5 font-medium">Course</th>
                  <th className="px-3 py-3.5 font-medium">Status</th>
                  <th className="px-3 py-3.5 font-medium">Lessons</th>
                  <th className="px-3 py-3.5 font-medium">Learners</th>
                  <th className="px-3 py-3.5 font-medium">Price</th>
                  <th className="w-12 px-5 py-3.5" aria-label="Actions" />
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {filteredCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="group transition hover:bg-white/[0.025]"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        aria-label={`Select ${course.title}`}
                        className="size-3.5 accent-violet-500"
                      />
                    </td>
                    <td className="px-3 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br ${course.color}`}
                        >
                          <FiBookOpen className="text-lg text-white/80" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-white/90">
                            {course.title}
                          </p>
                          <p className="mt-1 text-[11px] text-white/35">
                            {course.instructor} · {course.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ring-1 ${courseStatusStyles[course.status]}`}
                      >
                        <span className="size-1 rounded-full bg-current" />
                        {course.status}
                      </span>
                    </td>
                    <td className="px-3 py-3.5 text-sm text-white/65">
                      <span className="inline-flex items-center gap-2">
                        <FiClock className="text-xs text-white/35" />
                        {course.lessons}
                      </span>
                    </td>
                    <td className="px-3 py-3.5 text-sm text-white/65">
                      {course.students.toLocaleString("en-US")}
                    </td>
                    <td className="px-3 py-3.5 text-sm text-white/80">
                      ${course.price}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                        type="button"
                        aria-label={`More actions for ${course.title}`}
                        className="grid size-8 place-items-center rounded-lg text-white/35 transition hover:bg-white/[0.06] hover:text-white"
                      >
                        <FiMoreHorizontal />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredCourses.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-16 text-center text-sm text-white/45"
                    >
                      No courses match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-xs text-white/40">
              Showing{" "}
              <span className="text-white/70">
                {filteredCourses.length ? 1 : 0}–{filteredCourses.length}
              </span>{" "}
              of <span className="text-white/70">{courses.length}</span> courses
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Previous page"
                disabled
                className="grid size-8 place-items-center rounded-lg border border-white/[0.07] text-white/25 disabled:cursor-not-allowed"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                aria-current="page"
                className="grid size-8 place-items-center rounded-lg bg-violet-400/15 text-xs font-medium text-violet-200"
              >
                1
              </button>
              <button
                type="button"
                aria-label="Next page"
                disabled
                className="grid size-8 place-items-center rounded-lg border border-white/[0.07] text-white/25 disabled:cursor-not-allowed"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </section>

        <p className="mt-5 text-center text-[11px] text-white/30">
          Sample course data — connect your API when you are ready.
        </p>
      </div>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsFormOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-course-heading"
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-white/10 bg-[#12101a] p-5 shadow-2xl sm:rounded-2xl sm:p-7"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-fuchsia-300">LEARNING CATALOG</p>
                <h2
                  id="add-course-heading"
                  className="mt-2 text-xl font-semibold"
                >
                  Add a course
                </h2>
                <p className="mt-1 text-xs text-white/45">
                  Start with the basics. Course content can be added later.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setIsFormOpen(false)}
                className="grid size-9 place-items-center rounded-lg text-white/50 transition hover:bg-white/[0.06] hover:text-white"
              >
                <FiX />
              </button>
            </div>

            <form
              onSubmit={handleAddCourse}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <label className="space-y-2 sm:col-span-2">
                <span className="text-xs font-medium text-white/70">
                  Course title <span className="text-fuchsia-300">*</span>
                </span>
                <input
                  required
                  name="title"
                  placeholder="e.g. Build Your Personal Style"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  Instructor <span className="text-fuchsia-300">*</span>
                </span>
                <input
                  required
                  name="instructor"
                  placeholder="Instructor name"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  Category
                </span>
                <select
                  name="category"
                  defaultValue="Style & Design"
                  className="h-11 w-full rounded-lg border border-white/10 bg-[#17141f] px-3 text-sm text-white outline-none focus:border-violet-400/60"
                >
                  <option>Style &amp; Design</option>
                  <option>Sustainability</option>
                  <option>Business</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  Number of lessons
                </span>
                <input
                  min="0"
                  name="lessons"
                  type="number"
                  placeholder="0"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] px-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>
              <label className="space-y-2">
                <span className="text-xs font-medium text-white/70">
                  Price (USD)
                </span>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/40">
                    $
                  </span>
                  <input
                    min="0"
                    step="0.01"
                    name="price"
                    type="number"
                    placeholder="0.00"
                    className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.025] pl-7 pr-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                  />
                </div>
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-xs font-medium text-white/70">
                  Course description
                </span>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="What will learners take away from this course?"
                  className="w-full resize-y rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-400/60"
                />
              </label>
              <div className="flex flex-col-reverse gap-2 border-t border-white/[0.08] pt-4 sm:col-span-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="h-10 rounded-lg border border-white/10 px-4 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold transition hover:brightness-110"
                >
                  <FiPlus />
                  Save as draft
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

function StatCard({
  label,
  value,
  detail,
  icon,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
  tone: "violet" | "green" | "pink";
}) {
  const toneStyles = {
    violet: "bg-violet-400/10 text-violet-200",
    green: "bg-emerald-400/10 text-emerald-200",
    pink: "bg-pink-400/10 text-pink-200",
  };

  return (
    <article className="rounded-2xl border border-white/[0.08] bg-[#100e17] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/45">{label}</p>
        <span
          className={`grid size-8 place-items-center rounded-lg ${toneStyles[tone]}`}
        >
          {icon}
        </span>
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-[11px] text-white/35">{detail}</p>
    </article>
  );
}
