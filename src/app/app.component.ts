import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MyHeaderComponent,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,

    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prim_lek14_pszzd';
}
