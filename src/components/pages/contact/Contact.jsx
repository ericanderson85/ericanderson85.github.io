export default function Contact({ isDark }) {
    return (
        <div className="flex items-center flex-col gap-4">
            <span className={`font-semibold text-3xl ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>
                Contact
            </span>
            <div className={`mx-auto max-w-2xl p-6 ${isDark ? 'gradient-dark' : 'gradient'} rounded-xl flex flex-col items-center text-center gap-4 shadow-xl`}>

                <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    Feel free to reach out or connect with me:
                </p>
                <div className={`flex flex-col gap-2 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <a
                        href="mailto:anderson.eric.christopher@gmail.com"
                        className={isDark ? 'hover:text-neutral-100 underline underline-offset-2' : 'hover:text-neutral-900 underline underline-offset-2'}
                    >
                        anderson.eric.christopher@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/eric-c-and/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isDark ? 'hover:text-neutral-100 underline underline-offset-2' : 'hover:text-neutral-900 underline underline-offset-2'}
                    >
                        https://www.linkedin.com/in/eric-c-and/
                    </a>
                    <a
                        href="https://github.com/ericanderson85/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isDark ? 'hover:text-neutral-100 underline underline-offset-2' : 'hover:text-neutral-900 underline underline-offset-2'}
                    >
                        https://github.com/ericanderson85/
                    </a>
                </div>
            </div>
        </div>

    );
}
