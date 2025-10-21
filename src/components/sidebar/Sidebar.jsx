import SolarSmileSquareBold from "../icons/SolarSmileSquareBold";
import SolarCodeSquareBold from "../icons/SolarCodeSquareBold";
import SolarChatSquare2Bold from "../icons/SolarChatSquare2Bold";
import SolarMentionSquareBold from "../icons/SolarMentionSquareBold";

export default function Sidebar({ active, onNavigate }) {
    const activeFormatting = "bg-gradient-to-br from-white via-neutral-100 to-neutral-200 outline-1 outline-neutral-200/50 text-neutral-700 shadow-md";
    const hoverFormatting = "hover:bg-gradient-to-br hover:from-white hover:via-neutral-100 hover:to-neutral-200 hover:outline-1 hover:outline-neutral-200/50 hover:shadow-md";

    return (
        <div className="h-full w-48 flex flex-col items-center pt-2 gap-2">
            <div className="text-xl font-extrabold cursor-default">
                Eric Anderson
            </div>

            <nav className="h-full w-full flex flex-col text-neutral-600">
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
