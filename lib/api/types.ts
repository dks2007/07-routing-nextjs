import type { Note } from "../../types/note";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export type DeleteNoteResponse = Note;
