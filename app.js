function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa= document.getElementById("campo-pesquisa").value
   
    //se campoPesquisa for uma staring sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo antes</p>"
    return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase ()
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
  
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descrição = dado.descrição.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descrição-meta">${dado.descrição}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
      }
      
      if (!resultados) {
       resultados = "<p>Você esta com sorte, nada foi encontrado.</p>"
      }
    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }


