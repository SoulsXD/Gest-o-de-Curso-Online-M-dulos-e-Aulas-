// Definição de tipos e classe de árvore
type NodeType = 'root' | 'course' | 'module' | 'lesson';

class TreeNode {
  id: string;
  title: string;
  type: NodeType;
  children: TreeNode[] = [];

  constructor(title: string, type: NodeType) {
    // ID curto para uso interno
    this.id = crypto.randomUUID().slice(0, 8);
    this.title = title;
    this.type = type;
  }

  addChild(node: TreeNode) { this.children.push(node); }

  findById(id: string): TreeNode | null {
    if (this.id === id) return this;
    for (const c of this.children) {
      const f = c.findById(id);
      if (f) return f;
    }
    return null;
  }

  traverse(cb: (node: TreeNode, parent: TreeNode | null) => void, parent: TreeNode | null = null) {
    cb(this, parent);
    this.children.forEach(c => c.traverse(cb, this));
  }
}

// Nó raiz para agrupar todos os cursos
const root = new TreeNode('Cursos', 'root');

document.addEventListener('DOMContentLoaded', () => {
  const titleInput = document.getElementById('node-title') as HTMLInputElement;
  const typeSelect = document.getElementById('node-type') as HTMLSelectElement;
  const parentSelect = document.getElementById('parent-select') as HTMLSelectElement;
  const addBtn = document.getElementById('add-node') as HTMLButtonElement;
  const exportBtn = document.getElementById('export-html') as HTMLButtonElement;
  const treeContainer = document.getElementById('course-tree') as HTMLUListElement;
  const outputArea = document.getElementById('exported-code') as HTMLTextAreaElement;

  function refreshParentOptions() {
    parentSelect.innerHTML = '<option value="">(Selecione o pai)</option>';
    root.traverse((node) => {
      // Permitir escolha de pais conforme hierarquia
      if (
        (typeSelect.value === 'course' && node.type === 'root') ||
        (typeSelect.value === 'module' && node.type === 'course') ||
        (typeSelect.value === 'lesson' && node.type === 'module')
      ) {
        parentSelect.innerHTML += `<option value="${node.id}">${node.title}</option>`;
      }
    });
  }

  function render() {
    refreshParentOptions();
    treeContainer.innerHTML = '';

    function build(node: TreeNode, parentEl: HTMLElement, parentNode: TreeNode | null) {
      if (node.type === 'root') {
        node.children.forEach(c => build(c, treeContainer, root));
        return;
      }
      const li = document.createElement('li');
      li.className = `tree-node ${node.type}`;
      const span = document.createElement('span'); span.textContent = node.title;

      // Ações
      const edit = document.createElement('button'); edit.textContent = '✏️';
      edit.onclick = () => { const nt = prompt('Novo título:', node.title); if (nt) { node.title = nt; render(); }};
      const rem = document.createElement('button'); rem.textContent = '❌';
      rem.onclick = () => { if (parentNode) { parentNode.children = parentNode.children.filter(x => x !== node); render(); }};
      const up = document.createElement('button'); up.textContent = '⬆️';
      up.onclick = () => { if (parentNode) { const idx = parentNode.children.indexOf(node); if (idx>0) { [parentNode.children[idx-1], parentNode.children[idx]]=[parentNode.children[idx],parentNode.children[idx-1]]; render(); } }};
      const down = document.createElement('button'); down.textContent = '⬇️';
      down.onclick = () => { if (parentNode) { const idx = parentNode.children.indexOf(node); if (idx<parentNode.children.length-1) { [parentNode.children[idx], parentNode.children[idx+1]]=[parentNode.children[idx+1],parentNode.children[idx]]; render(); } }};

      li.append(span, edit, rem, up, down);
      parentEl.appendChild(li);
      if (node.children.length) {
        const ul = document.createElement('ul'); li.appendChild(ul);
        node.children.forEach(c => build(c, ul, node));
      }
    }
    build(root, treeContainer, null);
  }

  typeSelect.onchange = refreshParentOptions;
  addBtn.onclick = () => {
    const title = titleInput.value.trim(); const type = typeSelect.value as NodeType;
    if (!title) return alert('Título obrigatório.');
    const parentId = parentSelect.value;
    const parentNode = parentId ? root.findById(parentId)! : null;
    // Checar pai válido
    if (!parentNode ||
      (type==='course' && parentNode.type!=='root') ||
      (type==='module' && parentNode.type!=='course') ||
      (type==='lesson' && parentNode.type!=='module')
    ) {
      return alert('Selecione um pai válido para este tipo.');
    }
    // Nomes únicos apenas entre irmãos
    const siblings = parentNode.children.map(x => x.title.toLowerCase());
    if (siblings.includes(title.toLowerCase())) return alert('Título duplicado neste nível.');

    parentNode.addChild(new TreeNode(title, type)); titleInput.value=''; render();
  };

  exportBtn.onclick = () => {
    let html = '<ul>';
    function exp(n: TreeNode) {
      if (n.type==='root') return;
      html+=`<li class=\"${n.type}\">${n.title}`;
      if(n.children.length){html+='<ul>'; n.children.forEach(exp); html+='</ul>';} html+='</li>';
    }
    root.children.forEach(exp);
    html+='</ul>'; outputArea.value=html;
  };

  render();
});
