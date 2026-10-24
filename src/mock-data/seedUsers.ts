// src/mock-data/seedUsers.ts
import type { User } from '../types/auth';

export const SEED_USERS: User[] = [
  {
    id: 'usr-admin-01',
    username: 'director',
    fullName: 'Dr. Girma Tadesse',
    email: 'director@arbaminch.edu.et',
    role: 'ADMIN',
    title: 'School Director / Administrator',
    phone: '+251 91 123 4567',
  },
  {
    id: 'usr-sec-01',
    username: 'secretary',
    fullName: 'Chaltu Bekele',
    email: 'registrar@arbaminch.edu.et',
    role: 'SECRETARY',
    title: 'Head Registrar & Secretary',
    phone: '+251 92 234 5678',
  },
  {
    id: 'usr-cash-01',
    username: 'cashier',
    fullName: 'Yohannes Wolde',
    email: 'finance@arbaminch.edu.et',
    role: 'CASHIER',
    title: 'School Bursar & Cashier',
    phone: '+251 93 345 6789',
  },
  {
    id: 'usr-teach-01',
    username: 'teacher',
    fullName: 'Alemayehu Mengistu',
    email: 'alemayehu.m@arbaminch.edu.et',
    role: 'TEACHER',
    title: 'Senior Mathematics Teacher',
    phone: '+251 94 456 7890',
  },
];