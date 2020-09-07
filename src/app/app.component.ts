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
  board: string[][] = [];

  ngOnInit(){
    for (let columnNumber = 0; columnNumber < this.COLUMNS; columnNumber++) {
      this.board.push([]);
    }
    console.log(this.board)
  }

  check3(column: string[], coinType: string) {
    return column.length > 2 && column.slice(-3).every(coin => coin === coinType);
  }

  check4(column: string[], coinType: string) {
    return column.length > 3 && column.slice(-4).every(coin => coin === coinType);
  }

  playerWins(): boolean {
    return this.board.some(column => this.check4(column, PLAYER_COIN));
  }

  computerWins(): boolean {
    return this.board.some(column => this.check4(column, COMPUTER_COIN));
  }

  gameOver(): boolean {
    return this.playerWins() || this.computerWins();
  }

  turn(index) {
    if(this.board[index].length < this.COLUMN_HEIGHT) {
      this.board[index].push(PLAYER_COIN);
      console.log( this.board[index])
      if (this.playerWins()){
        return;
      }

      const CPUChoice = Math.floor(Math.random() * 7);
      this.board[CPUChoice].push(COMPUTER_COIN);
      console.log(this.board);
      if (this.computerWins()){
        return;
      }


    } else {
      console.log('invalid')
    }
  }
}
