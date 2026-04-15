"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Modal from "../../../../../components/Modal/Modal";
import { fetchNoteById } from "../../../../../lib/server-actions";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
  id: string;
}

export default function NotePreview({ id }: NotePreviewProps) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose}>
      {isLoading && <p>Loading, please wait...</p>}
      {(error || !note) && !isLoading && <p>Something went wrong.</p>}
      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.tag}>{note.tag}</p>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>
              Created {new Date(note.createdAt).toLocaleDateString()}
            </p>
            <button className={css.backBtn} onClick={handleClose} type="button">
              Close
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
