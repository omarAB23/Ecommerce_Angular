import { Component,Input,Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input()title: string = "";
  @Input() data: any[] = [];
  @Output() selectedData = new EventEmitter<string>();
  
selectedCategory: string = "All"; 

  constructor() { }
  ngOnInit() { }
  

  detectChanges(event: any) {
    event.preventDefault();
    this.selectedData.emit(event);
    console.log(this.data);
    console.log(event);
    
  }
}
