import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';
}
