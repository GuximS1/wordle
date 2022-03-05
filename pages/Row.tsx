import React, { useState, useEffect } from "react";
import classes from "../styles/Main.module.scss";
import "rodal/lib/rodal.css";
import Rodal from "rodal";
import { useRouter } from "next/router";

interface prop {
  end: boolean;
  data: any;
  word: String;
}

function Row(props: prop | undefined) {
  const router = useRouter();
  const [clr, setClr] = useState<any | undefined>([]);
  const [win, setWin] = useState<boolean>(true);
  useEffect(() => {
    if (props?.data.length === 5) {
      props.data.map((item: any, index: number) => {
        if (item === props.word[index].toUpperCase())
          setClr((oldArray: any) => [...oldArray, 1]);
        else if (props.word.toUpperCase().includes(item)) {
          setClr((oldArray: any) => [...oldArray, 2]);
        } else setClr((oldArray: any) => [...oldArray, 0]);
      });
    }
  }, [props?.data, props?.word]);
  function closeHandler() {
    setWin(false);
    router.push("/");
    window.location.reload();
  }

  return (
    <div className={classes.letters}>
      {clr.length === 5 && clr.every((item: Number) => item === 1) && (
        <Rodal visible={win} onClose={closeHandler}>
          <div>
            <br />
            <br />
            <br />
            <p
              style={{
                fontSize: "2em",
                fontFamily: "sans-serif",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: "lightgreen",
              }}
            >
              You win!
            </p>
            <br />
            <br />

            <p
              style={{
                fontSize: "2em",
                fontFamily: "sans-serif",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              The word was{" "}
              <span style={{ fontSize: "1.2em" }}>
                {props?.word.toUpperCase()}
              </span>
            </p>
          </div>
        </Rodal>
      )}
      {clr.length === 5 && props?.end && !clr.every((item: any) => item === 1) && (
        <Rodal visible={win} onClose={closeHandler}>
          <div>
            <br />
            <br />
            <br />
            <p
              style={{
                fontSize: "2em",
                fontFamily: "sans-serif",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: "red",
              }}
            >
              You lose!
            </p>
            <br />
            <br />

            <p
              style={{
                fontSize: "2em",
                fontFamily: "sans-serif",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              The word was{" "}
              <span style={{ fontSize: "1.2em" }}>
                {props.word.toUpperCase()}
              </span>
            </p>
          </div>
        </Rodal>
      )}
      <span
        id="1"
        className={
          clr[0] === 1
            ? classes.greenspan
            : clr[0] === 2
            ? classes.yellowspan
            : classes.span
        }
      >
        {props?.data[0]}
      </span>
      <span
        id="2"
        className={
          clr[1] === 1
            ? classes.greenspan
            : clr[1] === 2
            ? classes.yellowspan
            : classes.span
        }
      >
        {props?.data[1]}
      </span>
      <span
        id="3"
        className={
          clr[2] === 1
            ? classes.greenspan
            : clr[2] === 2
            ? classes.yellowspan
            : classes.span
        }
      >
        {props?.data[2]}
      </span>
      <span
        id="4"
        className={
          clr[3] === 1
            ? classes.greenspan
            : clr[3] === 2
            ? classes.yellowspan
            : classes.span
        }
      >
        {props?.data[3]}
      </span>
      <span
        id="5"
        className={
          clr[4] === 1
            ? classes.greenspan
            : clr[4] === 2
            ? classes.yellowspan
            : classes.span
        }
      >
        {props?.data[4]}
      </span>
    </div>
  );
}

export default Row;
