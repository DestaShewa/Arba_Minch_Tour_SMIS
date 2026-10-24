export type SmsType = 'Absentee Alert' | 'Fee Reminder' | 'General Notice';
export type SmsStatus = 'Pending' | 'Sent' | 'Failed';

export interface SmsMessage {
  id: string;
  recipientName: string;
  recipientPhone: string;
  relatedStudentId?: string;
  relatedStudentName?: string;
  messageText: string;
  type: SmsType;
  status: SmsStatus;
  queuedAt: string;
  sentAt?: string;
  retryCount: number;
  costETB: number;
  failureReason?: string;
}