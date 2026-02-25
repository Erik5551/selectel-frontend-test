import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="padding: 2rem; font-family: sans-serif;">
      <h1>Привет!</h1>
      <p>Нажми на ссылку, чтобы перейти к меню с чекбоксами</p>
      <a
        routerLink="/menu"
        style="color: #007bff; text-decoration: underline; font-size: 1.2rem;"
      >
        Перейти к меню →
      </a>
    </div>
  `,
})
export class WelcomeComponent {}
