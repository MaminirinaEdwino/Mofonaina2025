import { useState } from "react"
import Andro from "./Andro"
import { Mofonaina2025 } from "./liste_mofonaina/mofonaina2025"
import Vakiteny from "./vakiteny"
export default function MofonainaAnio() {
    const dateAnio = new Date()
    const [vakina, setVakina] = useState("none")
    return <div>
        <section className="max-w-[300px] mx-auto m-5 p-5 shadow-2xl rounded transition-all box-border hover:border hover:border-blue-500 " onClick={(e)=>(vakina == "none" ? setVakina("block") : setVakina("none"))} >
        <h1 className="font-bold  text-center text-3xl mb-5">Mofon'aina Anio</h1>
        <Andro daty={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].Daty } 
        teny_vakina={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].TenyVakina}/>
    </section>
    <section style= {{display : vakina}}>
        
        <Vakiteny Boky={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].TenyVakina.Boky} Toko={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].TenyVakina.Toko} a_1={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].TenyVakina.Andininy_debut} a_2={Mofonaina2025[`${dateAnio.getFullYear()}`][dateAnio.getMonth()].Andro[dateAnio.getDate() -1 ].TenyVakina.Andininy_fin}/>
    </section>
    </div>
}