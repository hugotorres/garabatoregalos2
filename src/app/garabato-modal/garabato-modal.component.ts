import { Component, OnInit, Input} from '@angular/core';
import { Categoria } from '../categoria';
declare var $: any;
@Component({
  selector: 'app-garabato-modal',
  templateUrl: './garabato-modal.component.html',
  styleUrls: ['./garabato-modal.component.css']
})
export class GarabatoModalComponent  {

  @Input() selectedProduct ;
  phoneNumber = '+573197337173';
  mediaUrl = 'https://www.garabatoregalos.com/october2/storage/app/media';
  constructor() { }
  closeModal() {

    $('#exampleModal').modal('hide');
    $('.modal-backdrop').remove();
  }

}
