
interface TBodyProps extends React.HTMLAttributes<HTMLElement> {}

export function TBody({children}: TBodyProps) {
  return (
    <tbody>
      { children }
    </tbody>
  );
}
