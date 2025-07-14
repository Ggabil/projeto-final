let res = document.getElementById('res')
let atualizar = document.getElementById('atualizar')

atualizar.addEventListener("click", (e) => {
    e.preventDefault()
    let codAluno = Number(document.getElementById("id").value)

    let id = document.getElementById("id").value
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let matricula = document.getElementById("matricula").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value

    const valores = {
    codAluno: id,
    nome: nome,
    sobrenome: sobrenome,
    matricula: matricula,
    telefone: telefone,
    email: email
    }
    res.innerHTML = ""
    fetch(`http://localhost:8081/aluno/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "Application/JSON"
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(() => {
        res.innerHTML = `
<table>
  <tr>
   <th>id</th>
   <th>Nome</th>
   <th>Sobrenome</th>
    <th>Matrícula</th>
    <th>Telefone</th>
    <th>Email</th>
   </tr>
  <tr>
<td>${id}</td>
<td>${nome}</td>
<td>${sobrenome}</td>
<td>${matricula}</td>
<td>${telefone}</td>
<td>${email}</td>
</tr>
</table>`
    })
})