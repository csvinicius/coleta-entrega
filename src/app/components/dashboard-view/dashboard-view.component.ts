import { Component, OnInit } from '@angular/core';
import { CardDeliveryProgressComponent } from "../card-delivery-progress/card-delivery-progress.component";
import { AppService } from '../../app.service';
import { CardDeliveryFailedComponent } from "../card-delivery-failed/card-delivery-failed.component";
import { CardDeliveryNeighborhoodComponent } from "../card-delivery-neighborhood/card-delivery-neighborhood.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [HeaderComponent, CardDeliveryProgressComponent, CardDeliveryFailedComponent, CardDeliveryNeighborhoodComponent],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss'
})
export class DashboardViewComponent implements OnInit {
  dataList: any;
  driversList: any;
  neighborhoodList: any;

  ngOnInit(): void {
    this.getDeliveries();
  }

  constructor(private appService: AppService) { }

  getDeliveries(): void {
    this.appService.get().subscribe((response: any) => {
      this.dataList = response;
      this.groupByDriver();
      this.groupByNeighborhood();
    });
  }

  groupByDriver(): void {
   this.driversList = this.dataList.reduce((acc: any, item: any) => {
      const driverName = item.motorista.nome;
      const deliveryStatus = item.status_entrega;

      let driverGroup = acc.find((driver: any) => driver.name === driverName);

      if (!driverGroup) {
        driverGroup = { name: driverName, deliveryTotal: 0, completedTotal: 0, failedTotal: 0 };
        acc.push(driverGroup);
      }
      
      if (deliveryStatus === 'ENTREGUE') {
        driverGroup.completedTotal += 1;
      }

      if (deliveryStatus === 'INSUCESSO') {
        driverGroup.failedTotal += 1;
      }

      driverGroup.deliveryTotal += 1;

      return acc;
    }, []);
  }

  groupByNeighborhood(): void {
    this.neighborhoodList = this.dataList.reduce((acc: any, item: any) => {
       const neighborhoodName = item.cliente_destino.bairro;
       const neighborhoodStatus = item.status_entrega;
 
       let neighborhoodGroup = acc.find((driver: any) => driver.name === neighborhoodName);
 
       if (!neighborhoodGroup) {
        neighborhoodGroup = { name: neighborhoodName, deliveryTotal: 0, completedTotal: 0 };
         acc.push(neighborhoodGroup);
       }
       
       if (neighborhoodStatus === 'ENTREGUE') {
        neighborhoodGroup.completedTotal += 1;
       }
 
       neighborhoodGroup.deliveryTotal += 1;
 
       return acc;
     }, []);
   }

}
