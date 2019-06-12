import { NgModule } from "@angular/core";
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from './cartSummary.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cartDetail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ModelModule, BrowserModule, RouterModule, FormsModule], 
    declarations: [StoreComponent, CartSummaryComponent, CheckoutComponent, CartDetailComponent], 
    exports: [StoreComponent, CartSummaryComponent, CheckoutComponent, CartDetailComponent]
})
export class StoreModule { }