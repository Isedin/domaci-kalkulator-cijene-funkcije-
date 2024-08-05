document.getElementById("calculateButton").addEventListener("click", () => {
	const priceInput = document.getElementById("price").value;
	const cijena = parseFloat(priceInput);

	if (isNaN(cijena)) {
		alert("Molimo unesite validnu cijenu proizvoda.");
		return;
	}

	const pdvIznos = 0.2;
	const cijenaSaPdv = cijena + cijena * pdvIznos;

	document.getElementById(
		"result"
	).innerText = `Cijena sa pdv-om iznosi: ${cijenaSaPdv.toFixed(2)}€`;
});
