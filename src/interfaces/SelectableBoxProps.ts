export interface SelectableBoxProps {
  label: string;
  categoriesSelected: string[];
  onToggle: (item: string) => void;
}
