
interface TBodyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: string
}

export function TBody({children}: TBodyProps) {
  return (
    <tbody >
      { children }
    </tbody>
  );
}
