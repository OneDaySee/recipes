import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-yemekdetay',
  templateUrl: './yemekdetay.page.html',
  styleUrls: ['./yemekdetay.page.scss'],
})
export class YemekdetayPage implements OnInit {
  public yemekadi: any;
  public url:any=""
  public userData: any;
  public kalori: any;
  public tarifi: any;
  public malzemeleri: any;
  public resim: any;
  public id: any;

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient,public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
    this.yemekadi = this.activatedRoute.snapshot.paramMap.get('yemek_adi');
    this.kalori = this.activatedRoute.snapshot.paramMap.get('yemek_kalori');
    this.tarifi = this.activatedRoute.snapshot.paramMap.get('yemek_tarifi');
    this.malzemeleri = this.activatedRoute.snapshot.paramMap.get('yemek_malzemeleri');
    this.resim = this.activatedRoute.snapshot.paramMap.get('yemek_resim');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userData = JSON.parse(localStorage.getItem('userJSON'));
    
    ///veri gonderme
    this.http.get(this.url+'yemek_servis.php?user_id='+this.userData.id+'&yemek_id='+this.id).subscribe(data=>{console.log("data geldi")});


  }

  
}
