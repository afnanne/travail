$(function(){

		$('button').click(function(){
			//on previent l'utilisateur que le clic est pris en compre
			//en affichant..en attente d'une reponse..."sur le boutton"

			var jBouton = $(this)
			var temps = setTimeout(function()
			{

			jBouton.text("...en attente d'une reponse...")
			}, 100)
			//on envoie une requete au serveur

			$.ajax({
				//on interroge le serveur sur reponse.php
				url:"reponse.php",
				//si la reponse ok
				success: function(reponseServeur){
					$('#reponse').text(reponseServeur)
					$('#erreur').hide()
				},
				//s'il y a une erreur
				error: function(){
					$('#erreur').text("On a un probleme")
					.show()
				},
				complete:function(){
					//on reinitialise le text du bouton
					jBouton.text('bonjour')
					//pour les cas ou le srveur repond plus vite que 100ms
					//plus besoin de changer le texte du bouton avec "..en attente d'une reponse.."
					//pour ca, on annule le time-out 
					clearTimeout(temps)
				}
			})	

		})

})