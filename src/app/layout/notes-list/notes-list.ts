import { Component, OnInit } from '@angular/core';
import { AddNotes } from '../add-notes/add-notes';

@Component({
  selector: 'app-notes-list',
  imports: [AddNotes],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css',
})
export class NotesList implements OnInit {
  isAddNote: boolean = false; 
  lstNotes: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    let totalData = JSON.parse(localStorage.getItem('notes') || '[]');
    this.lstNotes = totalData;
  }
}
