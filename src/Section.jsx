import React from 'react';
import soundDb from './/assets/notes/do-sostenido.mp3';
import soundEb from './/assets/notes/re-sostenido.mp3';
import soundGb from './/assets/notes/fa-sostenido.mp3';
import soundAb from './/assets/notes/sol-sostenido.mp3';
import soundBb from './/assets/notes/la-sostenido.mp3';
import soundC from './/assets/notes/do.mp3';
import soundD from './/assets/notes/re.mp3';
import soundE from './/assets/notes/mi.mp3';
import soundF from './/assets/notes/fa.mp3';
import soundG from './/assets/notes/sol.mp3';
import soundA from './/assets/notes/la.mp3';
import soundB from './/assets/notes/si.mp3';



export function Section(){

    const varDb = new Audio(soundDb);
    const Db = () => { varDb.play(); };

    const varEb = new Audio(soundEb);
    const Eb = () => { varEb.play(); };

    const varGb = new Audio(soundGb);
    const Gb = () => { varGb.play(); };

    const varBb = new Audio(soundBb);
    const Bb = () => { varBb.play(); };

    const varAb = new Audio(soundAb);
    const Ab = () => { varAb.play(); };


    const varC = new Audio(soundC);
    const C = () => { varC.play(); };

    const varD = new Audio(soundD);
    const D = () => { varD.play(); };

    const varE = new Audio(soundE);
    const E = () => { varE.play(); };

    const varF = new Audio(soundF);
    const F = () => { varF.play(); };

    const varG = new Audio(soundG);
    const G = () => { varG.play(); };

    const varA = new Audio(soundA);
    const A = () => { varA.play(); };

    const varB = new Audio(soundB);
    const B = () => { varB.play(); };
    


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