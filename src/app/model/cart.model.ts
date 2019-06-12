import { Product } from './product.model';

export class CartLine {
    constructor(public product: Product, public quantity: number) { }

    get lineTotal() {
        return this.product.price * this.quantity; 
    }
}

export class Cart {
    public lines: CartLine[] = []; 
    public itemCount: number = 0; 
    public totalPrice: number = 0; 

    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id === product.id); 
        if (line != undefined) {
            line.quantity = quantity; 
        } else {
            this.lines.push(new CartLine(product, quantity)); 
        }
        this.recalculate(); 
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id === id);
        this.lines.splice(index, 1);
        this.recalculate();  
    }

    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id === product.id); 
        line.quantity = Number(quantity); 
        this.recalculate(); 
    }

    clear() {
        this.itemCount = 0; 
        this.totalPrice = 0; 
        this.lines = []; 
    }
    private recalculate() {
        this.itemCount = 0; 
        this.totalPrice = 0; 
        this.lines.forEach(line => {
            this.itemCount += line.quantity; 
            this.totalPrice += line.product.price * line.quantity; 
        })
    }
}