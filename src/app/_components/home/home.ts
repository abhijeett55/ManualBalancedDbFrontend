import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { Sidebar } from '../sidebar/sidebar';
import { Files } from '../files/files';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Sidebar, Files ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
