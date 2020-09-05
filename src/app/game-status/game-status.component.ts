import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {
  @Input() playerTurn: boolean
  @Input() isGameOver: boolean
  @Input() playerOneSum: any
  @Input() playerTwoSum: any

  constructor() { }

  ngOnInit() {
  }

}
