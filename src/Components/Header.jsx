import LiveClock from "../utils/LiveClock.jsx"
export default function Header() {
    return (
        <header className="flex w-full justify-between items-center py-2.5 px-2">
            <h1 className="text-2xl text-sky-500 tracking-tight italic font-medium">Weathers<span className="text-slate-800 not-italic px-0.5">4</span>You</h1>
            <LiveClock />
        </header>
    )
}