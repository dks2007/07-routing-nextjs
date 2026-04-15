import type { NoteTag } from "../../types/note";
import { apiClient } from "./client";
import type { FetchNotesResponse } from "./types";

export const fetchNotes = async (
  page: number = 1,
  perPage: number = 12,
  search: string = "",
  tag?: NoteTag,
): Promise<FetchNotesResponse> => {
  const params: {
    page: number;
    perPage: number;
    search?: string;
    tag?: NoteTag;
  } = {
    page,
    perPage,
  };

  if (search) {
    params.search = search;
  }

  if (tag) {
    params.tag = tag;
  }

  const response = await apiClient.get<FetchNotesResponse>("/notes", {
    params,
  });
  return response.data;
};
