import { Component } from '@angular/core';
import { TrainingDayComponent } from "./training-day/training-day.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [TrainingDayComponent, ToolbarComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

}
