import { Component, OnInit } from '@angular/core';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';
import { DataCollection } from '../../models/common/dataCollection';
import { SliderContent } from '../../models/entities/sliderContent';
import { SliderContentService } from '../../services/rest/slider-content-service';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  sideSliderContents:SliderContent[]
  sliderContents:SliderContent[]

  constructor(private sliderContentService: SliderContentService) {}

  ngOnInit(): void {
    this.sliderContentService.getList().subscribe(sub=>{

      this.sliderContents = sub.data.data.filter(f=> f.sliderType.id === 201)
      this.sideSliderContents = sub.data.data.filter(f=> f.sliderType.id === 202)
        
    })
  }
}
