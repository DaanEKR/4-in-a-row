import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { collectExternalReferences } from '@angular/compiler';
import { cpuUsage } from 'process';

const PLAYER_COIN = "red";
const COMPUTER_COIN = "yellow";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  COLUMNS = 7;
  COLUMN_HEIGHT = 6;
  board: string[][] = Array(this.COLUMNS).fill(0).map(item => []);

  resetBoard(): void {
    this.board = Array(this.COLUMNS).fill(0).map(item => []);
  }

  getDummies(column: string[]): any[] {
    return Array(this.COLUMN_HEIGHT - column.length);
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
    console.log(this.board[index])
    if(this.board[index].length < this.COLUMN_HEIGHT) {
      this.board[index].push(PLAYER_COIN);
      if (this.playerWins()){
        return;
      }

      const CPUChoice = Math.floor(Math.random() * 7);
      if(this.board[CPUChoice].length < this.COLUMN_HEIGHT){
        this.board[CPUChoice].push(COMPUTER_COIN);

      }
      // console.log(this.board);
      if (this.computerWins()){
        return;
      }


    } else {
      // console.log('invalid')
    }
  }
}
