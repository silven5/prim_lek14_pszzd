import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Message } from './message';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-string-array',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './string-array.component.html',
  styleUrls: ['./string-array.component.scss'],
})
export class StringArrayComponent implements OnInit {
  arrayForm: FormGroup;
  message!: Message;
  //Подія для передачі вихідної інформації
  @Output() public messages = new EventEmitter<Message>();
  constructor(private fb: FormBuilder) {
    this.arrayForm = this.fb.group({
      message: new FormArray([new FormControl()]),
    });
  }
  deleteMessage(index: any) {
    (this.arrayForm.controls['message'] as FormArray).removeAt(index);
  }
  addMessage() {
    (this.arrayForm.controls['message'] as FormArray).push(new FormControl());
  }
  onSubmit() {
    this.message = new Message(this.arrayForm.value.message);
    this.messages.emit(this.message);
  }
  getControls() {
    return (this.arrayForm.get('message') as FormArray).controls;
  }

  ngOnInit() {}
}
