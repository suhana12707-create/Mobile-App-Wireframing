// Static sample data used throughout the app.
// No backend is required — everything here is hard-coded for demonstration.

import type { Student, Course, Assignment, CampusEvent, Notice, QuickAction } from '@/types';

export const student: Student = {
  name: 'Aarav Sharma',
  department: 'Computer Science & Engineering',
  year: '3rd Year',
  email: 'aarav.sharma@campus.edu',
  studentId: 'CSE21-0487',
  avatar:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face',
};

export const courses: Course[] = [
  {
    id: '1',
    name: 'Data Structures & Algorithms',
    code: 'CSE 301',
    faculty: 'Dr. Priya Nair',
    room: 'Block A-204',
    time: '09:00 - 10:30',
    day: 'Mon, Wed, Fri',
    color: '#2563EB',
  },
  {
    id: '2',
    name: 'Database Management Systems',
    code: 'CSE 305',
    faculty: 'Prof. Rohan Mehta',
    room: 'Block B-110',
    time: '11:00 - 12:30',
    day: 'Mon, Wed, Fri',
    color: '#0EA5E9',
  },
  {
    id: '3',
    name: 'Operating Systems',
    code: 'CSE 310',
    faculty: 'Dr. Anjali Verma',
    room: 'Block A-301',
    time: '14:00 - 15:30',
    day: 'Tue, Thu',
    color: '#16A34A',
  },
  {
    id: '4',
    name: 'Computer Networks',
    code: 'CSE 312',
    faculty: 'Prof. Karan Singh',
    room: 'Block C-105',
    time: '09:00 - 10:30',
    day: 'Tue, Thu',
    color: '#F59E0B',
  },
  {
    id: '5',
    name: 'Software Engineering',
    code: 'CSE 315',
    faculty: 'Dr. Meera Kapoor',
    room: 'Block B-210',
    time: '16:00 - 17:30',
    day: 'Mon, Wed',
    color: '#8B5CF6',
  },
  {
    id: '6',
    name: 'Web Technologies Lab',
    code: 'CSE 318L',
    faculty: 'Prof. Siddharth Rao',
    room: 'Lab 3',
    time: '14:00 - 17:00',
    day: 'Fri',
    color: '#EC4899',
  },
];

export const assignments: Assignment[] = [
  {
    id: '1',
    subject: 'Data Structures & Algorithms',
    title: 'Implement Red-Black Tree with insert & delete',
    dueDate: 'Sep 02, 2026',
    status: 'Pending',
  },
  {
    id: '2',
    subject: 'Database Management Systems',
    title: 'ER Diagram for Library Management System',
    dueDate: 'Sep 05, 2026',
    status: 'Pending',
  },
  {
    id: '3',
    subject: 'Operating Systems',
    title: 'Case Study: Process Scheduling Algorithms',
    dueDate: 'Aug 25, 2026',
    status: 'Completed',
  },
  {
    id: '4',
    subject: 'Computer Networks',
    title: 'TCP vs UDP — Comparative Report',
    dueDate: 'Sep 08, 2026',
    status: 'Pending',
  },
  {
    id: '5',
    subject: 'Software Engineering',
    title: 'SRS Document for Campus Connect App',
    dueDate: 'Aug 20, 2026',
    status: 'Completed',
  },
  {
    id: '6',
    subject: 'Web Technologies Lab',
    title: 'Build a Responsive Portfolio Website',
    dueDate: 'Sep 10, 2026',
    status: 'Pending',
  },
];

export const events: CampusEvent[] = [
  {
    id: '1',
    title: 'TechFest 2026 — Code Sprint',
    date: 'Sep 12, 2026',
    time: '10:00 AM',
    location: 'Main Auditorium',
    category: 'Technical',
    color: '#2563EB',
  },
  {
    id: '2',
    title: 'Inter-College Football Championship',
    date: 'Sep 15, 2026',
    time: '04:00 PM',
    location: 'Sports Ground',
    category: 'Sports',
    color: '#16A34A',
  },
  {
    id: '3',
    title: 'AI & ML Guest Lecture by Dr. Rajeev Kumar',
    date: 'Sep 18, 2026',
    time: '11:00 AM',
    location: 'Seminar Hall 2',
    category: 'Academic',
    color: '#F59E0B',
  },
  {
    id: '4',
    title: 'Cultural Night — Rangmanch',
    date: 'Sep 22, 2026',
    time: '06:30 PM',
    location: 'Open Air Theatre',
    category: 'Cultural',
    color: '#EC4899',
  },
  {
    id: '5',
    title: 'Hackathon: Build for Bharat (24 hrs)',
    date: 'Sep 28, 2026',
    time: '09:00 AM',
    location: 'Innovation Lab',
    category: 'Technical',
    color: '#8B5CF6',
  },
];

export const notices: Notice[] = [
  {
    id: '1',
    title: 'Mid-Semester Exam Schedule Released',
    body: 'The mid-semester examination timetable is now available on the student portal. Please review your exam dates and venues.',
    date: 'Aug 27, 2026',
    urgent: true,
  },
  {
    id: '2',
    title: 'Library Timing Extended',
    body: 'The central library will remain open until 10:00 PM during exam weeks starting September 1st.',
    date: 'Aug 26, 2026',
    urgent: false,
  },
  {
    id: '3',
    title: 'Bus Route Update',
    body: 'Route 7 (East Campus) will follow a revised schedule from September 3rd. Check the transport section for details.',
    date: 'Aug 25, 2026',
    urgent: false,
  },
];

export const quickActions: QuickAction[] = [
  { id: '1', label: 'My Courses', icon: 'BookOpen', color: '#2563EB', screen: '/(tabs)/courses' },
  { id: '2', label: 'Assignments', icon: 'ClipboardList', color: '#F59E0B', screen: '/(tabs)/assignments' },
  { id: '3', label: 'Events', icon: 'CalendarDays', color: '#16A34A', screen: '/(tabs)/events' },
  { id: '4', label: 'Profile', icon: 'User', color: '#8B5CF6', screen: '/(tabs)/profile' },
];
