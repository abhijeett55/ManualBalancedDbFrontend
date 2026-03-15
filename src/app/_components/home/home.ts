import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
