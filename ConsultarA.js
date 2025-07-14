let res = document.getElementById("res")
let listar = document.getElementById("consultar")

consultar.addEventListener("click", (e)=>{
    e.preventDefault()
    let codAluno = Number(document.getElementById("id").value)
    res.innerHTML = `<table>
    <tr>
      <th>nome</th>
      <th>sobrenome</th>
      <th>matricula</th>
      <th>telefone</th>
      <th>email</th>
    </tr>`
    res.innerHTML = ""
    fetch(`http://localhost:8081/aluno/${codAluno}`, {
        method: "GET",
        headers: {
            "Content-Type": "Application/JSON"
        }
    })
    .then(resp => resp.json())
    .then(val => {
     res.innerHTML = `<table>
 <tr>
     <th>nome</th>
      <th>sobrenome</th>
      <th>matricula</th>
      <th>telefone</th>
      <th>email</th>
 </tr>
    <tr>
     <td>${val.nome}</td>
     <td>${val.sobrenome}</td>
     <td>${val.matricula}</td>
     <td>${val.telefone}</td>
     <td>${val.email}</td>
 </tr>
     </table>`
        })
    .catch((err)=>{
        console.error("Erro: ", err)
    })
})