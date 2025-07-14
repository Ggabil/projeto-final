let res = document.getElementById("res")
let atualizar = document.getElementById("atualizar")

atualizar.addEventListener("click", (e) => {
    e.preventDefault()

    let codSaida = Number(document.getElementById("codigo").value)
    

    let dataSolicitacao = document.getElementById("dataSolicitacao").value
    const dataAgora = String(dataSolicitacao)
    const data = dataAgora.slice(0,10)
    console.log(data)

    let horaSaida = document.getElementById("horaSaida").value
    let horaRetorno = document.getElementById("horaRetorno").value
    let motivo = document.getElementById("motivo").value
    let localDestino = document.getElementById("localDestino").value
    let status = document.getElementById("status").value
    let nomeAluno = document.getElementById("nomeAluno").value
    let aluno_cod = document.getElementById("aluno_id").value
    let nomeProfessor = document.getElementById("nomeProfessor").value
    let professor_cod = document.getElementById("professor_id").value

    const valores = {
        dataSolicitacao: data,
        horaSaida: horaSaida,
        horaRetorno: horaRetorno,
        motivo: motivo,
        localDestino: localDestino,
        status: status,
        nomeAluno: nomeAluno,
        aluno_cod: aluno_cod,
        nomeProfessor: nomeProfessor,
        professor_cod: professor_cod
    }

    res.innerHTML = ""

    fetch(`http://localhost:8081/saida/${codSaida}`, {
        method: "PUT",
        headers: {
            "Content-Type": "Application/JSON"
        },
        body: JSON.stringify(valores)
    })
        .then(resp => resp.body)
        .then(() => {
            res.innerHTML = `<table>
  <tr>
            <th>Codigo</th>
            <th>Data da Solicitação</th>
            <th>Hora de Saída</th>
            <th>Hora de Retorno</th>
            <th>Motivo</th>
            <th>Destino</th>
            <th>Status</th>
            <th>Aluno</th>
            <th>codigo do Aluno</th>
            <th>Professor</th>
            <th>Codigo do Professor</th>
  </tr>
  <tr>
            <td>${codSaida}</td>
            <td>${data}</td>
            <td>${horaSaida}</td>
            <td>${horaRetorno}</td>
            <td>${motivo}</td>
            <td>${localDestino}</td>
            <td>${status}</td>
            <td>${nomeAluno}</td>
            <td>${aluno_cod}</td>
            <td>${nomeProfessor}</td>
            <td>${professor_cod}</td>
  </tr>
</table>`
        })
})