        function verificar() {
            const nome = document.getElementById("nome").value;
            const matricula = document.getElementById("matricula").value;
            const nota1 = parseFloat(document.getElementById("nota1").value);
            const nota2 = parseFloat(document.getElementById("nota2").value);
            const media = (nota1 + nota2) / 2;
            const situacao = media >= 5 ? "Aprovado" : "Reprovado";

            const tabela = document.getElementById("resultado");
            const linha = tabela.insertRow();
            const colunaNome = linha.insertCell(0);
            const colunaMatricula = linha.insertCell(1);
            const colunaNota1 = linha.insertCell(2);
            const colunaNota2 = linha.insertCell(3);
            const colunaMedia = linha.insertCell(4);
            const colunaSituacao = linha.insertCell(5);

            colunaNome.innerHTML = nome;
            colunaMatricula.innerHTML = matricula;
            colunaNota1.innerHTML = nota1;
            colunaNota2.innerHTML = nota2;
            colunaMedia.innerHTML = media.toFixed(2); // Limitando para duas casas decimais

            // Adicionando cores
            if (situacao === "Aprovado") {
                colunaSituacao.innerHTML = `<span style="color: green;">${situacao}</span>`;
            } else {
                colunaSituacao.innerHTML = `<span style="color: red;">${situacao}</span>`;
            }
        }
    
