import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNoteById } from "../../../../../lib/server-actions";
import NotePreview from "./NotePreview";

interface PreviewModalPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PreviewModalPage({
  params,
}: PreviewModalPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview id={id} />
    </HydrationBoundary>
  );
}
