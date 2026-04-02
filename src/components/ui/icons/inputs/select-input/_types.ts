export interface SelectInputProps {
  label?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  options?: (string | { label: string; value: string })[];
  readonly?: boolean;
  required?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}
