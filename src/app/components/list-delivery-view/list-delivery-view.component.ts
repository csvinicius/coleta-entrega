import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { AppService } from '../../app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-delivery-view',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  templateUrl: './list-delivery-view.component.html',
  styleUrl: './list-delivery-view.component.scss'
})
export class ListDeliveryViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataList: any = [];
  driverNamesList: string[];
  statusList: string[];
  selectedDriver: string = '';
  selectedStatus: string = '';

  dataSource: any
  displayedColumns: string[] = ['motorista', 'cliente_origem_bairro', 'cliente_destino_bairro', 'status_entrega'];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getDeliveries();
  }

  getDeliveries(): void {
    this.appService.get().subscribe((response: any) => {
      this.dataList = response;
      this.dataSource = new MatTableDataSource(this.dataList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getDriversNames();
      this.getStatus();
    });
  }

  getDriversNames(): string[] {
    this.driverNamesList = this.dataList.reduce((acc: any, item: any) => {
      const driverName = item.motorista.nome;
      if (!acc.includes(driverName)) {
        acc.push(driverName);
      }
      return acc;
    }, []);
    return this.driverNamesList;
  }

  getStatus(): string[] {
    this.statusList = this.dataList.reduce((acc: any, item: any) => {
      const status = item.status_entrega;
      if (!acc.includes(status)) {
        acc.push(status);
      }
      return acc;
    }, []);
    return this.statusList;
  }

  applyFilter(): void {
    let filteredData = this.dataList;

    if (this.selectedDriver) {
      filteredData = filteredData.filter((item: any) => item.motorista?.nome === this.selectedDriver);
    }

    if (this.selectedStatus) {
      filteredData = filteredData.filter((item: any) => item.status_entrega === this.selectedStatus);
    }

    this.dataSource = new MatTableDataSource(filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  clearFilters(): void {
    this.selectedDriver = '';
    this.selectedStatus = '';
    this.dataSource.data = new MatTableDataSource(this.dataList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
