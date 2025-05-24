import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-lessons',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './lessons-page.component.html',
  styleUrl: './lessons-page.component.scss'
})
export class LessonsPageComponent {

}
