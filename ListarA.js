let res = document.getElementById('res');
let listar = document.getElementById('listar');

listar.addEventListener("click", (e) => {
    e.preventDefault();
    res.innerHTML = '';
    fetch("http://localhost:8081/aluno", {
        method: "GET",
        headers: {
            "Content-Type": "Application/JSON"
        }
    })
    .then(resp => resp.json())
    .then(valores => {
        let tabela = `<table border="1">
        <tr>
           <th>Nome</th>
           <th>Sobrenome</th>
           <th>Matricula</th>
           <th>Telefone</th>
           <th>Email</th>
       </tr>`;
       valores.forEach(val => {
        tabela += `
        <tr>
           <td>${val.nome}</td>
           <td>${val.sobrenome}</td>
           <td>${val.matricula}</td>
           <td>${val.telefone}</td>
           <td>${val.email}</td>
        </tr>`;
       });
       res.innerHTML = tabela;
    });
});