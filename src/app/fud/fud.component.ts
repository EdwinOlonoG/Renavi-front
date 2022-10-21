import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateService } from '../services/date.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-fud',
  templateUrl: './fud.component.html',
  styleUrls: ['./fud.component.css']
})
export class FUDComponent implements OnInit {

  formData: FormGroup;
  hasId: boolean = false;
  denouncedtoMinistery: boolean = false;
  hasComplainedToHumanRights: boolean = false;
  showAlert: boolean = false;
  message: string = '';

  federalEntities: string[] = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Coahuila",
    "Colima",
    "Distrito Federal",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "México",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas"
  ]

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private dateService: DateService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  test() {
    console.log(this.formData.value);
    this.registrationService.createFud(this.formData.value).subscribe((response: any) => {
      console.log(response);
      if(response.id){
        this.showAlert = true;
        this.message = 'Registro guardado con éxito'
      }
      setTimeout(() => {
        this.showAlert = false;
        this.message = '';
      }, 3000)
    })
  }

  buildForm() {
    this.formData = this.formBuilder.group({
      solicitude: new FormGroup({
        place: new FormControl('Delegación gutavo a madero, CDMX, México', Validators.required),
        date: new FormControl(this.dateService.now())
      }),
      writtenBy: ['familia'],
      applicantData: new FormGroup({
        name: new FormControl('Edwin'),
        lastName: new FormControl('Oloño'),
        motherLastName: new FormControl('Garcia'),
        relationship: new FormControl('pareja'),
        position: new FormControl(''),
        institution: new FormControl(''),
        mobilePhone: new FormControl('5515294275'),
        phone: new FormControl('5515294275'),
        email: new FormControl('edwin.olono@gmail.com'),
        contact: new FormControl('contacto')
      }),
      victimType: ['', Validators.required],
      victimData: new FormGroup({
        name: new FormControl('Juana', Validators.required),
        lastName: new FormControl('Juana', Validators.required),
        motherLastName: new FormControl('Juana', Validators.required),
        birthDate: new FormControl('Wed Oct 19 2022 00:00:00 GMT-0500', Validators.required),
        gender: new FormControl('Mujer', Validators.required),
        nationality: new FormControl('Mexicana', Validators.required),
        curp: new FormControl('OOGE000626HDFLDA6', Validators.required),
        birthPlace: new FormControl('CDMX', Validators.required),
        civilStatus: new FormControl('', Validators.required),
        street: new FormControl('avenida', Validators.required),
        externalNumber: new FormControl('125', Validators.required),
        internalNumber: new FormControl(''),
        postalCode: new FormControl('084', Validators.required),
        colony: new FormControl('colonia', Validators.required),
        location: new FormControl('locacion', Validators.required),
        delegation: new FormControl('delegacion', Validators.required),
        federalEntity: new FormControl('entidad', Validators.required),
        phone: new FormControl('5515294275', Validators.required)
      }),
      idType: ['INE'],
      fact: new FormGroup({
        street: new FormControl('avenida', Validators.required),
        externalNumber: new FormControl('14', Validators.required),
        postalCode: new FormControl('0842', Validators.required),
        colony: new FormControl('colonia', Validators.required),
        location: new FormControl('locacion', Validators.required),
        delegation: new FormControl('delaegacion', Validators.required),
        federalEntity: new FormControl('CDMX', Validators.required),
        date: new FormControl('Wed Oct 19 2022 00:00:00 GMT-0500', Validators.required),
        report: new FormControl('reporte', Validators.required),
        extraInformation: new FormControl('Info', Validators.required)
      }),
      observations: new FormGroup({
        violenceType: new FormControl('Domestica'),
        description: new FormControl('descripcion')
      }),
      ministerialInvestigation: new FormGroup({
        date: new FormControl(this.dateService.now()),
        competence: new FormControl('competencia'),
        federalEntity: new FormControl('entidad federal'),
        crime: new FormControl('crimen'),
        agency: new FormControl('agencia'),
        apciac: new FormControl('apiac'),
        investigationStatus: new FormControl('activa'),
      }),
      judicialProcess: new FormGroup({
        date: new FormControl(this.dateService.now()),
        competence: new FormControl('competencia'),
        federalEntity: new FormControl('entidad federal'),
        crime: new FormControl('crimen'),
        courtNumber: new FormControl('128'),
        processNumber: new FormControl('15520'),
        stateJudicialProcess: new FormControl('proceso'),
      }),
      humanRightsProcess: new FormGroup({
        date: new FormControl(this.dateService.now()),
        competence: new FormControl('competencia'),
        organism: new FormControl('organismo'),
        violation: new FormControl('ciolacion'),
        authority: new FormControl('autoridad'),
        resolutionType: new FormControl('resolucion'),
        invoice: new FormControl('invoice'),
        currentState: new FormControl('activa'),
        otherAuthority: new FormControl('otro')
      })
    });
  }
}
