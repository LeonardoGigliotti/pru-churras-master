import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  contando=1;
  placartimeum=0;
  placartimedois=0;
  partidatimeum=0;
  partidatimedois=0;


  constructor() {}

  somarumponto () {
    this.contando = 1
  }

  somartresponto () {
    this.contando = 3
  }

  somarseisponto () {
    this.contando = 6
  }

  somarnoveponto () {
    this.contando = 9
  }

  somardozeponto () {
    this.contando = 12
  }

  botaosomatimeum () {
    this.placartimeum += this.contando
    this.contando = 1

    if (this.placartimeum >= 12) {
      this.partidatimeum +=1
      this.placartimeum =0
      this.placartimedois =0
    }
  }

  botaosomatimedois () {
    this.placartimedois += this.contando
    this.contando = 1

    if (this.placartimedois >= 12) {
      this.partidatimedois +=1
      this.placartimedois =0
      this.placartimeum =0
    }
  }

  botaosubtraitimeum () {

    if (this.placartimeum >0){
      this.placartimeum -= this.contando
      this.contando = 1
    }
  }

  botaosubtraitimedois () {
    if (this.placartimedois >0){
      this.placartimedois -= this.contando
      this.contando = 1
    }
  }

  zerarplacar () {
    this.placartimeum = 0
    this.placartimedois = 0
    this.partidatimeum = 0
    this.partidatimedois =0

  }
}
