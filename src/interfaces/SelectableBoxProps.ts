export interface SelectableBoxProps {
  label: string;
  categorySelected: string;
  onToggle: (item: string) => void;
}
