import { Component } from '@angular/core';
import { TrainingDayComponent } from "./training-day/training-day.component";

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [TrainingDayComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

}
