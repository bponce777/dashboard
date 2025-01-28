import { Company, Event } from "@prisma/client";

export type CompaniesChartsProps = {
  companies: Company[];
  events: Event[];
};