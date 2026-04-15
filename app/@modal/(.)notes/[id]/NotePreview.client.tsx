"use client";

import { useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal";
import NotePreview from "../../../../components/NotePreview/NotePreview";

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({ id }: NotePreviewClientProps) {
  const router = useRouter();

  if (!id) {
    return null;
  }

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose}>
      <NotePreview id={id} onClose={handleClose} />
    </Modal>
  );
}
