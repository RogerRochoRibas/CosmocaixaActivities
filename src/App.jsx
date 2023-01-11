import { useState } from "react";
import "./App.css";
import { TextQuestion } from "./components/molecules/TextQuestion";
import { ImageQuestion } from "./components/molecules/ImageQuestion";
import { ImageAndTextQuestion } from "./components/molecules/ImageAndTextQuestion";

function App() {
  return (
    <div className="App">
      <h1>Fitxa Cosmocaixa</h1>
      <div className="card">
        <ImageQuestion text="1. Feu-vos una foto de grup amb el sol." />
      </div>
      <div className="card">
        <TextQuestion text="2. Escolliu dues ubicacions del món i compareu l’hora a la que surt el sol i la quantitat d’hores de llum que tenen amb les que tenim a Catalunya. A que es deuen les diferencies?" />
      </div>
      <div className="card">
        <ImageQuestion text="3. Trobeu cinc usos al llarg del temps per a la llum del sol i feune una foto de cada un." />
      </div>
      <div className="card">
        <ImageAndTextQuestion text="4. Dins l'exposició trobareu una torre amb miralls, aconseguiu que es posi de diferents colors. Feu-ne una foto i expliqueu que heu fet perquè sortís cada color." />
      </div>
      <div className="card">
        <TextQuestion text="5. Dins l'exposició trobareu un equipament per simular tempestes solars i un conjunt de materials que us podrien ser útils per a sobreviure en cas de desastre. Estudieu ambdues i decidiu en grup quins tres objectes voldríeu tindre en aquesta situació. Doneu una breu justificació per a cada un." />
      </div>
      <div className="card">
        <ImageQuestion text="6. Al museu trobareu un pal per a fer foc. Intenteu aconseguir la temperatura més gran que pugeu i feu-ne un vídeo. El grup que obtingui la major temperatura tindrà un punt positiu a l'avaluació!" />
      </div>
      <div className="card">
        <ImageQuestion text="7. Al museu trobareu un equip per fer llums, intenteu crear amb les vostres sombres una escena interesant jugant amb els colors d’aquestes." />
      </div>
    </div>
  );
}

export default App;
