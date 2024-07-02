import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product){

    this.productService.post(product)
    .subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok');
      this.router.navigateByUrl('/').catch(console.log)
    });
  }
}
