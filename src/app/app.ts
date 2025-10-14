import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';
import { Home } from './components/home/home';
import { LoadSpinner } from "./components/shared/load-spinner/load-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Home, LoadSpinner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Game-Store-Web');
}
