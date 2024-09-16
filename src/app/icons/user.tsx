export function User({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-6 ${className}}"`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
    </svg>
  )
}
