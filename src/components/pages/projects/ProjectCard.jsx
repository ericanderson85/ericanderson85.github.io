import SolarRoundArrowRightBold from "../../icons/SolarRoundArrowRightBold";

export default function ProjectCard({ img_path, title, description, link, isDark }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className={`group h-fit w-fit p-3 ${isDark ? 'gradient-dark' : 'gradient'} rounded-xl flex flex-col items-center shadow-xl hover:shadow-2xl transition-shadow`}>
                <img
                    className={`w-48 aspect-square object-cover rounded-xl ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`}
                    src={img_path}
                    alt={title}
                />
                <div className="h-10 flex items-center">
                    <span className={`font-semibold ${isDark ? 'text-neutral-100' : ''}`}>{title}</span>
                </div>
                <div className={`w-48 h-12 text-center text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {description}
                </div>
                <div className="w-full flex justify-end items-center">
                    <SolarRoundArrowRightBold className={`${isDark ? 'text-neutral-400 group-hover:text-neutral-200' : 'text-neutral-500 group-hover:text-neutral-800'} w-6 h-fit`} />
                </div>
            </div>
        </a>
    );
}
