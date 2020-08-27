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

  turn({ column }) {
    // THIS IS PLAYER TURN
    if(this.board[column].length < 6){
      this.board[column].push('you');
      const CPUChoice = Math.floor(Math.random() * 7);
      console.log(CPUChoice)
      this.board[CPUChoice].push('CPU');
    } else {
      console.log('invalid')
    }
    console.log(this.board);
    // PLAYER WINS?

    // -- YES
    // --- GAME OVER
    // -- NO

    // COMPUTER MOVE
    // COMPUTER WINS?
    // -- YES
    // --- GAME OVER
  }
}
