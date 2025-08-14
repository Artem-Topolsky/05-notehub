import css from "./NoteListSkeleton.module.css";

export default function NoteListSkeleton({ count = 8 }) {
  return (
    <ul className={css.list}>
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className={css.listItemSkeleton}></li>
      ))}
    </ul>
  );
}
