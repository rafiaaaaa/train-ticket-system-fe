import { getSchedule } from "@/features/schedule/api/getSchedule";
import SchedulePage from "@/features/schedule/components/SchedulePage";

export default async function Schedule({
  params,
}: {
  params: { scheduleId: string };
}) {
  const { scheduleId } = await params;
  const data = await getSchedule(scheduleId);
  return <SchedulePage data={data} />;
}
