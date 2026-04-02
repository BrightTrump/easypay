export type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name?: string;
  value?: string;
  ref?: string;
  readonly?: boolean;
  required?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// export interface EmailInputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   readonly?: boolean;
// }
