export interface SelectableBoxProps {
  label: string;
  selectedCategory: string;
  onToggle: (item: string) => void;
}
