import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
export const routerConfig: Routes = [
    {
        path: '',
        component:IntroComponent,
        title:"Delicious Eats"
    },
    {
        path: 'shop',
        component:MainComponent,
        title:"Shopping"
    },
    {
        path: 'card/:id',
        component:CardComponent,
        title:"Details Page"
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'cart'
    }
];

export default routerConfig



