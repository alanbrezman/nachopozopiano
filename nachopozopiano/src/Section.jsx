import React from 'react';

export function Section(){

    return <section>
                <div  class="virtual-piano-container">
                    <div class="black-keys-container">
                        <button type="text" name="Db" class="black-key" onClick="playDb()">Db<br/>C#</button>
                        <audio id="Db" src="./js/notes/do-sostenido.mp3" alt="Db"></audio>
                        <button type="text" name="Eb" class="black-key" onClick="playEb()">Eb<br/>D#</button>
                        <audio id="Eb" src="./js/notes/re-sostenido.mp3" alt="Eb"></audio>

                        <button type="text" class="black-key space"></button>

                        <button type="text" name="Gb" class="black-key" onClick="playGb()">Gb<br/>F#</button>
                        <audio id="Gb" src="./js/notes/fa-sostenido.mp3" alt="Gb"></audio>
                        <button type="text" name="Ab" class="black-key" onClick="playAb()">Ab<br/>G#</button>
                        <audio id="Ab" src="./js/notes/sol-sostenido.mp3" alt="Ab"></audio>
                        <button type="text" name="Bb" class="black-key" onClick="playBb()">Bb<br/>A#</button>
                        <audio id="Bb" src="./js/notes/la-sostenido.mp3" alt="Bb"></audio>
                    </div>
                    <div class="white-keys-container">
                        <button type="text" name="C" class="white-key" id="playC">C</button>
                        <audio id="C" src="./js/notes/do.mp3" alt="C"></audio>
                        <button type="text" name="D" class="white-key" id="playD">D</button>
                        <audio id="D" src="./js/notes/re.mp3" alt="D"></audio>
                        <button type="text" name="E" class="white-key" id="playE">E</button>
                        <audio id="E" src="./js/notes/mi.mp3" alt="E"></audio>
                        <button type="text" name="F" class="white-key" id="playF">F</button>
                        <audio id="F" src="./js/notes/fa.mp3" alt="F"></audio>
                        <button type="text" name="G" class="white-key" id="playG">G</button>
                        <audio id="G" src="./js/notes/sol.mp3" alt="G"></audio>
                        <button type="text" name="A" class="white-key" id="playA">A</button>
                        <audio id="A" src="./js/notes/la.mp3" alt="A"></audio>
                        <button type="text" name="B" class="white-key" id="playB">B</button>
                        <audio id="B" src="./js/notes/si.mp3" alt="B"></audio>
                    </div>
                </div>

                <div class="info-container">
                    <h1 class="title">Estamos haciendo la página web!</h1>
                    <p class="subtitle">Mientras tanto, puedes jugar con el <b>piano virtual</b> para familiarizarte con el instrumento ;)</p>
                    <form action="/action_page.php">
                        <input type="email" id="lname" name="lname" placeholder="Ingresa tu mail" required/>
                        <button class="cta" type="submit" value="Submit">Quiero ser notificado</button>
                    </form> 
                </div>
            </section>
}