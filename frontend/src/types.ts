export interface Course {
  code: string;
  classes: string[];
}

export interface Partner {
  id: string;
  course: string;
}

export interface RequestsUserData {
  name: string;
  id: string;
  handle: string;
  zid: string;
  photo: string;
  course: string;
}
