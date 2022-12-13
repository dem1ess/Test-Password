import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hide = true

  heroForm: FormGroup = new FormGroup({
    password: new FormControl('')
  })
  firstField = ""
  secondField = ""
  thirdField = ""


  ngOnInit(): void {

  }

  change() {
    console.log(this.heroForm.value.password.match(/[a-z]/),
      this.heroForm.value.password.match(/[0-9]/),
      this.heroForm.value.password.match(/[!@#$%^&*]/), this.firstField, this.secondField, this.thirdField)
    if (this.heroForm.value.password.length < 8) {
      this.firstField = "red"
        this.secondField = "red"
      this.thirdField = "red";
    }
    else if (this.heroForm.value.password.match(/[0-9]/) && this.heroForm.value.password.match(/[!@#$%^&*]/)
      || (this.heroForm.value.password.match(/[a-z]/) && this.heroForm.value.password.match(/[0-9]/))
      || (this.heroForm.value.password.match(/[a-z]/) && this.heroForm.value.password.match(/[!@#$%^&*]/))) {
      this.firstField = "yellow"
      this.secondField = "yellow"
      this.thirdField = "grey"
    }else if(this.heroForm.value.password.match(/[a-z]/) ||
      this.heroForm.value.password.match(/[0-9]/) ||
      this.heroForm.value.password.match(/[!@#$%^&*]/)) {
      this.firstField = "red"
      this.secondField = "grey"
      this.thirdField = "grey"
    }if (this.heroForm.value.password.match(/[a-z]/) && this.heroForm.value.password.match(/[!@#$%^&*]/)
      && this.heroForm.value.password.match(/[0-9]/)) {
      this.firstField = "green"
      this.secondField = "green"
      this.thirdField = "green"
    }
  }
}
