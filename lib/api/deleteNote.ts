import { apiClient } from "./client";
import type { DeleteNoteResponse } from "./types";

export const deleteNote = async (id: string): Promise<DeleteNoteResponse> => {
  const response = await apiClient.delete<DeleteNoteResponse>(`/notes/${id}`);
  return response.data;
};
