
import { NotesList } from './layout/notes-list/notes-list';
import { Component } from '@angular/core';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header,NotesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
