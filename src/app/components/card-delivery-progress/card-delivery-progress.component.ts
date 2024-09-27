import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-card-delivery-progress',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './card-delivery-progress.component.html',
  styleUrl: './card-delivery-progress.component.scss'
})
export class CardDeliveryProgressComponent {
 @Input() dataSource: any;
 displayedColumns: string[] = ['nome', 'deliveryTotal', 'completedTotal'];
}
