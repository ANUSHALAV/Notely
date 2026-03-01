import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-notes',
  imports: [FormsModule],
  templateUrl: './add-notes.html',
  styleUrl: './add-notes.css',
})
export class AddNotes {

  notesObj:any = {
    id: 0,
    title:'',
    description: '',
    createdOn: new Date(),
    modifiredOn: new Date(),
  };

  onAddNote(){
    if(this.validateNote()==false){
      return ;
    }
    else{
      this.notesObj.createdOn = new Date();
      this.notesObj.modifiredOn = new Date();
      let totalData = JSON.parse(localStorage.getItem('notes') || '[]');
      this.notesObj.id = totalData.length + 1;
      totalData.push(this.notesObj);
      localStorage.setItem('notes', JSON.stringify(totalData));
      this.notesObj = {};
    }
  }

  validateNote(){
    if(this.notesObj.title == '' || this.notesObj.description == ''){
      alert('Please fill all the fields');
      return false;
    }
    return true;
  }
}
