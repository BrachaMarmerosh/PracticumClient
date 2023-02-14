import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  userName= " ";
   
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userName = this.userService.currentUser.FirstName+" "+this.userService.currentUser.LastName;
  }

}
