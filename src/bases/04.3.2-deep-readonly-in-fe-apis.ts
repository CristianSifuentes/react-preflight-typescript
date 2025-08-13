// Props of a React component with readonly arrays
type Tag = { id: string; label: string };

type TagListProps = {
  tags: readonly Tag[];               // ✅ covariante, no mutable
  onRemove?: (id: Tag["id"]) => void;
};

function TagList({ tags, onRemove }: TagListProps) {
  return (
    // JSX imaginary…
    null
  );
}

// Side of use
const tags = [{ id: "t1", label: "TS" }] as const; // readonly

// <TagList tags={tags} /> // ✅ sure



// Conceptual note: ReadonlyArray<T> is covariant and safer to expose; T[] (mutable) can introduce unsoundness when subtyped. In libs and components: accept readonly T[], create copies if you need to mutate.