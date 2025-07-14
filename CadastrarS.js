let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener("click", (e) => {
    e.preventDefault()

    const dataSolicitacao = new Date().toISOString().slice(0, 10)
    
    let horaSaida = document.getElementById("horaSaida").value
    let horaRetorno = document.getElementById("horaRetorno").value
    let motivoSaida = document.getElementById("motivoSaida").value
    let local = document.getElementById("local").value
    let nomeAluno = document.getElementById("nome").value
    let codAluno = document.getElementById("codAluno").value
    let nomeProfessor = document.getElementById("nomeProfessor").value
    let codProfessor = document.getElementById("codProfessor").value

    const valores = {

            dataSolicitacao: dataSolicitacao,
            horaSaida: horaSaida,
            horaRetorno: horaRetorno,
            motivo: motivoSaida,
            localDestino: local,
            status: "pendente",
            nomeAluno: nomeAluno,
            nomeProfessor: nomeProfessor,
            aluno_cod: codAluno,
            professor_cod: codProfessor
    }
    res.innerHTML = ""
    fetch("http://localhost:8081/saida", {
        method: "POST",
        headers: {
            "Content-Type": "Application/JSON"
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(() => {
        res.innerHTML = `
<table>
  <tr>
   <th>horaSaida</th>
   <th>horaRetorno</th>
    <th>motivoSaida</th>
    <th>local</th>
    <th>statusSaida</th>
    <th>nome</th>
    <th>codAluno</th>
    <th>nomeProfessor</th>
    <th>codProfessor</th>
   </tr>
  <tr>
<td>${horaSaida}</td>
<td>${horaRetorno}</td>
<td>${motivoSaida}</td>
<td>${local}</td>
<td>pendente</td>
<td>${nomeAluno}</td>
<td>${codAluno}</td>
<td>${nomeProfessor}</td>
<td>${codProfessor}</td>
</tr>
</table>`
    })
})