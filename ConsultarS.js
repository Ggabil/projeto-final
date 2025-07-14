let res = document.getElementById("res")
let listar = document.getElementById("consultar")

consultar.addEventListener("click", (e)=>{
    e.preventDefault()
    let codSaida = Number(document.getElementById("codigo").value)
    res.innerHTML = ""
    fetch(`http://localhost:8081/saida/${codSaida}`, {
        method: "GET",
        headers: {
            "Content-Type": "Application/JSON"
        }
    })
    .then(resp => resp.json())
    .then(val => {
        res.innerHTML = `<table>
        <tr>
          <th>Data da Solicitação</th>
          <th>Hora de Saída</th>
          <th>Hora de Retorno</th>
          <th>Motivo</th>
          <th>Destino</th>
          <th>Status</th>
          <th>Aluno</th>
          <th>Professor</th>
        </tr>
        <tr>             
          <td>${val.dataSolicitacao}</td>
          <td>${val.horaSaida}</td>
          <td>${val.horaRetorno}</td>
          <td>${val.motivo}</td>
          <td>${val.localDestino}</td>
          <td>${val.status}</td>
          <td>${val.nomeAluno}</td>
          <td>${val.nomeProfessor}</td>
        </tr>
          </table>`
        })
    .catch((err)=>{
        console.error("Erro: ", err)
    })
})