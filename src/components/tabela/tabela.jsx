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

  //calculo de minutos Matematica
  var minutosMat = (segundosMat - 3600 * horasMatFinal) / 60;
  var minutosMatFinal = Math.round(minutosMat);

  //calculo de minutos Biologia
  var minutosBio = (segundosBio - 3600 * horasBioFinal) / 60;
  var minutosBioFinal = Math.round(minutosBio);

  //calculo de minutos Quimica
  var minutosQuim = (segundosQuim - 3600 * horasQuimFinal) / 60;
  var minutosQuimFinal = Math.round(minutosQuim);

  //calculo de minutos Fisica
  var minutosFis = (segundosFis - 3600 * horasFisFinal) / 60;
  var minutosFisFinal = Math.round(minutosFis);

  //calculo de minutos Historia
  var minutosHis = (segundosHis - 3600 * horasHisFinal) / 60;
  var minutosHisFinal = Math.round(minutosHis);

  //calculo de minutos Geografia
  var minutosGeo = (segundosGeo - 3600 * horasGeoFinal) / 60;
  var minutosGeoFinal = Math.round(minutosGeo);

  //calculo de minutos Filosofia e Sociologia
  var minutosFs = (segundosFs - 3600 * horasFsFinal) / 60;
  var minutosFsFinal = Math.round(minutosFs);

  //calculo de minutos Lnuagens
  var minutosLing = (segundosLing - 3600 * horasLingFinal) / 60;
  var minutosLingFinal = Math.round(minutosLing);

  return (
    <div>
      {props.click != null ? (
        <container>
          <div>
            <button onClick={(e) => location.reload()}>Recalcular</button>
          </div>
          <div>
            <table>
              <tr>
                <td></td>
                <th>Tempo de estudo semanal por matéria</th>
              </tr>
              <tr>
                <th>Matemática</th>
                <td>
                  {horasMatFinal}h e {minutosMatFinal}m
                </td>
              </tr>
              <tr>
                <th>Biologia</th>
                <td>
                  {horasBioFinal}h e {minutosBioFinal}m
                </td>
              </tr>
              <tr>
                <th>Química</th>
                <td>
                  {horasQuimFinal}h e {minutosQuimFinal}m
                </td>
              </tr>
              <tr>
                <th>Física</th>
                <td>
                  {horasFisFinal}h e {minutosFisFinal}m
                </td>
              </tr>
              <tr>
                <th>História</th>
                <td>
                  {horasHisFinal}h e {minutosHisFinal}m
                </td>
              </tr>
              <tr>
                <th>Geografia</th>
                <td>
                  {horasGeoFinal}h e {minutosGeoFinal}m
                </td>
              </tr>
              <tr>
                <th>Sociologia/Filosofia</th>
                <td>
                  {horasFsFinal}h e {minutosFsFinal}m
                </td>
              </tr>
              <tr>
                <th>Linguagens</th>
                <td>
                  {horasLingFinal}h e {minutosLingFinal}m
                </td>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <td>&nbsp;</td>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
              </tr>
              <tr>
                <th>Matemática</th>
              </tr>
              <tr>
                <th>Biologia</th>
              </tr>
              <tr>
                <th>Química</th>
              </tr>
              <tr>
                <th>Física</th>
              </tr>
              <tr>
                <th>História</th>
              </tr>
              <tr>
                <th>Geografia</th>
              </tr>
              <tr>
                <th>Fil/Soc</th>
              </tr>
              <tr>
                <th>Linguagens</th>
              </tr>
            </table>
          </div>{" "}
        </container>
      ) : null}
    </div>
  );
}
