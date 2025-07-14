let res = document.getElementById('res')
let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener("click", (e) => {
    e.preventDefault()
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let matricula = document.getElementById("matricula").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value

    const valores = {
    nome,
    sobrenome,
    matricula,
    telefone,
    email
    }
    res.innerHTML = ""
    fetch("http://localhost:8081/professor", {
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
   <th>Nome</th>
   <th>Sobrenome</th>
    <th>Matrícula</th>
    <th>Telefone</th>
    <th>Email</th>
   </tr>
  <tr>
<td>${nome}</td>
<td>${sobrenome}</td>
<td>${matricula}</td>
<td>${telefone}</td>
<td>${email}</td>
</tr>
</table>`
    })
})