import { Component } from '@angular/core';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LivroListaComponent],
  template: `
    <div class="container-fluid">
      <app-livro-lista></app-livro-lista>
    </div>
  `
})
export class AppComponent {
  title = 'livros-angular';
}