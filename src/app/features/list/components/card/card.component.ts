import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})


export class CardComponent {

  product = input.required<Product>();

  @Output() edit = new EventEmitter();

  productTitle = computed(() => this.product().title)

  onEdit(){
    this.edit.emit()
  }
}
