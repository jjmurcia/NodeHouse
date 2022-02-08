import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allInmueble: any;
  typeInmueble: any;

  inmueble: any = {
    tipo:"",
    precio: "",
    habitaciones: "",
    ciudad:"",
    localidad:"",
    direccion:""
  }
  constructor(public authservices:AuthService, private inmuebleService: InmuebleService, private toastr: ToastrService) {
    this.typeInmueble = ["Apartamento", "Apartaestudio", "Casa"]
  }

  ngOnInit(): void {
    this.allInmueble = []
    this.getAllInmueble()
  }
  getAllInmueble(){
    this.inmuebleService.getAllInmueble().subscribe((Inmueble)=>{
      this.allInmueble = Inmueble
    })
  }

  saveInmueble(): void{
    if(this.inmueble.tipo && this.inmueble.precio && this.inmueble.habitaciones && this.inmueble.ciudad && this.inmueble.localidad && this.inmueble.direccion){
      this.inmuebleService.postCreateInmueble(this.inmueble).subscribe((respuesta)=>{
        if((respuesta as any).type=="error"){
          this.toastr.error((respuesta as any).msg, 'Error!');
        }else{
          document.getElementById("closeModal")?.click()
          this.toastr.success((respuesta as any).msg, 'Bien!');
          this.getAllInmueble()
        }
      })
    }else{
      this.toastr.error('Faltan campos por llenar', 'Error!');
    }
  }

  deleteInmueble(): void{

  }
}
