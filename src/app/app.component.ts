import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  COLUMNS = 7;
  COLUMN_HEIGHT = 6;

  title = 'game';
  isplayerWin : boolean;
  isOpponentWin : boolean;
  winner : boolean = false;
  board: string[][] = [];


  ngOnInit(){
    for (let columnNumber = 0; columnNumber < this.COLUMNS; columnNumber++) {
      this.board.push([]); // add empty column
    }
  }

  // PLAYER MOVE +

  // PLAYER WINS?

  // COMPUER MOVE +

  /// COMPUTER WINS?

  check4(array) {
    return array.some(function (a, i, aa) {
      return i > 1 && a === aa[i - 2] && a === aa[i - 3];
    });
  }

  turn({ column }) {
    if(this.board[column].length < 6){
      this.board[column].push('you');
      if(this.check4(this.board[column])=== true){
        console.log(this.board);
        console.log("Won")
        this.winner = !this.winner;
        return;
      } else {
        const CPUChoice = Math.floor(Math.random() * 7);
        this.board[CPUChoice].push('CPU');
      }
    } else {
      console.log('invalid')
    }
    console.log(this.board);
    // COMPUTER WINS?
    // -- YES
    // --- GAME OVER
  }
}
