import { useMutation } from "@tanstack/react-query";
import { ChatRequest, ChatResponse } from "../../types/chatobject.types";
import { apiClient } from "../../api/client";

export const useChat = () => {
  return useMutation<ChatResponse, unknown, ChatRequest>({
    mutationFn: async (payload: ChatRequest) => {
      console.log("Sending chat request with payload:", payload);
      const { data } = await apiClient.post<ChatResponse>(
        "/ask-ashish",
        payload,
      );
      return data;
    },
    onError: (error) => {
      console.error("Chat API error:", error);
    },
  });
};
