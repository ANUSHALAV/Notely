import { Component, OnInit } from '@angular/core';
import { AddNotes } from '../add-notes/add-notes';
import { Notes } from '../../models/notes.model';

@Component({
  selector: 'app-notes-list',
  imports: [AddNotes],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css',
})
export class NotesList implements OnInit {
  isAddNote: boolean = false; 
  isEditNote: boolean = false;
  lstNotes: Notes[] = [];
  mode:string = 'Add';
  editId:number = 0;

  constructor() {
  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    let totalData = JSON.parse(localStorage.getItem('notes') || '[]');
    this.lstNotes = totalData;
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this note?')) {
      let totalData = JSON.parse(localStorage.getItem('notes') || '[]');
      totalData = totalData.filter((x: Notes) => x.id != id);
      localStorage.setItem('notes', JSON.stringify(totalData));
      this.getNotes();
    }
  }

  onEdit(id: number) {
    this.isEditNote = true;
    this.mode = 'Edit';
    this.editId = id;
  }
}
