import type { Note } from "../../types/note";
import { apiClient } from "./client";

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await apiClient.get<Note>(`/notes/${id}`);
  return response.data;
};
