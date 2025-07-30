# Projeto: Gestão de Cursos Online

Plataforma EAD para gerenciar múltiplos cursos estruturados em módulos e aulas.

Projeto7-GestaoCursosOnline/
├── index.html       # Interface principal
├── style.css        # Estilos CSS
├── script.ts        # Lógica TypeScript (compile para script.js)
└── README.md        # Documentação

## Tecnologias

- **TypeScript**: modelagem de árvore e manipulação de DOM  
- **HTML5**: estrutura da interface  
- **CSS3**: estilos responsivos e hierárquicos

## 🔧 Instalação e Uso

1. **Clone o repositório**

   ```bash
   git clone 
   cd
2. **Compile o TypeScript
3. **abra o index.html
4. **Interaja com a interface


##Funcionalidades

Inserção dinâmica de nós: cursos, módulos e aulas

Validação de hierarquia:

   Cursos apenas no nível raiz

   Módulos apenas dentro de cursos

   Aulas apenas dentro de módulos

Títulos únicos por nível (permite aulas com mesmo nome em módulos diferentes)

  Edição inline: altere o nome pressionando ✏️

   Remoção: delete nós com ❌

   Reordenação: mova nós para cima ou para baixo com ⬆️/⬇️

  Visualização gráfica via listas aninhadas, indentação e linhas de conexão

   Exportação: obtenha código HTML hierárquico para reutilização

Uso

Selecione o tipo de nó: Curso, Módulo ou Aula.

Insira o título.

Escolha o nó pai no menu.

Clique em "Adicionar" para inserir na árvore.

Para editar, remover ou reordenar, use os botões ao lado de cada item.

Clique em "Exportar HTML" para obter o código hierárquico.

Funcionalidades

Inserção de cursos, módulos e aulas.

Validação de hierarquia: cursos na raiz, módulos em cursos, aulas em módulos.

Títulos únicos por nível.

Edição, remoção e reordenação de nós.

Exportação da estrutura em HTML.

Exemplos

Criar curso "TSI"

Adicionar módulo "Módulo 1" em "TSI"

Adicionar aula "Aula 1" em "Módulo 1"

Exportar código HTML

Próximos Passos

Salvar dados em LocalStorage ou backend.

Implementar drag & drop.

Adicionar busca e filtros.

Criar testes automatizados.
