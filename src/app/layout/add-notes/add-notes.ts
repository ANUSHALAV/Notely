import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notes } from '../../models/notes.model';

@Component({
  selector: 'app-add-notes',
  imports: [FormsModule],
  templateUrl: './add-notes.html',
  styleUrl: './add-notes.css',
})
export class AddNotes {
  @Input() mode: string = 'Add';
  @Input() editId: number = 0;
  @Output() onNoteAdded = new EventEmitter<void>();

  notesObj: Notes = {
    id: 0,
    title: '',
    description: '',
    createdOn: new Date(),
    modifiedOn: new Date(),
  };

  ngOnInit() {
    if (this.mode == 'Edit') {
      this.notesObj = JSON.parse(localStorage.getItem('notes') || '[]').find((x: Notes) => x.id == this.editId);
    }
  }

  onAddNote() {
    if (this.validateNote() == false) {
      return;
    }
    else {
      if (this.mode == 'Add') {
        this.notesObj.createdOn = new Date();
        this.notesObj.modifiedOn = new Date();
        let totalData = JSON.parse(localStorage.getItem('notes') || '[]');
        this.notesObj.id = totalData.length + 1;
        totalData.push(this.notesObj);
        localStorage.setItem('notes', JSON.stringify(totalData));
      }
      if (this.mode == 'Edit') {
        let totalData = JSON.parse(localStorage.getItem('notes') || '[]');
        let index = totalData.findIndex((x: Notes) => x.id == this.editId);
        this.notesObj.modifiedOn = new Date();
        totalData[index] = this.notesObj;
        localStorage.setItem('notes', JSON.stringify(totalData));
      }
      this.notesObj = {
        id: 0,
        title: '',
        description: '',
        createdOn: new Date(),
        modifiedOn: new Date(),
      };
      this.onNoteAdded.emit();
    }
  }

  validateNote() {
    if (this.notesObj.title == '' || this.notesObj.description == '') {
      alert('Please fill all the fields');
      return false;
    }
    return true;
  }
}
