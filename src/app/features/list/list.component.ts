import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButton],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products: Product[] = [];

  productsServices = inject(ProductsService);
  router = inject(Router);

  ngOnInit(){
    this.productsServices.getAll().subscribe((products) => {
      this.products = products
    });
  }

  onEdit(product: Product){
    this.router.navigate(['/edit-product', product.id])
  }
}
