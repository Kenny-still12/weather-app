import ProjectLogo from "./ProjectLogo";
import { GithubIcon, LinkedinIcon } from "../utils/IconMapper.jsx";

export default function Footer() {

    return (
        <>
            <footer>
                <div className="flex justify-between">
                    <ProjectLogo
                    />

                    <nav >
                        <ul className="flex gap-2 justify-between">
                            <li className="hover:bg-slate-100 rounded-md p-2 transition font-semibold "> <a href="">About</a></li>
                            <li className="hover:bg-slate-100 rounded-md p-2 transition font-semibold "><a href="">Contact </a></li>
                            <li className="hover:bg-slate-100 rounded-md p-2 transition font-semibold "><a href="">Source </a></li>
                        </ul>
                    </nav>
                    <div className="flex gap-2">
                        <a
                            href=""
                            className="text-black hover:text-green-700 transition-colors" >
                            <GithubIcon
                                className="w-6 h-6"
                            />

                        </a>
                        <a
                            href=""
                            className="text-black hover:text-green-700 transition-colors"
                        >
                            <LinkedinIcon
                                className="w-6 h-6"
                            />
                        </a>
                    </div>
                </div>
                <div></div>
            </footer>
        </>
    )
}