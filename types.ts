export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  model: string;
  issueDescription: string;
}

export enum DiagnosticStatus {
  Idle = 'idle',
  Analyzing = 'analyzing',
  Complete = 'complete',
  Error = 'error',
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}