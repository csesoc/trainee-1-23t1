import data from './data.json' assert {type: 'json'};
// i stole from https://github.com/csesoc/timetable-scraper lol
// data is from 2022 bc thats whats on there and i idk how to run the 2023 stuff without my laptop exploding

const load = JSON.parse(JSON.stringify(data));
const days = ["M", "T", "W", "H", "F"];
const addIndex = (section: string) => {
  const a = days.indexOf(section.slice(0, 1));
  const b = parseInt(section.slice(1, 3));
  return a + (5 * (b - 8));
}

/**
 * Returns class data for selected class
 */
export const getCourseData = (courseCode: string) => {
  // narrows down data to only tlbs belonging to classCode
  const t1:any = load.timetableData.T1.filter((course: { school: string | string[]; career: string | string[]; }) => course.school.includes("Computer Sci & Eng") && course.career.includes("Undergraduate"));
  const course:any = t1.find((x: { courseCode: string; }) => x.courseCode == courseCode);
  if (!course) {return [];}
  const courseTutes = course.classes.filter((x: { activity: string | string[]; }) => x.activity.includes("Tutorial"));
  const courseIndex = courseTutes.map((x: { section: string; }) => Object.assign(x, {index: addIndex(x.section)}));
  return courseIndex;
}

/**
 * Returns array of all comp courses for the term
 */
export const getCourses = () => {
 return load.timetableData.T1.filter((course: { school: string | string[]; career: string | string[]; }) => course.school.includes("Computer Sci & Eng") && course.career.includes("Undergraduate"));
}
