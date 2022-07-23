import { TRow } from "./TRow";

interface THeadProps extends React.HTMLAttributes<HTMLElement> {}

export function THead({ children }: THeadProps) {
  return (
    <thead>
      <TRow>
        { children }
      </TRow>
    </thead>
  );
}
