export interface ChatRequest {
  question: string;
  conversation_id?: string; // UUID as string
  stream?: boolean;
}

export interface SourceDocument {
  content: string;
  metadata: Record<string, any>;
  relevance_score?: number | null;
}

export interface ChatResponse {
  message_id: string;
  conversation_id: string;
  answer: string;
  sources: SourceDocument[];
  confidence?: number | null;
  timestamp: string;
  model_used: string;
  tokens_used?: number | null;
}

export interface ErrorResponse {
  error: string;
  message: string;
  detail?: string;
  timestamp: string;
}
