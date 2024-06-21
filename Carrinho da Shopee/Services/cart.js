// quais as funções do meu carrinho? 


//CASOS DE USO

=> ✅️adicionar item no carrinho

async function addItem (userCart, item) {
	userCart.push(item);
}

//=> ✅️calcular o valor total

async function calculateTotal (useCart) {
	const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
	console.log(result);
}

//=> ✅️deletar item do carrinho

async function deleteItem (userCart, name) {
	const index = userCart.findIndex((item) => item.name === name);
	
	if (index !== -1) {
		userCart.splice(index, 1);
	}
}

//=> ✅️remover item do carrinho

async function removeItem (userCart, index) {
	
}


//=> ✅️remover item do carrinho - diminui um item

async function removeItem (userCart, item) {

//1. Encontrar o indicedo do item dinamicamente
	const foundIndex = userCart.findIndex((product) => product.name === item.name);

//2. Caso não encontre o item
	if (foundIndex == -1) {
		console.log("item não enconrado");
		return;
	}
	
//3. item > 1 subtrair um item, item = 1 deletar o item
	if (userCart[foundIndex].quantity > 1) {
		userCart[foundIndex].quantity -= 1;
		return;
	}
	
//4. caso item = 1 deletar o item
	if (userCart[foundIndex].quantity == 1) {
		userCart.splice(foundIndex, 1);
		return;
	}

}

// ✅️mostra o que tem dentro do carrinho do usuário

async function displayCart(userCart) {
	console.log("\nShopee Cart list:");
	userCart.forEach((item, index) => {
		console.log(`${index + 1} - ${item.name} - R$ ${item.price} | 
		${item.quantity}x | subtotal = ${item.subtotal()}`)
	})
}

export {
	addItem ,
	calculateTotal,
	deleteItem,
	removeItem
}


