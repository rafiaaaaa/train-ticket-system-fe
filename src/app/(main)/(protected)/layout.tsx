import { getUserServer } from "@/api/getUserServer";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await getUserServer();
  console.log(res);
  if (!res) {
    redirect("/auth");
  }

  return <>{children}</>;
}
