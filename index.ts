// Shared TypeScript types used across the Campus Connect app.

export interface Student {
  name: string;
  department: string;
  year: string;
  email: string;
  studentId: string;
  avatar: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  faculty: string;
  room: string;
  time: string;
  day: string;
  color: string;
}

export type AssignmentStatus = 'Pending' | 'Completed';

export interface Assignment {
  id: string;
  subject: string;
  title: string;
  dueDate: string;
  status: AssignmentStatus;
}

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  color: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  color: string;
  screen: string;
}

export interface Notice {
  id: string;
  title: string;
  body: string;
  date: string;
  urgent: boolean;
}
