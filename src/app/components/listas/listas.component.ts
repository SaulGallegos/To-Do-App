import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  constructor(public deseosService: DeseosService, private router: Router) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }

}
