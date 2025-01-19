export default function Andro({daty, teny_vakina, volana, taona}) {
    const d = new Date()
    d.setDate(daty-1)
    d.setMonth(volana)
    d.setFullYear(taona)
    return <article className={"p-1 flex "+(d.getDay() == 6 && "bg-blue-400 font-bold")}>      
        <div className="w-[15%] px-1 flex justify-end font-bold">{daty}</div>
        <div className="w-[50%]  text-center">{teny_vakina.Boky} {teny_vakina.Toko}</div>
        <div className="w-[35%]  justify-center flex"> {teny_vakina.Andininy_debut} - {teny_vakina.Andininy_fin}</div>
    </article>
}

