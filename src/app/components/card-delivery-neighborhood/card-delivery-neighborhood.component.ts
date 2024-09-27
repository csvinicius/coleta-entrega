import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-card-delivery-neighborhood',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './card-delivery-neighborhood.component.html',
  styleUrl: './card-delivery-neighborhood.component.scss'
})
export class CardDeliveryNeighborhoodComponent {
  @Input() dataSource: any;

  displayedColumns: string[] = ['nome', 'deliveryTotal', 'completedTotal'];
}
