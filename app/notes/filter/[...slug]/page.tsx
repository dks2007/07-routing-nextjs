import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "../../../../lib/server-actions";
import NotesClient from "./Notes.client";

interface FilteredNotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const { slug } = await params;
  const tagFromUrl = slug?.[0] ?? "all";
  const selectedTag =
    tagFromUrl === "all" ? undefined : decodeURIComponent(tagFromUrl);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1, selectedTag ?? "all"],
    queryFn: () => fetchNotes(1, 12, "", selectedTag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialTag={selectedTag} />
    </HydrationBoundary>
  );
}
