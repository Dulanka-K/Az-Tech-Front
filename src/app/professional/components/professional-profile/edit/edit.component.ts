import { Component, OnInit, Input } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { PasswordValidator } from 'src/app/shared/validators/password.validator';


@Component({
  selector: 'prof-app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProfessionalProfileEditComponent implements OnInit {

  form;
  @Input() fname;
  @Input() lname;
  @Input() country;
  match: boolean = true;
  passwordform:FormGroup;
  
  
  constructor(
    private professionalService: professionalService,
    private fb: FormBuilder,
    private auth:AuthService,
    private toastr: ToastrManager
    ) {
      this.form = fb.group({
        fname:[this.fname, Validators.required],
        lname:[this.lname, Validators.required],
        country:[this.country, Validators.required]
        
      });
    
   }

  ngOnInit() {
    
    this.passwordform = this.fb.group({
      password:['',Validators.required],
        newPassword:['',Validators.required],
        confirmPassword:['',Validators.required]
    });

  }


  countries: string[] = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", 
    "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", 
    "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", 
    "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", 
    "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", 
    "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", 
    "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", 
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", 
    "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", 
    "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", 
    "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", 
    "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", 
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", 
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", 
    "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
    "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", 
    "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", 
    "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", 
    "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", 
    "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", 
    "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
    "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", 
    "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", 
    "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", 
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", 
    "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", 
    "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", 
    "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
  ]


  editStage = false;

  updateProfile(form){
    this.editStage = false;
    console.log(form.value);
    let uId = this.auth.currentUser._id;
    let f = form.value;

    
    let user = {
      'firstName': f.fname,
      'lastName': f.lname,
      'country': f.country
    };

    this.professionalService.editProfile(uId,user)
      .subscribe(res=>{
        console.log(res.json());
        if(res.json().success){
          this.toastr.successToastr('Profile edited successfully!');
        }
      })
  }

  editProfile(){
    this.editStage = true;
    this.form.patchValue({
      fname: this.fname,
      lname: this.lname,
      country: this.country,
    })
  }

  changePassword(){
    let uId=this.auth.currentUser._id;

    if(this.passwordform.get('newPassword').value===this.passwordform.get('confirmPassword').value){
      this.match= true;
      console.log(this.passwordform.value)
      this.professionalService.changePassword(this.passwordform.value,uId)
      .subscribe((res:any)=>{
        console.log(res);
        

        if(res.json().state){
          this.toastr.successToastr('Password Changed!');
        }
        else{
          this.toastr.errorToastr('Password did not change!');
        }
      })
    }else{
      this.match = false
    }
  }

}
