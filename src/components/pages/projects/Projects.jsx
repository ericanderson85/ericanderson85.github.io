import ProjectCard from "./ProjectCard";

export default function Projects({ isDark }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className={`font-semibold text-3xl ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>
                Projects
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                <ProjectCard
                    img_path="board.png"
                    title="Chess Engine"
                    description="Chess engine with an ELO of approximately 2,000."
                    link="https://github.com/ericanderson85/chess/"
                    isDark={isDark}
                />

                <ProjectCard
                    img_path="security.jpg"
                    title="Home Security System"
                    description="Home security system hosted on Raspberry Pi."
                    link="https://github.com/ericanderson85/home-security/"
                    isDark={isDark}
                />

                <ProjectCard
                    img_path="neural-network.png"
                    title="Neural Network Library"
                    description="Multi-layer perceptron library built from scratch in Java."
                    link="https://github.com/ericanderson85/neural-network-library/"
                    isDark={isDark}
                />

                <ProjectCard
                    img_path="sudoku.png"
                    title="Speed Sudoku"
                    description="Online timed sudoku platform with an Elo system."
                    link="https://github.com/ericanderson85/neural-network-library/"
                    isDark={isDark}
                />

                <ProjectCard
                    img_path="colors.png"
                    title="Color Extractor"
                    description="Get a color pallete from an image."
                    link="https://github.com/ericanderson85/color-extractor/"
                    isDark={isDark}
                />

                <ProjectCard
                    img_path="puzzle.jpg"
                    title="Chess Puzzle Classifier"
                    description="Machine learning application to classify chess puzzles by tactical motif."
                    link="https://github.com/ericanderson85/chess-puzzle-classifier"
                    isDark={isDark}
                />

                <ProjectCard
                    img_path="recipes.jpg"
                    title="Recipe Generator"
                    description="Input ingredients, generate recipes that can be made."
                    link="https://github.com/ericanderson85/RecipeGenerator/"
                    isDark={isDark}
                />

                <ProjectCard
                    img_path="basketball-compare.png"
                    title="Basketball Compare"
                    description="Web application to compare the statistics of NBA players."
                    link="https://github.com/ericanderson85/Basketball-Compare/"
                    isDark={isDark}
                />
            </div>
        </div>
    );
}
