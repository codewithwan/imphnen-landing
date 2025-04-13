import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
            <div className="container py-8 md:py-12">
                {/* Footer content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 group">
                        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs transition-transform duration-300 group-hover:scale-110 rotate-[2deg] font-mono shadow-sm">
                            {`</>`}
                        </div>
                        <span className="font-bold -rotate-[2deg] font-mono group-hover:text-blue-600 transition-colors">IMPHNEN</span>
                    </div>
                    <p className="text-sm text-gray-500 text-center md:text-left font-mono rotate-[0.5deg] opacity-90">
                        &copy; {new Date().getFullYear()} IMPHNEN - Ingin Menjadi Programmer Handal Namun Enggan Ngoding
                    </p>
                    <div className="flex gap-4 font-mono">
                        <Link href="https://discord.gg/W4XyRAmPSD" className="text-gray-500 hover:text-blue-600 transition-colors relative group" target="_blank" rel="noopener noreferrer">
                            Discord()
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="https://www.facebook.com/groups/programmerhandal" className="text-gray-500 hover:text-blue-600 transition-colors relative group" target="_blank" rel="noopener noreferrer">
                            Facebook()
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="https://github.com/IMPHNEN" className="text-gray-500 hover:text-blue-600 transition-colors relative group">
                            GitHub()
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="https://www.instagram.com/imphnen.dev" className="text-gray-500 hover:text-blue-600 transition-colors relative group">
                            Instagram()
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
