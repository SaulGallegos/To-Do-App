import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista-model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(public deseosService: DeseosService, private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  async editarNombre(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Edit Name',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Edit',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
          }
        }
      ]
    });

    await alert.present();
  }
}
