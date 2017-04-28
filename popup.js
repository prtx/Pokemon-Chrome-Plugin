document.getElementById("pokemon_name").addEventListener("input", showPokemon);
document.getElementById("show").addEventListener("click", showPokemon);

function showPokemon() {
	var pokemon = document.getElementById("pokemon_name").value;
	var img = '<img alt="" src="http://img.pokemondb.net/artwork/'+pokemon.toLowerCase()+'.jpg" onerror="this.style.display=\'none\'"/>'
	document.getElementById("pic").innerHTML = img;
}

document.addEventListener("DOMContentLoaded", function(event) {
   document.querySelectorAll('img').forEach(function(img){
  	img.onerror = function(){this.style.display='none';};
   })
});