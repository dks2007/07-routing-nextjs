"use client";

import { useRouter } from "next/navigation";
import Modal from "../../../../../components/Modal/Modal";
import NotePreview from "../../../../../components/NotePreview/NotePreview";

interface NotePreviewModalPageProps {
  params: {
    id: string;
  };
}

export default function NotePreviewModalPage({
  params,
}: NotePreviewModalPageProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose}>
      <NotePreview id={params.id} onClose={handleClose} />
    </Modal>
  );
}
