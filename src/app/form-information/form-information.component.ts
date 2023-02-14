import { Component, OnInit } from '@angular/core';
import User from 'src/models/User';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-form-information',
  templateUrl: './form-information.component.html',
  styleUrls: ['./form-information.component.scss']
})
export class FormInformationComponent implements OnInit {

  child: User = new User(0, "", "", "", "", "", new Date(), 0, "", "");
  children: User[] = [];
  usersArr: User[] = [];
  showChild: boolean = false;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  saveChild() {
    this.child.spouseTZ=this.userService.currentUser.TZ;
    this.child.HMO = this.userService.currentUser.HMO;
    this.child.StatusUser = 'child';
    if (this.children.findIndex(c => c.TZ == this.child.TZ) != -1)
      alert("  erorr: ther is a child with same TZ ")
    else {
      this.children.push(this.child);
      this.userService.addUser(this.child).subscribe((succ) => {
        console.log("child add");
        ;
      },
        (err) => {
          alert(" שגיאה בקבלת הנתונים");
          console.log(err)
        })
    }
    // this.child = new User(0, "", "", "", "", "", new Date(), 0, "", "");
    this.showChild = false;
  }

  addChild() {
    this.showChild = true;
  }

  logIn() {

    this.userService.currentUser.StatusUser = this.userService.currentUser.Gender == "male" ? "man" : "woman";
    this.userService.addUser(this.userService.currentUser).subscribe(
      succ => console.log("user added"),
      err => console.log("erorr in adding user"));
    console.log(this.userService.currentUser)
    this.userService.currentUser=new User(0, "", "", "", "", "", new Date(), 0, "", "");
    

  }

  downLoadToExel() {
    this.userService.getAllUsers().subscribe(
      succ => {
        this.usersArr = succ
        console.log(this.usersArr)
        let usvString = "";
        this.usersArr.map(i => {
          usvString += JSON.stringify(i) + ",";
          usvString += "\n"
        }
        )
        usvString = "data:application/csv," + encodeURIComponent(usvString);
        let anchor = document.createElement("A");
        anchor.setAttribute("href", usvString);
        anchor.setAttribute("download", "somedata.csv");
        document.body.append(anchor)
        anchor.click()
      },
      err => {
        alert("התרחשה שגיאה בקבלת הנתונים")
        console.log(err)
      })

  }

}
