import LiveClock from "../utils/LiveClock.jsx"

import ProjectLogo from "./ProjectLogo.jsx"
export default function Header() {
    return (
        <>
            <header className="flex justify-between items-center py-2.5 px-2">
                <ProjectLogo />

                <LiveClock />
            </header >
        </>
    )
}