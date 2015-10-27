$(function(){
		//a la soumission du formulaire
		//(sur l'evenement "submit" du form)
		$('form').on('submit', function(ev){
			ev.preventDefault()
			//recuperer les informations des champs du formulaire
			
			var formValues = $(this).serialize()
			//les envoyer au serveur
			$.ajax({
				url: 'reponse.php',
				//transmettre les donnees du formulaire
				//methode POST ou GET (equivalent method d'un form)
				method:'POST',
				data: formValues,
				//recuperer la reponse du serveur
				success:function(reponseServeur){
					//afficher cette reponse
					/*$('#commentaires').text(reponseServeur)*/
					$('<li>').html(reponseServeur).appendTo('#commentaires')
					//autre facon de le faire

					/*$('<li>' + reponseServeur + '</li>').appendTo('#commentaires')*/
				}

			})

		})

})