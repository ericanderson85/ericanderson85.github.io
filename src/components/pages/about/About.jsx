export default function About({ isDark }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className={`font-semibold text-3xl ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>
                About Me
            </span>
            <div className={`mx-auto max-w-2xl p-6 ${isDark ? 'gradient-dark' : 'gradient'} rounded-xl flex flex-col items-center text-center gap-4 shadow-xl`}>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    I'm a Computer Science student at the University of Massachusetts Boston
                    with a passion for software engineering and applied artificial intelligence.
                </p>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    I've interned at organizations such as Walmart Global Tech and Quintess AI,
                    where I built AI-powered systems using large language models.
                </p>
                <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    My experience spans full-stack development, backend engineering, and
                    applied research — from neural network libraries to intelligent gameplay
                    systems. I'm motivated by solving complex problems and creating
                    technologies that connect cutting edge technology with real-world impact.
                </p>
            </div>
        </div>
    );
}
