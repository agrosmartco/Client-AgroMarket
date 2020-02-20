import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { Selected } from 'src/app/models/selected';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fruveg',
  templateUrl: './fruveg.component.html',
  styleUrls: ['./fruveg.component.css']
})

export class FruvegComponent implements OnInit {

  public products: Products[];

  searchTerm: string;
  conversionDecryptOutput: string;
  user: string;
  logon: boolean;

  //Car
  rec = [];
  carList: any = [];
  closeResult: string;
  listshow: any = [];

  select: Selected = {

    descripcion: '',
    cantidad: 1,
    precio: 0,
    imagen: '',

  };

  Ptotal = 0;



  constructor(private productService: ProductsService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {

    this.getProducts();

    const auth = localStorage.getItem('Token')

    if (auth) {
      this.logon = true;
    }

  }

  getProducts() {

    this.productService.getProducts().subscribe(
      res => {

        this.products = res;

      },
      err => console.log(err)

    )

  }

  showModal(producto: any, modal) {

    this.select.cantidad = 1;
    this.select.descripcion = producto.description;
    this.select.precio = producto.price;
    this.select.imagen = producto.image;
    this.modalService.open(modal);

  }

  addCar(select: any, modal) {

    this.rec = JSON.parse(localStorage.getItem('allEntries'));

    if (this.rec == null) this.rec = [];

    var entry = {
      "desc": select.descripcion,
      "price": select.precio,
      "cant": select.cantidad
    };


    localStorage.setItem("entry", JSON.stringify(entry));

    this.rec.push(entry);


    localStorage.setItem("allEntries", JSON.stringify(this.rec));

    this.closeModal(modal);
    this.showList();

  }

  showList() {

    let Ctotal = 0;
    this.Ptotal = 0;

    this.carList = JSON.parse(localStorage.getItem('allEntries'));

    if (this.carList) {
      this.listshow = this.carList.map(res => res)
    }

    for (let index = 0; index < this.listshow.length; index++) {

      const Cantidad = this.listshow[index].cant;
      const Precio = this.listshow[index].price;

      Ctotal += Cantidad;
      this.Ptotal += Precio * Cantidad;
    }

    console.log(Ctotal);
    console.log(this.Ptotal);

    console.log(this.listshow);

  }

  closeModal(modal) {
    this.modalService.dismissAll(modal);
  }

  //Sidebar

  open() {
    this.showList();
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  };

  close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  };


}
