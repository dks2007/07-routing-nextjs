import type { CreateNoteRequest, Note } from "../../types/note";
import { apiClient } from "./client";

export const createNote = async (
  noteData: CreateNoteRequest,
): Promise<Note> => {
  const response = await apiClient.post<Note>("/notes", noteData);
  return response.data;
};
