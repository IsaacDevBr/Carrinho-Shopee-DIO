import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

//meu carrinho
const myCart = [];

//minha lista de favoritos
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("Xiaomi", 8599.99, 1);
const item2 = await createItem("chapa Eletrica", 399.49, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishList, item2);

await cartService.displayCart(myCart);

await cartService.deleteItem(myCart, item1.name);
await cartService.deleteItem(myCart, item2.name);


console.log("Shopee Cart total is: ")
await cartService.calculateTotal(myCart);



//console.log(item2.subtotal());
//font do felipão: FIRE CODE;
//fontligatures: TRUE;
