import { Component, Input } from '@angular/core';

@Component({
  selector: 'excercise-name-selector',
  standalone: true,
  imports: [],
  templateUrl: './name-selector.component.html',
  styleUrl: './name-selector.component.scss'
})
export class NameSelectorComponent {
  @Input() selected!: string;
}
