import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { filter } from 'rxjs';
import { NoItemsComponent } from './components/no-items/no-items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data['products']);

  productsServices = inject(ProductsService);
  router = inject(Router);
  matDialog = inject(MatDialog);
  confirmationDialog = inject(ConfirmationDialogService);

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id])
  }

  onDelete(product: Product) {
    this.confirmationDialog.openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsServices.delete(product.id).subscribe(() => {
          this.productsServices.getAll().subscribe((products) => {
            this.products.set(products)
          });
        });
      });
  }
}

