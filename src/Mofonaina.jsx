
import { Mofonaina2025 } from "./liste_mofonaina/mofonaina2025"
import Volana from "./Volana"

export default function Mofonaina() {
    const anne = new Date().getFullYear()

    return <section className="flex flex-wrap w-[95%]  rounded mx-auto p-5 shadow-2xl justify-around gap-10">
        
        {Mofonaina2025[`${anne}`].map(m=><Volana num_volana={m.N_Volana} nom_volana={m.Volana} lohateny={m.Lohateny} andro={m.Andro} taona={m.Taona} key={m.Volana}/>)} 
        
    </section>
}