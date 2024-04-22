import React, { useState } from "react";
import Tabela from "./components/tabela/tabela";

export default function App() {
  // Dificuldade por materia do aluno
  const [mat, setMat] = useState(1);
  const [bio, setBio] = useState(1);
  const [qui, setQui] = useState(1);
  const [fis, setFis] = useState(1);
  const [his, setHis] = useState(1);
  const [geo, setGeo] = useState(1);
  const [fil, setFil] = useState(1);
  const [lin, setLin] = useState(1);

  //tempo de estudo semanal do aluno
  const [tempo, setTempo] = useState(0);
  var tempoSemana = parseInt(tempo);

  const [click, setClick] = useState (null)


  return (
    <div className="App">
      <h1>Cronograma de estudos Enem</h1>
      <h2>Preencha os campos abaixo</h2>
      <h3>Meu nível de dificuldade para cada matéria (preencha de 1 a 3)</h3>

      <section>
        <select name="matematica" onChange={(e) => setMat(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        Matemática<br></br>
        <select name="biologia" onChange={(e) => setBio(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        Biologia<br></br>
        <select name="quimica" onChange={(e) => setQui(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        Química<br></br>
        <select name="fisica" onChange={(e) => setFis(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        Física<br></br>
        <select name="historia" onChange={(e) => setHis(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        História<br></br>
        <select name="Geografia" onChange={(e) => setGeo(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        Geografia<br></br>
        <select name="filosofia" onChange={(e) => setFil(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        Filosofia/Sociologia<br></br>
        <select name="linguagens" onChange={(e) => setLin(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        Linguagens<br></br>
      </section>
      
      <div>
        <h3>Quantas horas de estudo você possui por semana?</h3>
        <input onChange={(e) => setTempo(e.target.value)}></input>
      </div>

      <div><button onClick={setClick}>Calcular</button></div>

      

      <Tabela
        mat={mat}
        bio={bio}
        qui={qui}
        fis={fis}
        his={his}
        geo={geo}
        fil={fil}
        lin={lin}
        tempoSemana={tempoSemana}
        click={click}
        setClick={setClick}
      />
    </div>
  );
}
