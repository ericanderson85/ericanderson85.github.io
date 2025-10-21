export default function About() {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="font-semibold text-3xl text-neutral-900">
                About Me
            </span>
            <div className="mx-auto max-w-2xl p-6 bg-gradient-to-br from-white via-neutral-100 to-neutral-200/80 backdrop-blur-md border border-white/60 rounded-xl flex flex-col items-center text-center gap-4 shadow-xl">
                <p className="text-neutral-700">
                    I'm a Computer Science student at the University of Massachusetts Boston
                    with a passion for software engineering and applied artificial intelligence.
                </p>
                <p className="text-neutral-700">
                    I've interned at organizations such as Walmart Global Tech and Quintess AI,
                    where I built AI-powered systems using large language models.
                </p>
                <p className="text-neutral-700">
                    My experience spans full-stack development, backend engineering, and
                    applied research — from neural network libraries to intelligent gameplay
                    systems. I'm motivated by solving complex problems and creating
                    technologies that connect cutting edge technology with real-world impact.
                </p>
            </div>
        </div>
    );
}
