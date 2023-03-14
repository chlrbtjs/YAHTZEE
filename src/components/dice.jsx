import React from "react";
import styles from "./dice.module.css";
import d1 from "../imgs/dice1.png"
import d2 from "../imgs/dice2.png"
import d3 from "../imgs/dice3.png"
import d4 from "../imgs/dice4.png"
import d5 from "../imgs/dice5.png"
import d6 from "../imgs/dice6.png"
import d7 from "../imgs/dice7.png"


class Dice extends React.Component {
  render() {
    return (
      <img onClick={this.select}
        {...this.props}
        className={
          this.props.selected
            ? `${styles["dice"]} ${styles["selected"]}`
            : `${styles["dice"]} ${styles["noselected"]}`
        }
        src={
          this.props.value == 1 && d1 || this.props.value == 2 && d2 || this.props.value == 3 && d3 || this.props.value == 4 && d4 || this.props.value == 5 && d5 || this.props.value == 6 && d6 || this.props.value == 7 && d7
        }
      />
    );
  }

  select = () => {
    console.log(this.props.selected)
    if(this.props.value !== 7 && this.props.dicerollcnt !== 3){
      if(this.props.selected){
        this.props.csfd(false)
      }
      else{
        this.props.csfd(true)
      }
      console.log(this.props.selected)
    }
  };
}

export default Dice;