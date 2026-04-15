import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

interface NotesFilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}

export default function NotesFilterLayout({
  children,
  sidebar,
  modal,
}: NotesFilterLayoutProps) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
      {modal}
    </div>
  );
}
