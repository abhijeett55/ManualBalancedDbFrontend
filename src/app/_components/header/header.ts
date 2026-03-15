import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navItems = [
    { label: 'Files', route: '/files' },
    { label: 'Uploads', route: '/uploads' },
    { label: 'Insights', route: '/insights' },
    { label: 'Docs', route: '/docs' },
    { label: 'AdminConsole', route: '/admin-console' }
  ];
}
