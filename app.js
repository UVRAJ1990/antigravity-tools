/**
 * Antigravity Tools - Application Controller
 */

let activeCategory = 'all';
let searchQuery = '';
let starredTools = JSON.parse(localStorage.getItem('ag_starred_tools') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderToolsGrid();
  setupEventListeners();
  updateStarredCount();

  // Check URL hash for direct tool deep-linking (e.g. #jwt-inspector)
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetTool = TOOLS.find(t => t.id === targetId);
    if (targetTool) {
      setTimeout(() => openToolWorkspace(targetTool), 100);
    }
  }
}

function renderToolsGrid() {
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = '';

  const filtered = TOOLS.filter(t => {
    const matchesCat = activeCategory === 'all' || t.cat === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesQuery = !q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.tag.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3>No tools found matching "${escapeXml(searchQuery)}"</h3>
        <p>Try searching for another keyword or switch category filters.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(tool => {
    const isStarred = starredTools.includes(tool.id);
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <div>
        <div class="tool-header">
          <div class="tool-icon">${tool.icon}</div>
          <button class="star-btn ${isStarred ? 'starred' : ''}" data-id="${tool.id}" title="Bookmark tool">
            ${isStarred ? '★' : '☆'}
          </button>
        </div>
        <h3>${escapeXml(tool.name)}</h3>
        <p>${escapeXml(tool.description)}</p>
      </div>
      <div class="tool-footer">
        <span class="tool-tag">${escapeXml(tool.tag)}</span>
        <span class="launch-btn">Open Tool →</span>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.star-btn')) {
        e.stopPropagation();
        toggleStar(tool.id);
        return;
      }
      openToolWorkspace(tool);
    });

    grid.appendChild(card);
  });

  document.getElementById('totalToolsCount').textContent = `${TOOLS.length} Active Tools`;
}

function setupEventListeners() {
  // Search Bar
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderToolsGrid();
  });

  // Category Filter Pills
  const catBtns = document.querySelectorAll('#categoryFilter .cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      renderToolsGrid();
    });
  });

  // Favorites Filter Button
  document.getElementById('favFilterBtn').addEventListener('click', () => {
    const gridTitleIcon = document.getElementById('gridTitleIcon');
    const gridTitleText = document.getElementById('gridTitleText');
    
    if (activeCategory === 'starred') {
      activeCategory = 'all';
      gridTitleIcon.textContent = '⚡';
      gridTitleText.textContent = 'All Market Utilities';
      document.querySelector('#categoryFilter .cat-btn[data-cat="all"]').classList.add('active');
    } else {
      activeCategory = 'starred';
      gridTitleIcon.textContent = '★';
      gridTitleText.textContent = 'Bookmarked Favorite Tools';
      document.querySelectorAll('#categoryFilter .cat-btn').forEach(b => b.classList.remove('active'));
    }

    renderToolsGrid();
  });

  // Modal Close Events
  document.getElementById('closeModalBtn').addEventListener('click', closeToolWorkspace);
  document.getElementById('workspaceModal').addEventListener('click', (e) => {
    if (e.target.id === 'workspaceModal') closeToolWorkspace();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeToolWorkspace();
  });
}

function toggleStar(toolId) {
  if (starredTools.includes(toolId)) {
    starredTools = starredTools.filter(id => id !== toolId);
    showToast('Removed from favorites');
  } else {
    starredTools.push(toolId);
    showToast('Added to favorites! ★');
  }
  localStorage.setItem('ag_starred_tools', JSON.stringify(starredTools));
  updateStarredCount();
  renderToolsGrid();
}

function updateStarredCount() {
  document.getElementById('starredCount').textContent = starredTools.length;
}

function openToolWorkspace(tool) {
  const modal = document.getElementById('workspaceModal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('workspaceBody');

  modalIcon.textContent = tool.icon;
  modalTitle.textContent = tool.name;
  modalBody.innerHTML = '';

  // 1. Render specific tool UI
  if (typeof tool.render === 'function') {
    tool.render(modalBody);
  } else {
    modalBody.innerHTML = '<p>Tool interface coming soon!</p>';
  }

  // 2. Append Comprehensive SEO, AEO & Technical Documentation Engine
  if (typeof appendToolSeoDocs === 'function') {
    appendToolSeoDocs(tool, modalBody);
  }

  // 3. Update Page Title & URL Hash for SEO deep linking
  window.location.hash = tool.id;
  document.title = `${tool.name} (100% Client-Side) | Antigravity Tools`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeToolWorkspace() {
  const modal = document.getElementById('workspaceModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  window.location.hash = '';
  document.title = 'Antigravity Tools - Next-Gen AI, Developer & Webmaster Suite';
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> <span>${escapeXml(msg)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
