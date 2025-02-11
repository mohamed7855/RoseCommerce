import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [ CarouselModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponen implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly httpClient = inject(HttpClient)

    customOptions: OwlOptions = {
      loop: true,
      autoplay:true,
      autoplayTimeout:2000,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      margin:16,
      responsive: {
        0: {
          items: 3
        },
        400: {
          items: 3
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        },
        1000: {
          items: 3
        }
      },
      nav: false
    }

  prodId:any;
  prodDetails:any;
  currentImg:any ;

  getProdDetails(id:any):Observable<any>{
    return this.httpClient.get(`https://flower.elevateegy.com/api/v1/products/${id}`)
  }

  ngOnInit(): void {



      this.activatedRoute.paramMap.subscribe({
        next:(g)=>{
          this.prodId = g.get("id")
          console.log(this.prodId);
          
          this.getSpecificProd()
          this.currentImg = this.prodDetails.imgCover;
          
        },
        error:(err)=>{
          
        }
      })
  }


  getSpecificProd(){
    this.getProdDetails(this.prodId).subscribe({
      next:(res)=>{
        this.prodDetails = res.product
        console.log(this.prodDetails);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  changeImg(img:any){
    this.currentImg = img
  }
  colors: string[] = [
    '#606DDD',
    '#4CAF50',
    '#17A2B8',
    '#FFC107',
    '#F44336'
  ];





}
