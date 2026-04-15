"use client";

import { useParams, useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal";
import NotePreview from "../../../../components/NotePreview/NotePreview";

export default function NotePreviewModalPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  if (!params?.id) {
    return null;
  }

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose}>
      <NotePreview id={params.id} onClose={handleClose} />
    </Modal>
  );
}
