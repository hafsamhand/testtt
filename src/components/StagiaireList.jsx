import { useState } from "react";
import StagiaireCard from "./StagiaireCard";
import EditStagiaire from "./EditStagiaire";

function StagiaireList() {
  let sagiaireList = [
    {
      id: 1,
      nom: "El Morabet",
      prenom: "Aicha",
      filiere: "Dev",
    },
    {
      id: 2,
      nom: "El Khamlichi",
      prenom: "Zaid",
      filiere: "Dev",
    },
  ];

  const [stagiaires, setStagiaires] = useState(sagiaireList);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [filiere, setFiliere] = useState("");
  const [stag, setStag] = useState({});
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
	

  function addNewStag(event) {
		event.preventDefault()
		let idS = stagiaires.length + 1
		let stagiaire = {id: idS, nom, prenom, filiere}
		setStagiaires(stagiaires => [...stagiaires, stagiaire])
		setIsAdd(false)
		setNom("")
		setPrenom("")
		setFiliere("")
	}


	function suppStg(params) {
		setStagiaires(stagiaires => stagiaires.filter((stg) => stg.id !== params))
		
	}
	function updateStg(event, params) {
		event.preventDefault()
		
		setStagiaires(stagiaires => stagiaires.map((stg) => stg.id === params.id ? params : stg))
	setIsEdit(false)

	}
	function modifierStg(stg) {
		setStag(stg)
		setIsEdit(true)
		
	}



  return (
    <div>
      la liste des Stagiaires
      {!isAdd ? <button onClick={() => setIsAdd(true)}>Creer un nouveau stagaire</button> :
      <form onSubmit={e => addNewStag(e)}>
        <div>
          <label htmlFor="">Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Prenom</label>

          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Filiere</label>

          <input
            type="text"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
          />
        </div>

        <button type="submit">Enregistrer</button>
      </form>}
			{isEdit && <EditStagiaire stagiaire={stag} onUpdateStg={updateStg}/>}
			<table>
				<th>
					<td>Nom</td>
					<td>Prenom</td>
					<td>Filiere</td>
					<td>Action</td>
				</th>

      {stagiaires.map((stagiaire) => (
        <tr key={stagiaire.id}>
          <StagiaireCard stagiaire={stagiaire} onDeleteStg={suppStg} />
					<td>
						<button onClick={() => modifierStg(stagiaire)}>Modifier</button>
						<button onClick={() => suppStg(stagiaire.id)}>Supprimer</button>
					</td>
        </tr>
      ))}
			</table>
    </div>
  );
}

export default StagiaireList;
