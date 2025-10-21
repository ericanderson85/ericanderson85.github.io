import SolarRoundArrowRightBold from "../../icons/SolarRoundArrowRightBold";

export default function ProjectCard({ img_path, title, description, link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className="group h-fit w-fit p-3 bg-gradient-to-br from-white via-neutral-100 to-neutral-200/80 backdrop-blur-md border border-white/60 rounded-xl flex flex-col items-center shadow-xl hover:shadow-2xl transition-shadow">
                <img
                    className="w-48 aspect-square object-cover rounded-xl bg-neutral-200"
                    src={img_path}
                    alt={title}
                />
                <div className="h-10 flex items-center">
                    <span className="font-semibold">{title}</span>
                </div>
                <div className="w-48 h-12 text-center text-sm text-neutral-700">
                    {description}
                </div>
                <div className="w-full flex justify-end items-center">
                    <SolarRoundArrowRightBold className="text-neutral-500 group-hover:text-neutral-800 w-6 h-fit" />
                </div>
            </div>
        </a>
    );
}
