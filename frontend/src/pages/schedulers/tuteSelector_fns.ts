import { tuteTime, course } from "./tempData";

// parses day of week string to number
export function dayNum (day:string){
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days.indexOf(day);
}

export const timeToIndex = (tuteTime: tuteTime) => {
    const day = dayNum(tuteTime.day);
    const time = parseInt(tuteTime.time.slice(0, 2));
    if (day == -1 || time < 8 || time > 23) {return -1;}
    return (5 * (time - 8) + day);
}

// temp (help girl)
export const getAllTutes = (courseCode:string) => {
    const arr = [14, 29, 16, 31, 18, 33, 20, 41, 45, 47, 66, 68]
    return arr;
    
}