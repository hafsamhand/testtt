function StagiaireCard(props) {
    // function supprimerStg() {
    //     props.onDeleteStg(props.stagiaire.id)
    // }
    return (
        <div>
            <td> {props.stagiaire.nom}</td>
            <td> {props.stagiaire.prenom}</td>
            <td> {props.stagiaire.filiere}</td>
            {/* <td>
                <button onClick={supprimerStg}>Supprimer</button>
            </td> */}
            -- ---- 
        </div>
    )
}

export default StagiaireCard;