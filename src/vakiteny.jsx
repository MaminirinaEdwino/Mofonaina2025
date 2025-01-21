import {Baiboly} from "./baiboly"
export default function Vakiteny({Boky, Toko, a_1, a_2}) {

	let liste = []
	var b = ""
	switch (Boky) {
		case "Sal": b = "Sal"
			break;
		case "Dan": b = "Dan"
			break;
		case "Deo": b = "Deo"
			break;
		case "Eks": b = "Eks"
			break;
		case "Est": b = "Est"
			break;
		case "Eze": b = "Eze"
			break;
		case "Ezr": b = "Ezr"
			break;
		case "Fit": b = "Fit"
			break;
		case "Gen": b = "Gen"
			break;
		case "Hab": b = "Hab"
			break;
		case "Hag": b = "Hag"
			break;
		case "Hos": b = "Hos"
			break;
		case "Isa": b = "Isa"
			break;
		case "Jer": b = "Jer"
			break;
		case "Job": b = "Job"
			break;
		case "Joe": b = "Joe"
			break;
		case "Jon": b = "Jon"
			break;
		case "Jos": b = "Jos"
			break;
		case "Lio": b = "Lio"
			break;
		case "Mal": b = "Mal"
			break;
		case "Mik": b = "Mik"
			break;
		case "1 Mpa": b = "1 Mpa"
			break;
		case "2 Mpa": b = "2 Mpa"
			break;
		case "Mpi": b = "Mpi"
			break;
		case "Mpits": b = "Mpits"
			break;
		case "Nah": b = "Nah"
			break;
		case "Neh": b = "Neh"
			break;
		case "Nom": b = "Nom"
			break;
		case "Oba": b = "Oba"
			break;
		case "Oha": b = "Oha"
			break;
		case "Rot": b = "Rot"
			break;
		case "1 Sam": b = "1 Sam"
			break;
		case "2 Sam": b = "2 Sam"
			break;
		case "1 Tan": b = "1 Tan"
			break;
		case "2 Tan": b = "2 Tan"
			break;
		case "Ton": b = "Ton"
			break;
		case "Zak": b = "Zak"
			break;
		case "Zef": b = "Zef"
			break;
		case "1 Jao": b = "1 Jao"
			break;
		case "2 Jao": b = "2 Jao"
			break;
		case "1 Pet": b = "1 Pet"
			break;
		case "2 Pet": b = "2 Pet"
			break;
		case "1 Tes": b = "1 Tes"
			break;
		case "2 Tes": b = "2 Tes"
			break;
		case "1 Tim": b = "1 Tim"
			break;
		case "2 Tim": b = "2 Tim"
			break;
		case "1 Kor": b = "1 Kor"
			break;
		case "2 Kor": b = "2 Kor"
			break;
		case "3 Jao": b = "3 Jao"
			break;
		case "Apo": b = "Apo"
			break;
		case "Asa": b = "Asa"
			break;
		case "Efe": b = "Efe"
			break;
		case "Fil": b = "Fil"
			break;
		case "File": b = "File"
			break;
		case "Gal": b = "Gal"
			break;
		case "Heb": b = "Heb"
			break;
		case "Jak": b = "Jak"
			break;
		case "Jao": b = "Jao"
			break;
		case "Jod": b = "Jod"
			break;
		case "Kol": b = "Kol"
			break;
		case "Lev": b = "Lev"
			break;
		case "Mar": b = "Mar"
			break;
		case "Mat": b = "Mat"
			break;
		case "Rom": b = "Rom"
			break;
		case "Tit": b = "Tit"
			break;
		default:
			break;
	}
	for (let index = a_1; index <= a_2; index++) {
		liste.push(index)
	}

	return <div className="p-5 rounded  bg-gray-200 m-2  shadow-2xl "> 
		
		{
		liste.map(
		(l, i) =>< span key = {
			"boky" + i
		} > <span className="text-xs font-bold relative -top-1">{
			l
		}</span> {
			Baiboly [b][Toko][l]
		} </span>)
	} </div>
	


}
