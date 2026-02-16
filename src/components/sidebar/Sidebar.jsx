import SolarSmileSquareBold from "../icons/SolarSmileSquareBold";
import SolarCodeSquareBold from "../icons/SolarCodeSquareBold";
import SolarChatSquare2Bold from "../icons/SolarChatSquare2Bold";
import SolarMentionSquareBold from "../icons/SolarMentionSquareBold";

export default function Sidebar({ active, onNavigate, isDark }) {
    const activeFormatting = isDark ? "gradient-dark text-neutral-200 shadow-md" : "gradient text-neutral-700 shadow-md";
    const hoverFormatting = isDark ? "hover-gradient-dark hover:shadow-md" : "hover-gradient hover:shadow-md";

    return (
        <div className="h-full w-48 flex flex-col items-center pt-2 gap-2">
            <div className={`text-xl font-extrabold cursor-default ${isDark ? 'text-neutral-100' : ''}`}>
                Eric Anderson
            </div>

            <nav className={`h-full w-full flex flex-col ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                <div className="w-full text-lg font-bold p-1">
                    <div
                        className={`cursor-pointer w-full flex gap-2 items-center py-1 px-2 rounded-lg ${hoverFormatting} ${active == "ABOUT" ? activeFormatting : ""}`}
                        onClick={() => onNavigate("about")}
                    >
                        <SolarSmileSquareBold className="h-5 w-fit " />
                        <span className="">About</span>
                    </div>
                </div>

                <div className="w-full text-lg font-bold p-1">
                    <div
                        className={`cursor-pointer w-full flex gap-2 items-center py-1 px-2 rounded-lg ${hoverFormatting} ${active == "EXPERIENCE" ? activeFormatting : ""}`}
                        onClick={() => onNavigate("experience")}
                    >
                        <SolarChatSquare2Bold className="h-5 w-fit " />
                        <span className="">Experience</span>
                    </div>
                </div>

                <div className="w-full text-lg font-bold p-1">
                    <div
                        className={`cursor-pointer w-full flex gap-2 items-center py-1 px-2 rounded-lg ${hoverFormatting} ${active == "PROJECTS" ? activeFormatting : ""}`}
                        onClick={() => onNavigate("projects")}
                    >
                        <SolarCodeSquareBold className="h-5 w-fit " />
                        <span className="">Projects</span>
                    </div>
                </div>

                <div className="w-full text-lg font-bold p-1">
                    <div
                        className={`cursor-pointer w-full flex gap-2 items-center py-1 px-2 rounded-lg ${hoverFormatting} ${active == "CONTACT" ? activeFormatting : ""}`}
                        onClick={() => onNavigate("contact")}
                    >
                        <SolarMentionSquareBold className="h-5 w-fit " />
                        <span className="">Contact</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}
