import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";
import NotesClient from "../../Notes.client";
import { fetchNotes } from "../../../../lib/server-actions";
import { NOTE_TAGS, type NoteTag } from "../../../../types/note";

interface FilteredNotesPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

function isNoteTag(value: string): value is NoteTag {
  return NOTE_TAGS.includes(value as NoteTag);
}

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const { slug } = await params;
  const filter = slug[0];

  if (!filter) {
    notFound();
  }

  let tag: NoteTag | undefined;

  if (filter !== "all") {
    if (!isNoteTag(filter)) {
      notFound();
    }

    tag = filter;
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag ?? "all", "", 1],
    queryFn: () => fetchNotes(1, 12, "", tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
