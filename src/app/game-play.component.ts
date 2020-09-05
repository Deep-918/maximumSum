import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})

export class gamePlayComponent implements OnInit {
  numbers: any[] = []
  statusArray:any[] = []
  playerOneTurn: boolean
  count:any = 0
  playerOneSum:any = 0
  playerTwoSum:any = 0
  isGameOver: boolean
  isSelected: boolean

  ngOnInit() {
    for (var i = 0; i < 10; ++i) this.numbers[i] = i;
    this.numbers = this.shuffle(this.numbers);
    this.statusArray = this.numbers.slice()
    this.playerOneTurn = true
  }

   shuffle(array) {
    var temp, current, top = array.length;
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      temp = array[current];
      array[current] = array[top];
      array[top] = temp;
    }
    return array;
  }

  onSelect(selectedNumber:any): void {
    if(this.count == 10)
    {
      alert("Game is Over")
      return
    }
    for(var i=0;i<10;i++)
    {
      if(this.numbers[i] == selectedNumber)
      {
        if(this.statusArray[i] == -1)
        {
          alert("This number is already selected")
          return
        }
        else if(this.statusArray[i-1] > -1 && this.statusArray[i+1] > -1)
        {
          alert("Incorrect selection. You can only choose from either side of the list")
          return
        }
        else {
        this.statusArray[i] = -1
        this.count++;
        document.getElementById(selectedNumber).setAttribute("class","selected")
        if(this.playerOneTurn) {
          this.playerOneSum += this.numbers[i];
        }
        else
        this.playerTwoSum += this.numbers[i];
        this.playerOneTurn = !this.playerOneTurn
        }
      }
    }
    if(this.count==10)
    {
      this.isGameOver = true
      if(this.playerOneSum > this.playerTwoSum)
      alert("Congratulations. Player One is the winner");
      else
      alert("Congratulations. Player Two is the winner");
    }
  }

}
