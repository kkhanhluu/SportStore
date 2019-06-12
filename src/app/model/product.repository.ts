import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository {
    private products: Product[] = []; 
    private categories: string[] = []; 

    constructor(private dataSource: RestDataSource) {
        this.dataSource.getProducts().subscribe(products => {
            this.products = products; 
            this.categories = products.map(x => x.category).filter((c, index, array) => array.indexOf(c) === index).sort(); 
        })
    }

    getProducts(category : string = null): Product[] {
        if (category === null) {
            return this.products; 
        } else {
            return this.products.filter(p => p.category === category); 
        }
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id === id); 
    }

    getCategories(): string[] {
        return this.categories; 
    }

    saveProduct(product: Product) {
        if (product.id === null || product.id === 0 || product.id === undefined) {
            this.dataSource.saveProduct(product).subscribe(newProduct => {
                this.products.push(newProduct); 
            })
        } else {
            this.dataSource.updateProduct(product).subscribe(newProduct => {
                let index = this.products.findIndex(p => p.id === newProduct.id); 
                this.products.splice(index, 1, newProduct); 
            })
        }
    }

    deleteProduct(id: number) {
        this.dataSource.deleteProduct(id).subscribe(deletedProduct => {
            this.products.splice(this.products.findIndex(p => p.id === id), 1); 
        })
    }
}