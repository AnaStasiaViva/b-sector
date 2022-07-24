
interface TDataProps extends React.HTMLAttributes<HTMLElement> {
  variant?: string
}

export function TData({ children }: TDataProps) {
  return (
    <td >
      { children }
    </td>
  );
}
