import React from 'react'
import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import "./style.scss"
import Timezone from './TimeZone';

const Stopwatch = () => {

    const [second, setSecond] = useState(0);
    const [status, setStatus] = useState("stop");

    useEffect(() => {
        const unsubscribe$ = new Subject();
        interval(1000)
          .pipe(takeUntil(unsubscribe$))
          .subscribe(() => {
            if (status === "run") {
              setSecond(value => value + 1000);
            }
          });

          return () => {
            unsubscribe$.next();
            unsubscribe$.complete();
          };
    }, [status]);

    const start = React.useCallback(() => {
      setStatus("run");
    }, []);
      
    const stop = React.useCallback(() => {
      setStatus("stop");
      setSecond(0);
    }, []);
      
    const reset = React.useCallback(() => {
      setSecond(0);
    }, []);
      
    const wait = React.useCallback(() => {
      setStatus("wait");
    }, []);

    return (
        <>
            <div className="container">
              <div className="date-row">
                <p className="head">Hello Stopwatch App</p>
                  <div className="time-zone">
                    <Timezone/>
                  </div>
                <div className="date-block">
                    <div className="date">{new Date(second).toISOString().slice(11, 19)}</div>
                </div>
                  <div className="buttons">
                      <button className="btn" onClick={start}>Start</button>
                      <button className="btn" onClick={stop}>Stop</button>
                      <button className="btn" onClick={reset}>Reset</button>
                      <button className="btn" onClick={wait}>Wait</button>
                  </div>
              </div>
            </div>
        </>
    )
}

export default Stopwatch 