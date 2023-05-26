export const tempUser = {
    image: "https://pbs.twimg.com/media/Fv4x0M5aEAEoRFc?format=jpg&name=large",
    username: "sussy",
    name: "Not Sus",
    bio: "help girl i dont wanna fail this subject!!!!!!! male | 69 | looking for a pardner to carry me",
    hrsPw: 69,
    grade: "HD",
    mbti: "ISTP",
    platform: "discord",
    tutes: [5, 10, 32],
    prefTute: [
      {
        index: 5,
        time: "Monday 11:00 - 13:00",
        location: "Brass Lab",
      },
      {
        index: 10,
        time: "Monday 11:00 - 13:00",
        location: "Flute Lab",
      },
      {
        index: 32,
        time: "Tuesday 11:00 - 13:00",
        location: "Strings Lab",
      }
    ],
    availability: new Map([[21, 1], [16, 1], [28, 1], [1, 1], [0, 1]]),
  }


export const tempUser2 = {
  image: "",
  username: "peepeepoopoo",
  name: "Hayden Smith",
  bio: "aiodhgjdahgfjskdfg sashjsdhjg aaaaaaa sdg",
  hrsPw: 33,
  grade: "HD",
  mbti: "ISTP",
  platform: "teams",
  prefTute: [
    {
      "day": "Tue",
      "time": {
          "start": "09:00",
          "end": "11:00"
      },
      "weeks": "1-10",
      "location": "Central Lecture Block 7 (K-E19-104)"
  },
  {
      "day": "Tue",
      "time": {
          "start": "11:00",
          "end": "13:00"
      },
      "weeks": "11",
      "location": "Central Lecture Block 7 (K-E19-104)"
  },
  ],
  availability: new Map()
}
  
export interface course {
  courseCode: string;
  name: string;
  school:string;
  classes: times[];
}

interface times {
  day: string;
  time: string;
  weeks: string;
  location: string;
}

// sample data from timetable-scraper github
export const sampleCourse = {
  "courseCode": "COMP1511",
  "name": "Programming Fundamentals",
  "school": "School of Computer Sci & Eng",
  "campus": "Sydney",
  "career": "Undergraduate",
  "termsOffered": [
      "T1",
      "T2",
      "T3"
  ],
  "censusDates": [
      "17-MAR-2019",
      "30-JUN-2019",
      "13-OCT-2019"
  ],
  "classes": [
  {
      "classID": 9596,
      "section": "1UGA",
      "term": "T1",
      "activity": "Lecture",
      "status": "Open",
      "courseEnrolment": {
          "enrolments": 339,
          "capacity": 497
      },
      "termDates": {
          "start": "18/02/2019",
          "end": "19/05/2019"
      },
      "mode": "In Person",
      "times": [
          {
              "day": "Tue",
              "time": {
                  "start": "09:00",
                  "end": "11:00"
              },
              "weeks": "1-10",
              "location": "Central Lecture Block 7 (K-E19-104)"
          },
          {
              "day": "Tue",
              "time": {
                  "start": "11:00",
                  "end": "13:00"
              },
              "weeks": "11",
              "location": "Central Lecture Block 7 (K-E19-104)"
          },
          {
              "day": "Thu",
              "time": {
                  "start": "11:00",
                  "end": "13:00"
              },
              "weeks": "1-9",
              "location": "Central Lecture Block 7 (K-E19-104)"
          }
      ],
  }]
}

export interface tuteTime {
  day: string;
  time: string;
  location: string;
}