import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-card-delivery-failed',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './card-delivery-failed.component.html',
  styleUrl: './card-delivery-failed.component.scss'
})
export class CardDeliveryFailedComponent {
  @Input() dataSource: any;

  displayedColumns: string[] = ['nome', 'failedTotal'];

}
