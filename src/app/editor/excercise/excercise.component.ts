import { Component, input, Input } from '@angular/core';
import { NameSelectorComponent } from "./name-selector/name-selector.component";

@Component({
  selector: 'editor-excercise',
  standalone: true,
  imports: [NameSelectorComponent],
  templateUrl: './excercise.component.html',
  styleUrl: './excercise.component.scss'
})
export class ExcerciseComponent {
  @Input() name!: string;
  @Input() sets!: number;
  @Input() reps!: number;
}
