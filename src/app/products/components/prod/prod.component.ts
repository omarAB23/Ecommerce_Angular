import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss'] 
})
export class ProdComponent implements OnInit {
  @Input() data: any = {};
  @Output() items = new EventEmitter();

  addbtn: boolean = false;

  amount: number = 0;

  ngOnInit(): void {
  
  }

  add(event: Event) {
    event.preventDefault();
    this.items.emit({ item:this.data,quantity:this.amount });
  }

  showInput(event: Event) {
    event.preventDefault();
    this.addbtn = true;
  }
}
