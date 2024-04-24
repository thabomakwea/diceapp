/* eslint-disable @typescript-eslint/quotes */

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

const grap = [2,7];
const firstTimeWin = [7];

@Component({
  selector: 'app-dice',
  templateUrl: './dice.page.html',
  styleUrls: ['./dice.page.scss'],
})
export class DicePage {
  @ViewChild('dice') dice: ElementRef;
  @ViewChild('dice1') dice1: ElementRef;
  firstRoll = true;
  sessionRollNumber = 0;
  currentRollNumber = 0;
  sessionEnd = false;
  playResponse = 'start game';
  constructor(private renderer: Renderer2) {}
  roll() {
    this.randomDice();
  }

  newGame() {
    this.firstRoll = true;
    this.currentRollNumber = 0;
    this.sessionRollNumber = 0;
    this.playResponse = 'new game started';
    this.rollDice(1,1);
    this.sessionEnd = false;
  }
  public randomDice() {
    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);
    this.currentRollNumber = dice1 + dice2;
    this.rollDice(dice1,dice2 );
    this.validateRoll(this.currentRollNumber);
  }

  validateRoll(rolledNumbers: number) {
    if(this.firstRoll) {
      this.sessionRollNumber = rolledNumbers;
      switch (rolledNumbers) {
        case 2:
        console.log('you lose on first try with 1 and 1');
        this.playResponse = 'you lose on first try with 1 and 1 try again';
        this.firstRoll = true;
        this.sessionEnd = true;
        break;
        case 3:
          console.log('you lose on first try with 2 and 1');
          this.playResponse = 'you lose on first try with 2 and 1 try again';
          this.firstRoll = true;
          this.sessionEnd = true;
          break;
        case 11:
          console.log('you win on first try with 11');
          this.playResponse = 'you win on first try with 11';
          this.firstRoll = true;
          this.sessionEnd = true;
        break;
        case 7:
          console.log('you win on first try with 7');
          this.playResponse = 'you win on first try with 7';
          this.firstRoll = true;
          this.sessionEnd = true;
        break;
        default:
          this.playResponse = 'roll again please, you hit :' + rolledNumbers;
          this.firstRoll = false;
          break;
      }
    } else {
     // this.firstRoll = false;
      if(this.sessionRollNumber === this.currentRollNumber) {
        console.log('you win on first try with match ', rolledNumbers + ' and ' , this.currentRollNumber);
        this.playResponse = 'you win on first try with match '+ rolledNumbers + ' and ' + this.currentRollNumber;
        this.sessionEnd = true;
      }
      else if(this.currentRollNumber === 7) {
        console.log('you lose on by hitting 7 ');
        this.playResponse = 'you lose on by hitting 7';
        this.firstRoll = true;
        console.log('new game can start ');
        this.sessionEnd = true;
      } else {
        this.playResponse = 'roll again please, you hit :' + rolledNumbers;
      }
    }
  }

  public rollDice(diceOneNumber, diceOTwoNumber: number) {
      this.diceRotate(diceOneNumber, this.dice);
      console.log('diceOneNumber : ', diceOneNumber,'diceOTwoNumber : ', diceOTwoNumber);
      this.diceRotate(diceOTwoNumber, this.dice1);

  }

  diceRotate(diceNumber: number, dice: ElementRef) {
    if (dice) {
         switch (diceNumber) {
           case 1:
             this.renderer.setStyle(dice.nativeElement, "transform", "rotateX(0deg) rotateY(0deg)");
             break;
           case 6:
             this.renderer.setStyle(dice.nativeElement, "transform", "rotateX(180deg) rotateY(0deg)");
             break;
           case 2:
             this.renderer.setStyle(dice.nativeElement, "transform", "rotateX(-90deg) rotateY(0deg)");
             break;
           case 5:
             this.renderer.setStyle(dice.nativeElement, "transform", "rotateX(90deg) rotateY(0deg)");
             break;
           case 3:
             this.renderer.setStyle(dice.nativeElement, "transform", "rotateX(0deg) rotateY(90deg)");
             break;
           case 4:
             this.renderer.setStyle(dice.nativeElement, "transform", "rotateX(0deg) rotateY(-90deg)");
             break;
           default:
             break;
         }
     }
  }
}
