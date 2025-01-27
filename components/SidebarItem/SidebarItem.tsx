import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";

export function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { label, icon: Icon, href } = item;

  return (
    <Link href={href}
      className={cn("flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center p-2 hover:bg-slate-300/20 rounded-lg cursor-pointer")}
    >
      <Icon strokeWidth={1} className="w-5 h-5" />
      <p>{label}</p>
    </Link>
  )
}
