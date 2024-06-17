import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
    @Input() image!: string;
    @Output() onClick: EventEmitter <any> = new EventEmitter();
}
