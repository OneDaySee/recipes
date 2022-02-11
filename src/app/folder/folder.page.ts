import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: any;
  public url:any=""
  public kelime: any;
  public yemekler: any;
  public loginPage:any;
  public email:any;
  public password:any;
  public userData:any;
  public loginData:any;
  public yemek1: any;
  public yemek2: any;
  public yemekicerik:any;
  

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient, public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    // this.http.get(this.url+'yemek.php?yemek_al=?').subscribe(data1=>{this.yemek1 = data1; console.log(this.yemek1)})
    this.login();
    this.userData = JSON.parse(localStorage.getItem('userJSON'));
    
    
  }



  // yemek(){
  //   this.http.get(this.url+'yemek.php?yemek_al=?').subscribe(data1=>{this.yemek1 = data1; console.log(this.yemek1)})
  // }







  // uyari



async uyari() {
  const toast = await this.toastController.create({
    message: 'Kullanici Bilgileriniz Hatali Lütfen Tekrar Deneyiniz !',
    duration: 2000,
    color: 'danger',
    position: 'middle'
  });
  toast.present();
}




async uyari2() {
  const toast = await this.toastController.create({
    message: 'Uygulamaya başarı ile giriş yaptınız.',
    duration: 3500,
    color: 'success',
    position: 'bottom'
  });
  toast.present();
}

// 


// cikis
async cikis() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Uyari!',
    message: 'Cikmak <strong>istiyormusun</strong>!!!',
    buttons: [
      {
        text: 'Iptal',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Evet',
        handler: () => {
          console.log('Confirm Okay');
          // localStorage.clear();
          localStorage.removeItem('userJSON')
          this.loginPage=1;
          this.email="";
          this.password="";
        }
      }
    ]
  });

  await alert.present();
}
// 

  bul(){
    // yemek bulma
    this.http.get(this.url+'yemek_servis_onder.php?kelime_al='+this.kelime).subscribe(data=>{
      this.yemekler = data;
      console.log(this.yemekler)
    })
    
   
  }


  yemekhepsi(){
    this.http.get(this.url+'yemek2.php?').subscribe(yemekicerik=>{
      this.yemek2 = yemekicerik;
      console.log(this.yemek2)
    })
    


  }

  login(){
    this.loginPage=1;
    this.loginPage = localStorage.getItem
    
    

    if(this.email){
      // this.loginPage=1;

        console.log(this.email+"---"+this.password);
        this.http.get(this.url+'yemek_user_servis_onder.php?username='+this.email+'&password='+this.password).subscribe(loginData=>{
          this.userData = loginData; 

          if (loginData==0) {
            this.loginPage=1;
            this.uyari();
            this.email="";
            this.password="";
          } else {
            this.loginPage=0;
            this.uyari2();
            localStorage.setItem('userJSON',JSON.stringify(this.userData));
            // this.yemek();

          }
          
        })



  }
}
}
