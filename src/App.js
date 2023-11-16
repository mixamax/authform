import { useEffect, useRef, useState } from "react";
import "./App.css";
import { LogIn } from "./login/LogIn";
import { SignUp } from "./signup/SignUp";

function App() {
    const [showImg, setShowImg] = useState(false);

    const appref = useRef();
    const requestRef = useRef();
    const scaleRef = useRef();
    const smallScale = useRef();

    smallScale.current = 30;
    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }

    function callBackRaf() {
        scaleRef.current = lerp(smallScale.current, 2500, 0.007);
        console.log(scaleRef.current);
        smallScale.current = scaleRef.current;
        const cls = `radial-gradient(circle ${scaleRef.current}px at 50% 50%, transparent ${scaleRef.current}px, #ffff 0)`;
        appref.current.style.backgroundImage = cls;

        if (scaleRef.current < 2000) {
            requestRef.current = requestAnimationFrame(callBackRaf);
        }
    }

    useEffect(() => {
        if (showImg) {
            requestRef.current = requestAnimationFrame(callBackRaf);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [showImg]);
    return (
        <>
            <div className="palm"></div>
            <div ref={appref} className="App">
                <div className="App-container">
                    {!showImg && (
                        <img
                            className="arrow"
                            src="arrow_down.svg"
                            alt="arrow_down"
                        />
                    )}
                    {!showImg && <LogIn setShowImg={setShowImg} />}
                    {!showImg && <SignUp setShowImg={setShowImg} />}
                </div>
            </div>
        </>
    );
}

export default App;
