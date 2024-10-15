import { Component, inject } from '@angular/core';
import { TrainingDayService } from '../../services/trainingDay.service';
import { saveAs } from 'file-saver';
import { TrainingDay } from '../../models/trainingDay';

@Component({
  selector: 'editor-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  excerciseService = inject(TrainingDayService);
  download() {
    const plan = JSON.stringify(this.excerciseService.getDays());
    const blob = new Blob([plan], { type: 'application/json' })
    saveAs(blob, "training-plan.json")
  }
  load(event: Event) {
    const element = event.currentTarget as HTMLInputElement
    let files = element.files
    if (files) {
      const file = files[0]
      const text = file.text().then((text) => {
        const plan: TrainingDay[] = JSON.parse(text);
        this.excerciseService.updatePlan(plan);
        this.excerciseService.updated.emit();
      }).catch(e => console.log(e))
    }
  }
}
