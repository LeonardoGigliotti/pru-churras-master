import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  contando=1;
  pctimeum=0;
  pctimedois=0;
  partidatimeum=0;
  partidatimedois=0;


  constructor() {}

  somarum () {
    this.contando = 1
  }

  somartres () {
    this.contando = 3
  }

  somarseis () {
    this.contando = 6
  }

  somarnove () {
    this.contando = 9
  }

  somardoze () {
    this.contando = 12
  }

  botaosomatimeum () {
    this.pctimeum += this.contando
    this.contando = 1

    if (this.pctimeum >= 12) {
      this.partidatimeum +=1
      this.pctimeum =0
      this.pctimedois =0
    }
  }

  botaosomatimedois () {
    this.pctimedois += this.contando
    this.contando = 1

    if (this.pctimedois >= 12) {
      this.partidatimedois +=1
      this.pctimedois =0
      this.pctimeum =0
    }
  }

  botaosubtraitimeum () {
 
    if (this.pctimeum >0){
      this.pctimeum -= this.contando
      this.contando = 1
    }
  }

  botaosubtraitimedois () {
    if (this.pctimedois >0){
      this.pctimedois -= this.contando
      this.contando = 1
    }
  }

  zerarplacar () {
    this.pctimeum = 0
    this.pctimedois = 0
    this.partidatimeum = 0
    this.partidatimedois =0

  }
}
