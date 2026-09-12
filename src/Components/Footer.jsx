import ProjectLogo from "./ProjectLogo";
import { GithubIcon, LinkedinIcon } from "../utils/IconMapper.jsx";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="px-2 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-10">

                    <div className="flex justify-between items-center  sm:flex-row">
                        <ProjectLogo
                        />

                        <nav >
                            <ul className="flex gap-x-6  gap-y-2 flex-wrap text-sm">
                                <li className="hover:bg-slate-100 rounded-md p-2 transition font-semibold "> <a href="">About</a></li>
                                <li className="hover:bg-slate-100 rounded-md p-2 transition font-semibold "><a href="">Contact </a></li>
                                <li className="hover:bg-slate-100 rounded-md p-2 transition font-semibold "><a href="https://github.com/Kenny-still12/weather-app">Source </a></li>
                            </ul>
                        </nav>
                        <div className="flex gap-2">
                            <a
                                href="https://github.com/Kenny-still12"
                                className="text-black hover:text-green-700 transition-colors" >
                                <GithubIcon
                                    className="w-6 h-6"
                                />

                            </a>
                            <a
                                href="https://www.linkedin.com/in/kenneth-sonoda-010187365/"
                                className="text-black hover:text-green-700 transition-colors"
                            >
                                <LinkedinIcon
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
                        <p>© {year} Weather4You. Built by Kenneth Sonoda.</p>
                        <p>Built with React &amp; Tailwind CSS · Powered by OpenWeather API </p>
                    </div>
                </div>
            </footer>
        </>
    )
}