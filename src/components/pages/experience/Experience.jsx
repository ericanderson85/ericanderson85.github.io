import Timeline from "./Timeline";

export default function Experience({ isDark }) {
    const items = [
        {
            date: "2023-09",
            institution: "University of Massachusetts Boston",
            label: "Computer Science and Mathematics Student",
            description: "Began studying Computer Science and Mathematics.",
        },
        {
            date: "2023-12",
            institution: "NECI",
            label: "Information Technology Intern",
            description:
                "Supported IT operations during an office relocation.",
        },
        {
            date: "2024-02",
            institution: "SciQuel",
            label: "Software Engineer Intern",
            description:
                "Built full-stack features with React and Node.js, contributing to a non-profit education platform.",
        },
        {
            date: "2024-09",
            institution: "UMass Boston",
            label: "Machine Learning Research Intern",
            description:
                "Explored out-of-distribution detection using graph neural networks and large language models.",
        },
        {
            date: "2025-06",
            institution: "Walmart Global Tech",
            label: "Software Engineer II Intern",
            description:
                "Developed an AI assistant to streamline data analysis workflows.",
        },
        {
            date: "2025-09",
            institution: "Quintess AI",
            label: "Software Engineer Intern",
            description:
                "Building voice AI agents for industrial maintenance software.",
        },
    ];

    return (
        <div className="flex flex-col items-center gap-4">
            <span className={`font-semibold text-3xl ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>
                Experience
            </span>
            <div className={`p-6 ${isDark ? 'gradient-dark' : 'gradient'} rounded-xl shadow-xl`}>
                <Timeline
                    items={items}
                    isDark={isDark}
                />
            </div>
        </div>
    );
}
