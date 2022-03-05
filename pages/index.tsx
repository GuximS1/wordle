/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { words } from "../words/words";
import classes from "../styles/Main.module.scss";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useEffect, useState } from "react";
import Row from "./Row";
const Home: NextPage = () => {
  const [random, setRandom] = useState<String>("");
  useEffect(() => {
    setRandom(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const [word, setWord] = useState<any | undefined>([]);

  function keyPressHandler(button: String) {
    if (button === "{bksp}") {
      if (
        word?.length !== 5 &&
        word?.length !== 10 &&
        word?.length !== 15 &&
        word?.length !== 20 &&
        word?.length !== 25 &&
        word?.length !== 30
      ) {
        setWord((names: any) =>
          names.filter((_: null, i: any) => i !== names.length - 1)
        );
      }
    }
    if (button.match(/[a-z]/i) && button.length === 1) {
      setWord((oldArray: any) => [...oldArray, button.toUpperCase()]);
    }
  }

  return (
    <div>
      <h1 className={classes.title}>Wordle </h1>
      <div className={classes.space}></div>
      <Row end={false} data={word.slice(0, 5)} word={random} />
      <Row end={false} data={word.slice(5, 10)} word={random} />
      <Row end={false} data={word.slice(10, 15)} word={random} />
      <Row end={false} data={word.slice(15, 20)} word={random} />
      <Row end={false} data={word.slice(20, 25)} word={random} />
      <Row end={true} data={word.slice(25, 30)} word={random} />
      <div className={classes.keyboardPosition}>
        <div className={classes.keyboard}>
          <Keyboard onKeyPress={keyPressHandler} />
        </div>
      </div>
    </div>
  );
};

export default Home;
