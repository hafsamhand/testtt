import { useState } from "react";

function EditStagiaire(props) {
	const [nom, setNom] = useState(props.stagiaire.nom);
  const [prenom, setPrenom] = useState(props.stagiaire.prenom);
  const [filiere, setFiliere] = useState(props.stagiaire.filiere);

	
	function editStag(e) {
		let stg = {id:props.stagiaire.id, nom, prenom, filiere}
		props.onUpdateStg(e, stg)
	}
	return (
		<div>
			<form onSubmit={e => editStag(e)}>
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
      </form>
		</div>
	)
}

export default EditStagiaire;