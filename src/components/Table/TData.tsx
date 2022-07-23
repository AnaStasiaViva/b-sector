
interface TDataProps extends React.HTMLAttributes<HTMLElement> {}

export function TData({ children }: TDataProps) {
  return (
    <td>
      { children }
    </td>
  );
}
