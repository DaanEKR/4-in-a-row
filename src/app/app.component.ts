import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { collectExternalReferences } from '@angular/compiler';

const PLAYER_COIN = "You";
const COMPUTER_COIN = "CPU";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  COLUMNS = 7;
  COLUMN_HEIGHT = 6;

  title = 'game';
  isplayerWin: boolean;
  isOpponentWin: boolean;
  winner: string;
  board: string[][] = [];


  ngOnInit(){
    for (let columnNumber = 0; columnNumber < this.COLUMNS; columnNumber++) {
      this.board.push([]); // add empty column
    }
  }
  // extract last 3 items
  // check resultive array
  check3(column: string[], coinType: string) {
    return column.length > 2 && column.slice(-3).every(coin => coin === coinType);
  }

  check4(column: string[], coinType: string) {
    return column.length > 3 && column.slice(-4).every(coin => coin === coinType);
  }

  playerWins() {
    return this.board.some(column => this.check4(column, PLAYER_COIN));
  }

  computerWins() {
    return this.board.some(column => this.check4(column, COMPUTER_COIN));
  }

  gameOver() {
    return this.playerWins() || this.computerWins();
  }

  turn({ column }) {
    if(this.board[column].length < this.COLUMN_HEIGHT) {
      this.board[column].push(PLAYER_COIN);
      if (this.playerWins()){
        this.gameOver();
        this.winner = 'YOU WIN';
        return;
      }

      const CPUChoice = Math.floor(Math.random() * 7);
      this.board[CPUChoice].push(COMPUTER_COIN);
      console.log(this.board);
      if (this.computerWins()){
        this.gameOver();
        this.winner = 'CPU WIN';
        return;
      }

    } else {
      console.log('invalid')
    }
    // COMPUTER WINS?
    // -- YES
    // --- GAME OVER
  }
}
