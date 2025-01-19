import Andro from "./Andro";

export default function Volana({
  num_volana,
  nom_volana,
  lohateny,
  andro,
  taona,
}) {
  return (
    <div className=" max-w-[300px] border-2 border-blue-400 rounded ">
      <div className="font-bold bg-blue-400 text-white h-10 flex justify-center items-center">
      {nom_volana}
      </div>
      <div className="border-b-2 p-2 border-blue-400 text-blue-400 font-bold text-center">
      {lohateny}
      </div>
      {andro.map(a=><Andro daty={a.Daty} teny_vakina={a.TenyVakina} taona={taona} volana={num_volana - 1} key={a.Daty+nom_volana}/>)}

    </div>
  );
}
