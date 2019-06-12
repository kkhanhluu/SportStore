import { Component } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
    selector: "store", 
    templateUrl: "store.component.html"
})
export class StoreComponent {
    public selectedCategory = null; 
    public productsPerpage = 4; 
    public selectedPage = 1; 

    constructor(private repository: ProductRepository, private cart: Cart) { }

    get products(): Product[] {
        let startProductIndex = (this.selectedPage - 1) * this.productsPerpage; 
        return this.repository.getProducts(this.selectedCategory).slice(startProductIndex, startProductIndex + this.productsPerpage); 
    }

    get categories(): string[] {
        return this.repository.getCategories(); 
    }

    changeCategory(newCategory ?: string) {
        this.selectedCategory = newCategory; 
    }

    changePage(newPage ?: number) {
        this.selectedPage = newPage;
    }

    changePageSize(pageSize: string) {
        if (pageSize.length > 0) {
            let newPageSize = Number(pageSize); 
            this.productsPerpage = newPageSize; 
        } 
    }

    addToCart(product: Product) {
        this.cart.addLine(product); 
    }
    
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerpage)).fill(0).map((value, index) => index + 1); 
    }
}