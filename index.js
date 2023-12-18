let content = document.querySelector('#content')

let apiUrl = "http://localhost:8080/cursos"


fetch(apiUrl)
    .then(response => {
        return response.json()
            .then((data) => {
                console.log(data)
                listCursos(data)
            }).catch(erro => {
                console.log('erro', erro)
            })
    })



function listCursos(cursos) {
    console.log(cursos)
    cursos.forEach((cursos) => {

        const h1 = document.createElement("h1")
        h1.textContent = `Nome do curso: ${cursos.nome}`
        content.appendChild(h1)

        const h2 = document.createElement("h2")
        h2.textContent = `Carga horaria: ${cursos.cargaHoraria}`
        content.appendChild(h2)

        const h3 = document.createElement("h3")
        h3.textContent = `Data de cadastro: ${cursos.dataDeCadastro}`
        content.appendChild(h3)
        console.log(cursos)

        const container = document.createElement("div")

        if (cursos.alunosNoCurso && cursos.alunosNoCurso.length > 0) {
            const listaDeAlunos = document.createElement("ul");

            cursos.alunosNoCurso.forEach(alunos => {
                const itemAluno = document.createElement("li")
                itemAluno.textContent = `Nome: ${alunos.nome}, CPF: ${alunos.cpf}`;
                listaDeAlunos.appendChild(itemAluno)
            })
            container.appendChild(listaDeAlunos)
        }
        content.appendChild(container)


    });

}

apiUrl = "http://localhost:8080/alunos"

fetch(apiUrl)
    .then(response => {
        return response.json()
            .then((data) => {
                console.log("data",data)
                listAlunos(data)
            }).catch(erro => {
                console.log('erro', erro)
            })
    })

function listAlunos(aluno) {
    console.log(aluno)
    aluno.forEach((aluno) => {
        const h1 = document.createElement("h1")
        h1.textContent = `Nome: ${aluno.nome}`
        content.appendChild(h1)

        const h2 = document.createElement("h2")
        h2.textContent = `email: ${aluno.email}`
        content.appendChild(h2)
        const h3 = document.createElement("h3")
        h3.textContent = `Endereço: ${aluno.endereco}`
        content.appendChild(h3)
        const h4 = document.createElement("h3")
        h4.textContent = `Cep: ${aluno.cep}`
        content.appendChild(h4)
        const h5 = document.createElement("h3")
        h5.textContent = `Numero de telefone: ${aluno.numeroDeTelefone}, Curso: ${aluno.curso.nome}`
        content.appendChild(h5)

        const container = document.createElement("div")

        if (aluno.cursos && aluno.cursos.length > 0) {
            const listaDeCursos = document.createElement("ul");
            console.log("ARRAY", aluno.cursos)


            aluno.cursos.forEach(cursos => {
                const itemCurso = document.createElement("li")
                itemCurso.textContent = cursos.nome
                itemCurso.textContent = cursos.dataDeCadastro
                itemCurso.textContent = cursos.cargaHoraria
                listaDeCursos.appendChild(itemCurso)
            })
            container.appendChild(listaDeCursos)
        }
        content.appendChild(container)
    });

}