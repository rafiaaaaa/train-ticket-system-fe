import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex justify-center items-center bg-white">
      <Loader2 className="animate-spin w-8 h-8" />
    </div>
  );
}
