import React, { useState } from "react";
import Tabela from "./components/tabela/tabela";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./index.css";

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

  const [click, setClick] = useState(null);

  return (
    <div className="App">
      <h1 class="title">Crie abaixo o seu cronograma de estudos para o Enem</h1>
      <p>
        Preencha os campos abaixo com o seu nível de dificuldade para cada
        matéria (preencha de 1 a 3 sendo 1 = Não tenho dificuldade, 2 = Tenho
        pouca dificuldade e 3 = Tenho dificuldade)
      </p>

      <section>
        Matemática
        <Form.Select
          size="sm"
          arial-label=" Default select"
          name="matematica"
          onChange={(e) => setMat(e.target.value)}
        >
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
        Biologia
        <Form.Select
          size="sm"
          arial-label=" Default select"
          name="biologia"
          onChange={(e) => setBio(e.target.value)}
        >
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
        Qímica
        <Form.Select
          size="sm"
          arial-label=" Default select"
          name="quimica"
          onChange={(e) => setQui(e.target.value)}
        >
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
        Física
        <Form.Select
          size="sm"
          arial-label=" Default select"
          name="fisica"
          onChange={(e) => setFis(e.target.value)}
        >
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
        História
        <Form.Select name="historia" onChange={(e) => setHis(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
        Geografia
        <Form.Select name="Geografia" onChange={(e) => setGeo(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
        Filosofia/Sociologia
        <Form.Select name="filosofia" onChange={(e) => setFil(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
        Linguagens
        <Form.Select name="linguagens" onChange={(e) => setLin(e.target.value)}>
          <option>-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <br></br>
      </section>

      <div>
        <h3 class="title-2">Quantas horas de estudo você possui por semana?</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text
            as="textarea"
            aria
            label="with textarea"
            size="lg"
            onChange={(e) => setTempo(e.target.value)}
          ></InputGroup.Text>
        </InputGroup>
      </div>

      <div class="button-calcular">
        <Button variant="primary" onClick={setClick}>
          Calcular
        </Button>
      </div>

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
