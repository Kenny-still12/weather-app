import { Sun } from "lucide-react"
export default function ProjectLogo() {
    return (
        <div className="flex items-center  gap-1">
            <Sun
                size={25}
                className="text-sky-500"
            />
            <h1 className="text-2xl text-black tracking-tight font-medium">Weathers<span className="text-slate-800 not-italic px-0.5">4</span>You</h1>
        </div>
    )
}