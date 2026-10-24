import type { GradeLevelType } from './academic';

export type FeeType =
  | 'Registration'
  | 'Tuition'
  | 'Exam'
  | 'Uniform'
  | 'Other';

export type InvoiceStatus = 'Paid' | 'Partially Paid' | 'Unpaid' | 'Overdue';

export type PaymentMethod =
  | 'Cash'
  | 'Commercial Bank of Ethiopia (CBE)'
  | 'Telebirr'
  | 'M-PESA'
  | 'Awash Bank';

export interface FeeStructure {
  id: string;
  academicYearId: string;
  gradeLevel: GradeLevelType;
  feeType: FeeType;
  amountETB: number;
  period: 'Annual' | 'Semester 1' | 'Semester 2' | 'Monthly';
  dueDate: string;
}

export interface FeeInvoice {
  id: string;
  invoiceNumber: string; // e.g. "INV-2017-0091"
  studentId: string;
  studentName: string;
  gradeLevel: GradeLevelType;
  section: string;
  feeType: FeeType;
  totalAmountETB: number;
  paidAmountETB: number;
  balanceETB: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
}

export interface FeePayment {
  id: string;
  receiptNumber: string; // e.g. "RCP-2017-1042"
  invoiceId: string;
  studentId: string;
  studentName: string;
  amountPaidETB: number;
  paymentMethod: PaymentMethod;
  referenceNumber?: string; // Telebirr / CBE Transaction ref
  paymentDate: string;
  cashierUserId: string;
  cashierName: string;
  notes?: string;
}