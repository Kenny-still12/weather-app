import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex flex-col items-center gap-3 py-8" role="status">
            <LoaderCircle className="size-8 animate-spin opacity-60" strokeWidth={1.5} />
            <p className="text-sm opacity-70">Loading weather...</p>
        </div>
    )
}
