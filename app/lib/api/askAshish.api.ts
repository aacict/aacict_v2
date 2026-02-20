import { apiClient } from "../api/client";
import {
  ChatRequest,
  ChatResponse,
} from "../types/chatobject.types";

export const askChat = async (payload: ChatRequest): Promise<ChatResponse> => {
  const { data } = await apiClient.post<ChatResponse>("/ask-ashish", payload);
  return data;
};
