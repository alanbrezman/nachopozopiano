import React from 'react';
import Db1 from ".//assets/notes/do-sostenido.mp3";

export function Section(){

    const audioDb = new Audio({Db1})
    const Db = () => { audioDb.play(); };

    let audioEb = new Audio("./js/notes/re-sostenido.mp3");
    const Eb = () => { audioEb.play(); }

    let audioGb = new Audio(".//assets/notes/do-sostenido.mp3")
    const Gb = () => { audioGb.play(); }

    let audioAb = new Audio("./js/notes/sol-sostenido.mp3")
    const Ab = () => { audioAb.play(); }

    let audioBb = new Audio("./js/notes/la-sostenido.mp3")
    const Bb = () => { audioBb.play(); }

    let audioC = new Audio("./js/notes/do.mp3")
    const C = () => { audioC.play(); }

    let audioD = new Audio("./js/notes/re.mp3")
    const D = () => { audioD.play(); }

    let audioE = new Audio("./js/notes/mi.mp3")
    const E = () => { audioE.play(); }

    let audioF = new Audio("./js/notes/fa.mp3")
    const F = () => { audioF.play(); }

    let audioG = new Audio("./js/notes/sol.mp3")
    const G = () => { audioG.play(); }

    let audioA = new Audio("./js/notes/la.mp3")
    const A = () => { audioA.play(); }

    let audioB = new Audio("./js/notes/si.mp3")
    const B = () => { audioB.play(); }


    return <section>
                <div  className="virtual-piano-container">
                    <div className="black-keys-container">
                        <button type="text" name="Db" className="black-key" onClick={Db}>Db<br/>C#</button>
                        <button type="text" name="Eb" className="black-key" onClick={Eb}>Eb<br/>D#</button>

                        <button type="text" className="black-key space"></button>

                        <button type="text" name="Gb" className="black-key" onClick={Gb}>Gb<br/>F#</button>
                        <button type="text" name="Ab" className="black-key" onClick={Ab}>Ab<br/>G#</button>
                        <button type="text" name="Bb" className="black-key" onClick={Bb}>Bb<br/>A#</button>
                    </div>
                    <div className="white-keys-container">
                        <button type="text" name="C" className="white-key" onClick={C}>C</button>
                        <button type="text" name="D" className="white-key" onClick={D}>D</button>
                        <button type="text" name="E" className="white-key" onClick={E}>E</button>
                        <button type="text" name="F" className="white-key" onClick={F}>F</button>
                        <button type="text" name="G" className="white-key" onClick={G}>G</button>
                        <button type="text" name="A" className="white-key" onClick={A}>A</button>
                        <button type="text" name="B" className="white-key" onClick={B}>B</button>
                    </div>
                </div>

                <div className="info-container">
                    <h1 className="title">Estamos haciendo la página web!</h1>
                    <p className="subtitle">Mientras tanto, puedes jugar con el <b>piano virtual</b> para familiarizarte con el instrumento ;)</p>
                    <form action="/action_page.php">
                        <input type="email" id="lname" name="lname" placeholder="Ingresa tu mail" required/>
                        <button className="cta" type="submit" value="Submit">Quiero ser notificado</button>
                    </form> 
                </div>
            </section>
}