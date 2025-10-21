export default function Contact() {
    return (
        <div className="flex items-center flex-col gap-4">
            <span className="font-semibold text-3xl text-neutral-900">
                Contact
            </span>
            <div className="mx-auto max-w-2xl p-6 bg-gradient-to-br from-white via-neutral-100 to-neutral-200/80 backdrop-blur-md border border-white/60 rounded-xl flex flex-col items-center text-center gap-4 shadow-xl">

                <p className="text-neutral-700">
                    Feel free to reach out or connect with me:
                </p>
                <div className="flex flex-col gap-2 text-neutral-700">
                    <a
                        href="mailto:anderson.eric.christopher@gmail.com"
                        className="hover:text-neutral-900 underline underline-offset-2"
                    >
                        anderson.eric.christopher@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/eric-c-and/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 underline underline-offset-2"
                    >
                        https://www.linkedin.com/in/eric-c-and/
                    </a>
                    <a
                        href="https://github.com/ericanderson85/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 underline underline-offset-2"
                    >
                        https://github.com/ericanderson85/
                    </a>
                </div>
            </div>
        </div>

    );
}
