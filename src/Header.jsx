export default function Header() {
    const date = new Date()
    return <header className="text-xl font-bold shadow-2xl h-14 text-end flex items-center justify-between px-10">
        <span>Mofonaina {date.getFullYear()}</span>
    </header>
}