import React from "react";
import styles from "./table.module.css";


class Pointtable extends React.Component {
  state = {
    dicerollcnt : 0,
    text : "",
    filled : [false, false, false, false, false, false, false, false, false, false, false, false, false],
    point : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    calcbonus : () => {
      let sum = 0
      for(let i = 0; i < 6; i++) {
        sum += this.state.point[i]
      }
      return sum
    },
    calc : [
      () => { //ones, 0
        return this.props.numnum[1];
      },
      () => { //twos, 1
        return this.props.numnum[2] * 2;
      },
      () => { //threes, 2
        return this.props.numnum[3] * 3;
      },
      () => { //fours, 3
        return this.props.numnum[4] * 4;
      },
      () => { //fives, 4
        return this.props.numnum[5] * 5;
      },
      () => { //sixs, 5
        return this.props.numnum[6] * 6;
      },
      () => { //choice, 6
        let sum = 0;
        for(let i = 1; i < 7; i++) {
          sum += this.props.numnum[i] * i;
        }
        return sum;
      },
      () => { //4 of a kind, 7
        let flag = false;
        for(let i = 1; i < 7; i++) {
          if(this.props.numnum[i] >= 4) {
            flag = true
            break
          }
        }

        if(flag) {
          return this.state.calc[6]();
        }
        else {
          return 0;
        }
      },
      () => { // full house, 8
        let flag = false;
        for(let i = 1; i < 7; i++) {
          if(this.props.numnum[i] == 3){
            for(let i = 1; i < 7; i++) {
              if(this.props.numnum[i] == 2){
                flag = true
                break
              }
            }
          }
          if(flag){
            break
          }
        }

        if(flag) {
          return this.state.calc[6]()
        }
        else {
          return 0
        }
      },
      () => { //little straight, 9
        let flag = false
        for(let i = 1; i < 4; i++) {
          if(this.props.numnum[i]*this.props.numnum[i+1]*this.props.numnum[i+2]*this.props.numnum[i+3] >= 1) {
            flag = true
            break
          }
        }

        if(flag) {
          return 30
        }
        else {
          return 0
        }
      },
      () => { //large straight, 10
        let flag = false
        for(let i = 1; i < 3; i++) {
          if(this.props.numnum[i]*this.props.numnum[i+1]*this.props.numnum[i+2]*this.props.numnum[i+3]*this.props.numnum[i+4] >= 1) {
            flag = true
            break
          }
        }

        if(flag) {
          return 40
        }
        else {
          return 0
        }
      },
      () => { //Yahtzee, 11
        let flag = false
        for(let i = 1; i < 7; i++) {
          if(this.props.numnum[i] == 5) {
            flag = true
            break
          }
        }

        if(flag) {
          return 50
        }
        else {
          return 0
        }
      },
    ]
  };

  render() {
    return (
      <div className={styles["pointtable"]}>
        <table className={styles["table"]}>
          <tbody>
            <tr>
              <td className={styles["cell"]}>ones</td>
              <td className={`${styles["cell"]} ${this.state.filled[0] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(0);}}>{this.state.filled[0] ? this.state.point[0] : this.state.calc[0]()}</td>
              <td className={styles["middleblank"]}></td>
              <td className={styles["cell"]}>Choice</td>
              <td className={`${styles["cell"]} ${this.state.filled[6] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(6);}}>{this.state.filled[6] ? this.state.point[6] : this.state.calc[6]()}</td>
            </tr>
            <tr>
              <td className={styles["cell"]}>twos</td>
              <td className={`${styles["cell"]} ${this.state.filled[1] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(1);}}>{this.state.filled[1] ? this.state.point[1] : this.state.calc[1]()}</td>
              <td className={styles["middleblank"]}></td>
              <td className={styles["cell"]}>4 of a Kind</td>
              <td className={`${styles["cell"]} ${this.state.filled[7] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(7);}}>{this.state.filled[7] ? this.state.point[7] : this.state.calc[7]()}</td>
            </tr>
            <tr>
              <td className={styles["cell"]}>threes</td>
              <td className={`${styles["cell"]} ${this.state.filled[2] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(2);}}>{this.state.filled[2] ? this.state.point[2] : this.state.calc[2]()}</td>
              <td className={styles["middleblank"]}></td>
              <td className={styles["cell"]}>Full House</td>
              <td className={`${styles["cell"]} ${this.state.filled[8] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(8);}}>{this.state.filled[8] ? this.state.point[8] : this.state.calc[8]()}</td>
            </tr>
            <tr>
              <td className={styles["cell"]}>fours</td>
              <td className={`${styles["cell"]} ${this.state.filled[3] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(3);}}>{this.state.filled[3] ? this.state.point[3] : this.state.calc[3]()}</td>
              <td className={styles["middleblank"]}></td>
              <td className={styles["cell"]}>Little Straight</td>
              <td className={`${styles["cell"]} ${this.state.filled[9] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(9);}}>{this.state.filled[9] ? this.state.point[9] : this.state.calc[9]()}</td>
            </tr>
            <tr>
              <td className={styles["cell"]}>fives</td>
              <td className={`${styles["cell"]} ${this.state.filled[4] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(4);}}>{this.state.filled[4] ? this.state.point[4] : this.state.calc[4]()}</td>
              <td className={styles["middleblank"]}></td>
              <td className={styles["cell"]}>Large Straight</td>
              <td className={`${styles["cell"]} ${this.state.filled[10] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(10);}}>{this.state.filled[10] ? this.state.point[10] : this.state.calc[10]()}</td>
            </tr>
            <tr>
              <td className={styles["cell"]}>sixes</td>
              <td className={`${styles["cell"]} ${this.state.filled[5] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(5);}}>{this.state.filled[5] ? this.state.point[5] : this.state.calc[5]()}</td>
              <td className={styles["middleblank"]}></td>
              <td className={styles["cell"]}>Yacht</td>
              <td className={`${styles["cell"]} ${this.state.filled[11] ? styles["filled"] : this.state.dicerollcnt !== 0 && styles["unfilled"]}`} onClick={() => {this.click(11);}}>{this.state.filled[11] ? this.state.point[11] : this.state.calc[11]()}</td>
            </tr>
            <tr>
              <td className={styles["bottomblank"]} colSpan="5"></td>
            </tr>
            <tr>
              <td className={styles["cell"]}>bonus</td>
              <td className={`${styles["cell"]}`}>{this.state.filled[11] ? 35 : this.state.calcbonus() - 63}</td>
              <td className={styles["middleblank"]}></td>
              <td className={styles["cell"]}>total</td>
              <td className={`${styles["cell"]} ${this.state.dicerollcnt !== 0 && styles["pointcell"]}`}>{this.state.point[12]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  
  static getDerivedStateFromProps(nextProps, prevstate){
    console.log(prevstate.dicerollcnt, nextProps.dicerollcnt, "in getDerived...")
    if(prevstate.dicerollcnt !== nextProps.dicerollcnt) {
      return {
        dicerollcnt : nextProps.dicerollcnt
      }
    }
    return {
      dicerollcnt : prevstate.dicerollcnt
    }
  }

  click(n) {
    if(this.state.filled[n]==false){
      if(this.state.dicerollcnt !== 0){
        this.state.point[n] = this.state.calc[n]()
        this.state.filled[n] = true
        console.log("click", this.state.point[n], n)

        if(this.state.calcbonus() >= 63) {
          this.state.filled[11] = true
          this.state.point[11] = 35
        }

        this.state.point[12] += this.state.point[n]
        
        this.props.tableclicked()
      }
    }
  }
}

export default Pointtable;