import ProjectLogo from "./ProjectLogo";
import { GithubIcon, LinkedinIcon } from "../utils/IconMapper.jsx";

export default function Footer() {

    return (
        <>
            <footer>
                <div className="flex justify-between bg-amber-500">
                    <ProjectLogo />

                    <nav >
                        <ul className="flex gap-2 justify-between">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Source</li>
                        </ul>
                    </nav>
                    <div>
                        <a
                            href=""
                            className="text-black">
                            <GithubIcon
                                className="w-4 h-4"
                            />

                        </a>
                        <a
                            href=""
                            className="text-slate-500"
                        >
                            <LinkedinIcon
                                className="w-4 h-4"
                            />
                        </a>
                    </div>
                </div>
                <div></div>
            </footer>
        </>
    )
}