import { SidebarItem } from "../SidebarItem";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div className="d-flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSidebar.map((item) => {
            return (
              <SidebarItem key={item.label} item={item} />
            )
          })}
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div className="p-6 w-full">
        <div className="flex justify-center">
          <Button variant="outline" className="w-full">
            Upgrade Plan
          </Button>
        </div>
      </div>
    </div >
  )
}
