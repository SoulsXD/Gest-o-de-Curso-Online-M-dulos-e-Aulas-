# Projeto: Gestão de Cursos Online

Plataforma EAD para gerenciar múltiplos cursos estruturados em módulos e aulas.

## Estrutura de Arquivos

Projeto7/

├── index.html       # Interface principal  
├── style.css        # Estilos  
├── script.ts        # Código TypeScript  
└── README.md        # Instruções de uso

## Tecnologias

- TypeScript
- HTML5
- CSS3

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
git clone https://github.com/seu-usuario/Projeto7-GestaoCursosOnline.git
cd Projeto7-GestaoCursosOnline
```

2. Compile o TypeScript:
```bash
tsc script.ts
```

3. Abra o arquivo `index.html`

## Como Usar

1. Escolha o tipo de nó: Curso, Módulo ou Aula
2. Insira o título
3. Selecione o nó pai
4. Clique em "Adicionar"
5. Para editar, clique no botão "✏️"
6. Para remover, clique no botão "❌"
7. Para mover para cima ou para baixo, use "⬆️" ou "⬇️"
8. Clique em "Exportar HTML" para gerar o código da hierarquia

## Funcionalidades

- Adição de cursos, módulos e aulas
- Validação da hierarquia:
- Cursos só no nível raiz
- Módulos só dentro de cursos
- Aulas só dentro de módulos
- Títulos únicos por tipo dentro do mesmo pai
- Edição, remoção e reordenação de nós
- Exportação em HTML da estrutura hierárquica

## Exemplo de Uso

1. Criar um curso:
- Título: TSI
- Tipo: Curso
- Pai: Cursos

2. Criar um módulo:
- Título: Módulo 1
- Tipo: Módulo
- Pai: TSI

3. Criar uma aula:
- Título: Aula 1
- Tipo: Aula
- Pai: Módulo 1
