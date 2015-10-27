$(function(){
		//a la soumission du formulaire
		//(sur l'evenement "submit" du form)
		$('form').on('submit', function(ev){
			ev.preventDefault()
			//recuperer les informations des champs du formulaire
			/*var prenomValue = $('[name=prenom]').val()
			var nomValue = $('[name=nom]').val()*/
			var formValues = $(this).serialize()
			//les envoyer au serveur
			$.ajax({
				url: 'reponse.php',
				//transmettre les donnees du formulaire
				/*data: {
					prenom: prenomValue,
					nomDeFamille: nomValue

				},*/
				data: formValues,
				//recuperer la reponse du serveur
				success:function(reponseServeur){
					//afficher cette reponse
					$('#reponse').text(reponseServeur)
				}
			})

		})

})