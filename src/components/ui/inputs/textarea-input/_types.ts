export interface TextareaInputProps {
  label?: string;
  name?: string;
  value?: string;
  readonly?: boolean;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
