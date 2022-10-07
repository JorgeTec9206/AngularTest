import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MovientosService } from '../../services/movientos.service';
import { InfoApi } from '../models/infoapi.model';


@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})

export class MovimientosComponent implements OnInit {

  public productos: any = [];
  public x:any = [];

  displayedColumns: string[] = ['codigo', 'name', 'public_price', 'quantity'];
  dataSource = new MatTableDataSource<InfoApi>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 

  constructor(private producs: MovientosService) { }

  ngOnInit(): void {
    
    console.log(sessionStorage.getItem('producto'));
    

    this.producs.getProductos().subscribe((res: any) => {
      this.productos = res.productos;
      console.log(this.productos);
      this.dataSource.data = this.productos;
    });
  }

  addnombre(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
  }

  hola(item:any){
    
    this.x.push(item);
    let y:any;
    y = JSON.stringify(this.x);
    sessionStorage.setItem('producto',y);
    console.log(sessionStorage.getItem('producto'));
    
  }
  acept(){
    let x = document.getElementById('nombre') as HTMLInputElement;
    localStorage.setItem('nombre',x.value);
    console.log(localStorage.getItem('nombre'));
    alert('EL nombre ingresado esta en localStorage y es: '+ localStorage.getItem('nombre'));
  }

}

