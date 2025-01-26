import { CustomIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";

export function CardSummary(props: CardSummaryProps) {
  const { icon: Icon, total, average, title, tooltipText } = props;
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition-none">
      <div className="flex justify-between">
        <CustomIcon icon={Icon} />
        {title}
      </div>
    </div>
  )
}
