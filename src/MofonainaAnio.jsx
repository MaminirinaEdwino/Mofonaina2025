import Andro from "./Andro"
import { Mofonaina2025 } from "./liste_mofonaina/mofonaina2025"
export default function MofonainaAnio() {
    const dateAnio = new Date()
    return <section className="max-w-[300px] mx-auto m-5 p-5 shadow-2xl rounded ">
        <h1 className="font-bold  text-center text-3xl mb-5">Mofon'aina Anio</h1>
        <Andro daty={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].Daty } 
        teny_vakina={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].TenyVakina}/>
    </section>
}