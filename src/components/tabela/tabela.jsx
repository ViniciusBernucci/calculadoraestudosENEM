import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function Tabela(props) {
  //peso do enem baseado em numero de questoes e poder de alavancagem das matérias
  const pesoMat = parseFloat(0.75);
  const pesoBio = parseFloat(0.35);
  const pesoQuim = parseFloat(0.2);
  const pesoFis = parseFloat(0.2);
  const pesoHist = parseFloat(0.1);
  const pesoGeo = parseFloat(0.07);
  const pesoFs = parseFloat(0.08);
  const pesoLing = parseFloat(0.25);

  //calculo das prioridades levando em conta o peso do Enem e a dificuldade do aluno
  var prioridadeMat = props.mat * pesoMat;
  var prioridadeBio = props.bio * pesoBio;
  var prioridadeQuim = props.qui * pesoQuim;
  var prioridadeFis = props.fis * pesoFis;
  var prioridadeHis = props.his * pesoHist;
  var prioridadeGeo = props.geo * pesoGeo;
  var prioridadeFs = props.fil * pesoFs;
  var prioridadeLing = props.lin * pesoLing;

  //calculo somatorio das prioridades
  var prioridadeTotal =
    prioridadeBio +
    prioridadeMat +
    prioridadeQuim +
    prioridadeFis +
    prioridadeHis +
    prioridadeGeo +
    prioridadeFs +
    prioridadeLing;

  //calculo blocos de 50min
  var horas_minutos = props.tempoSemana * 60;
  var blocos_50min = horas_minutos / 50;

  //calculo final de horas por matéria
  var tempoMat = prioridadeMat * (props.tempoSemana / prioridadeTotal);
  var tempoMatFinal = tempoMat.toFixed(2);

  var tempoBio = prioridadeBio * (props.tempoSemana / prioridadeTotal);
  var tempoBioFinal = tempoBio.toFixed(2);

  var tempoQuim = prioridadeQuim * (props.tempoSemana / prioridadeTotal);
  var tempoQuimFinal = tempoQuim.toFixed(2);

  var tempoFis = prioridadeFis * (props.tempoSemana / prioridadeTotal);
  var tempoFisFinal = tempoFis.toFixed(2);

  var tempoHis = prioridadeHis * (props.tempoSemana / prioridadeTotal);
  var tempoHisFinal = tempoHis.toFixed(2);

  var tempoGeo = prioridadeGeo * (props.tempoSemana / prioridadeTotal);
  var tempoGeoFinal = tempoGeo.toFixed(2);

  var tempoFs = prioridadeFs * (props.tempoSemana / prioridadeTotal);
  var tempoFsFinal = tempoFs.toFixed(2);

  var tempoLing = prioridadeLing * (props.tempoSemana / prioridadeTotal);
  var tempoLingFinal = tempoLing.toFixed(2);

  //converter para segundos
  var segundosMat = Math.round(tempoMatFinal * 3600);
  var segundosBio = Math.round(tempoBioFinal * 3600);
  var segundosQuim = Math.round(tempoQuimFinal * 3600);
  var segundosFis = Math.round(tempoFisFinal * 3600);
  var segundosHis = Math.round(tempoHisFinal * 3600);
  var segundosGeo = Math.round(tempoGeoFinal * 3600);
  var segundosFs = Math.round(tempoFsFinal * 3600);
  var segundosLing = Math.round(tempoLingFinal * 3600);

  //calculo de horas Matemática
  var horasMat = segundosMat / 3600;
  var horasMatFinal = Math.trunc(horasMat);

  //calculo de horas Biologia
  var horasBio = segundosBio / 3600;
  var horasBioFinal = Math.trunc(horasBio);
  //calculo de horas Quimica
  var horasQuim = segundosQuim / 3600;
  var horasQuimFinal = Math.trunc(horasQuim);
  //calculo de horas Física
  var horasFis = segundosFis / 3600;
  var horasFisFinal = Math.trunc(horasFis);
  //calculo de horas Historia
  var horasHis = segundosHis / 3600;
  var horasHisFinal = Math.trunc(horasHis);
  //calculo de horas Geografia
  var horasGeo = segundosGeo / 3600;
  var horasGeoFinal = Math.trunc(horasGeo);
  //calculo de horas Filosofia e Sociologia
  var horasFs = segundosFs / 3600;
  var horasFsFinal = Math.trunc(horasFs);
  //calculo de horas Linguagens
  var horasLing = segundosLing / 3600;
  var horasLingFinal = Math.trunc(horasLing);

  //calculo de minutos Matematica - nao é minutos total
  var minutosMat = (segundosMat - 3600 * horasMatFinal) / 60;
  var minutosMatFinal = Math.round(minutosMat);

  //calculo minutos total Matemática
  var minutosMat2 = horasMat * 60;
  var blocosMat = minutosMat2 / 50;

  //calculo de minutos Biologia
  var minutosBio = (segundosBio - 3600 * horasBioFinal) / 60;
  var minutosBioFinal = Math.round(minutosBio);

  //calculo minutos total Biologia
  var minutosBio2 = horasBio * 60;
  var blocosBio = minutosBio2 / 50;

  //calculo de minutos Quimica
  var minutosQuim = (segundosQuim - 3600 * horasQuimFinal) / 60;
  var minutosQuimFinal = Math.round(minutosQuim);

  //calculo minutos total Quimica
  var minutosQuim2 = horasQuim * 60;
  var blocosQuim = minutosQuim2 / 50;

  //calculo de minutos Fisica
  var minutosFis = (segundosFis - 3600 * horasFisFinal) / 60;
  var minutosFisFinal = Math.round(minutosFis);

  //calculo minutos total Fisica
  var minutosFis2 = horasFis * 60;
  var blocosFis = minutosFis2 / 50;

  //calculo de minutos Historia
  var minutosHis = (segundosHis - 3600 * horasHisFinal) / 60;
  var minutosHisFinal = Math.round(minutosHis);

  //calculo minutos total Historia
  var minutosHis2 = horasHis * 60;
  var blocosHis = minutosHis2 / 50;

  //calculo de minutos Geografia
  var minutosGeo = (segundosGeo - 3600 * horasGeoFinal) / 60;
  var minutosGeoFinal = Math.round(minutosGeo);

  //calculo minutos total Geografia
  var minutosGeo2 = horasGeo * 60;
  var blocosGeo = minutosGeo2 / 50;

  //calculo de minutos Filosofia e Sociologia
  var minutosFs = (segundosFs - 3600 * horasFsFinal) / 60;
  var minutosFsFinal = Math.round(minutosFs);

  //calculo minutos total Filosofia e Sociologia
  var minutosFs2 = horasFs * 60;
  var blocosFs = minutosFs2 / 50;

  //calculo de minutos Linguagens
  var minutosLing = (segundosLing - 3600 * horasLingFinal) / 60;
  var minutosLingFinal = Math.round(minutosLing);

  //calculo minutos total Linguagens
  var minutosLing2 = horasLingFinal * 60;
  var blocosLing = minutosLing2 / 50;

  return (
    <div>
      {props.click != null ? (
        <container>
          <div>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Matérias</th>
                  <th>Tempo de estudo semanal por matéria</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Matemática</td>
                  <td>
                    {horasMatFinal}h e {minutosMatFinal}m
                  </td>
                </tr>
                <tr>
                  <td>Biologia</td>
                  <td>
                    {horasBioFinal}h e {minutosBioFinal}m
                  </td>
                </tr>
                <tr>
                  <td>Química</td>
                  <td>
                    {horasQuimFinal}h e {minutosQuimFinal}m
                  </td>
                </tr>
                <tr>
                  <td>Física</td>
                  <td>
                    {horasFisFinal}h e {minutosFisFinal}m
                  </td>
                </tr>
                <tr>
                  <td>História</td>
                  <td>
                    {horasHisFinal}h e {minutosHisFinal}m
                  </td>
                </tr>
                <tr>
                  <td>Geografia</td>
                  <td>
                    {horasGeoFinal}h e {minutosGeoFinal}m
                  </td>
                </tr>
                <tr>
                  <td>Sociologia/Filosofia</td>
                  <td>
                    {horasFsFinal}h e {minutosFsFinal}m
                  </td>
                </tr>
                <tr>
                  <td>Linguagens</td>
                  <td>
                    {horasLingFinal}h e {minutosLingFinal}m
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <h2>Blocos de 50 minutos de estudo</h2>
            <t>
              "observe que o valor total de horas deu maior do que vc preencheu
              inicialmente para poder ter um bloco com mínimo 50 minutos. "{" "}
            </t>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <td>&nbsp;</td>
                  <th>Seg</th>
                  <th>Ter</th>
                  <th>Qua</th>
                  <th>Qui</th>
                  <th>Sex</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Matemática</th>
                  <td>{Math.round(blocosMat / 5)}</td>
                  <td>{Math.round(blocosMat / 5)}</td>
                  <td>{Math.round(blocosMat / 5)}</td>
                  <td>{Math.round(blocosMat / 5)}</td>
                  <td>{Math.round(blocosMat / 5)}</td>
                </tr>

                <tr>
                  <th>Biologia</th>
                  <td>{Math.round(blocosBio / 3)}</td>
                  <th>-</th>
                  <td>{Math.round(blocosBio / 3)}</td>
                  <th>-</th>
                  <td>{Math.round(blocosBio / 3)}</td>
                </tr>
                <tr>
                  <th>Química</th>
                  <td>{Math.round(blocosQuim / 3)}</td>
                  <th>-</th>
                  <td>{Math.round(blocosQuim / 3)}</td>
                  <td>-</td>
                  <td>{Math.round(blocosQuim / 3)}</td>
                </tr>
                <tr>
                  <th>Física</th>
                  <td>{Math.round(blocosFis / 3)}</td>
                  <td>-</td>
                  <td>{Math.round(blocosFis / 3)}</td>
                  <td>-</td>
                  <td>{Math.round(blocosFis / 3)}</td>
                </tr>
                <tr>
                  <th>História</th>
                  <th>-</th>
                  <td>{Math.ceil(blocosHis / 2)}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{Math.ceil(blocosHis / 2)}</td>
                </tr>
                <tr>
                  <th>Geografia</th>
                  <td>-</td>
                  <td>{Math.ceil(blocosGeo / 2)}</td>
                  <td>-</td>
                  <td>{Math.ceil(blocosGeo / 2)}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Fil/Soc</th>
                  <td>-</td>
                  <td>-</td>
                  <td>{Math.ceil(blocosFs)}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Linguagens</th>
                  <td>{Math.ceil(blocosLing / 3)}</td>
                  <td>-</td>
                  <td>{Math.ceil(blocosLing / 3)}</td>
                  <td>-</td>
                  <td>{Math.ceil(blocosLing / 3)}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <Button variant="warning" onClick={(e) => location.reload()}>
              Recalcular
            </Button>
          </div>
        </container>
      ) : null}
    </div>
  );
}
