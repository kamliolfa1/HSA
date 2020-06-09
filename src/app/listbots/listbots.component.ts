import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogbotComponent } from '../dialogbot/dialogbot.component';
@Component({
  selector: 'app-listbots',
  templateUrl: './listbots.component.html',
  styleUrls: ['./listbots.component.scss']
})
export class ListbotsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogBot()
  {
    this.dialog.open(DialogbotComponent);}
  ngOnInit(): void {
  }

}
