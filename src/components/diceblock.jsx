import React from "react";
import Dice from "./dice";
import Pointtable from "./table";
import styles from "./diceblock.module.css";

class Diceblock extends React.Component {
  state = {
    dicenum : [7, 7, 7, 7, 7],
    numnum : [0, 0, 0, 0, 0, 0, 0],
    dicerollcnt : 0,
    selected : [false, false, false, false, false],
  };

  tableclicked = () => {
    this.setState({
      dicerollcnt : 0,
      dicenum : [7, 7, 7, 7, 7],
      numnum : [0, 0, 0, 0, 0, 0, 0]
    })
    console.log(this.state.dicerollcnt, "dicerollcnt cleared")
  }

  controllselected_0 = (value) => {
    this.state.selected[0] = value;
    this.forceUpdate()
  }

  controllselected_1 = (value) => {
    this.state.selected[1] = value;
    this.forceUpdate()
  }

  controllselected_2 = (value) => {
    this.state.selected[2] = value;
    this.forceUpdate()
  }

  controllselected_3 = (value) => {
    this.state.selected[3] = value;
    this.forceUpdate()
  }

  controllselected_4 = (value) => {
    this.state.selected[4] = value;
    this.forceUpdate()
  }

  render() {
    return (
      <div className="diceblock">
        <div className={this.state.dicerollcnt == 3 ? `${styles["diceandbutton"]} ${styles["rollthree"]}` : `${styles["diceandbutton"]}`}>
          <div className='fivedice'>
            <Dice value={this.state.dicenum[0]} dicerollcnt={this.state.dicerollcnt} selected={this.state.selected[0]} csfd={this.controllselected_0}/>
            <Dice value={this.state.dicenum[1]} dicerollcnt={this.state.dicerollcnt} selected={this.state.selected[1]} csfd={this.controllselected_1}/>
            <Dice value={this.state.dicenum[2]} dicerollcnt={this.state.dicerollcnt} selected={this.state.selected[2]} csfd={this.controllselected_2}/>
            <Dice value={this.state.dicenum[3]} dicerollcnt={this.state.dicerollcnt} selected={this.state.selected[3]} csfd={this.controllselected_3}/>
            <Dice value={this.state.dicenum[4]} dicerollcnt={this.state.dicerollcnt} selected={this.state.selected[4]} csfd={this.controllselected_4}/>
          </div>
          <button onClick={this.reroll} className={styles["rerollbutton"]}>reroll</button>
        </div>
        <Pointtable dicerollcnt={this.state.dicerollcnt} tableclicked={this.tableclicked} numnum={this.state.numnum}/>
      </div>
    )
  }

  // wreroll = () => {
  //   setTimeout(this.reroll, 1000);
  // }

  reroll = () => {
    if(this.state.dicerollcnt < 3) {
      let newDiceNum = [7, 7, 7, 7, 7]
      let newnumnum = [0, 0, 0, 0, 0, 0, 0]
      for(let i = 0; i < 5; i++) {
        if(this.state.selected[i] === false){
          newDiceNum[i] = Math.floor(Math.random()*6 + 1)
        }
        else{
          newDiceNum[i] = this.state.dicenum[i]
          this.state.selected[i] = false
        }
        newnumnum[newDiceNum[i]] += 1
      }
      this.setState({
        dicenum : newDiceNum,
        numnum : newnumnum,
        dicerollcnt : this.state.dicerollcnt + 1,
      })
      setTimeout(this.printdicenum, 1);
    }
    else {
      alert('you spend every chance, pls fill in table')
    }
  }

  printdicenum = () => {
    console.log(this.state.dicenum, this.state.numnum, "in printdicenum")
  }
}

export default Diceblock;