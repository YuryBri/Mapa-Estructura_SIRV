const folderStructure = [
    {
        name: "ecommerce",
        children: [
            {
                name: "home",
                description: "Recursos visuales y contenido principal de la página de inicio",
                children: [
                    {
                        name: "alkosto",
                        children: [
                            { name: "botonera-categorias" },
                            { name: "beneficios" },
                            { name: "medios-pago" },
                            {
                                name: "visuales",
                                children: [
                                    {
                                        name: "2025",
                                        children: [
                                            {
                                                name: "diciembre",
                                                children: [{ name: "navidad" }, { name: "blackdays" }]
                                            }
                                        ]
                                    },
                                    {
                                        name: "2026",
                                        children: [
                                            {
                                                name: "enero",
                                                children: [{ name: "cocina-nueva" }, { name: "estrenar-te-renueva" }, { name: "general" }]
                                            },
                                            { name: "febrero" },
                                            { name: "marzo" },
                                            { name: "recurrentes" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "ktronix",
                        children: [
                            { name: "botonera-categorias" },
                            { name: "beneficios" },
                            { name: "medios-pago" },
                            {
                                name: "visuales",
                                children: [
                                    {
                                        name: "2025",
                                        children: [
                                            { name: "noviembre", children: [{ name: "blackdays" }] },
                                            { name: "diciembre", children: [{ name: "navidad" }] }
                                        ]
                                    },
                                    {
                                        name: "2026",
                                        children: [
                                            { name: "enero", children: [{ name: "inicia-2026" }] },
                                            { name: "recurrentes" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "alkomprar",
                        children: [
                            { name: "botonera-categorias" },
                            { name: "beneficios" },
                            { name: "medios-pago" },
                            {
                                name: "visuales",
                                children: [
                                    {
                                        name: "2026",
                                        children: [
                                            { name: "enero", children: [{ name: "general" }, { name: "evento" }, { name: "tecno" }] },
                                            { name: "febrero" },
                                            { name: "marzo" },
                                            { name: "recurrentes" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "kalley",
                        children: [
                            { name: "botonera-categorias" },
                            { name: "beneficios" },
                            { name: "medios-pago" },
                            { name: "zona-seo" },
                            {
                                name: "visuales",
                                children: [
                                    {
                                        name: "2026",
                                        children: [
                                            { name: "enero", children: [{ name: "general" }, { name: "evento" }] },
                                            { name: "recurrentes" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "dinamicos",
                description: "Módulos dinámicos, banners HTML y carruseles que cambian frecuentemente",
                children: [
                    {
                        name: "alkosto",
                        children: [
                            { name: "2025", children: [{ name: "noviembre" }, { name: "diciembre" }] },
                            {
                                name: "2026",
                                children: [
                                    { name: "enero", children: [{ name: "general" }, { name: "evento" }] },
                                    { name: "febrero", children: [{ name: "general" }, { name: "evento" }] }
                                ]
                            }
                        ]
                    },
                    {
                        name: "ktronix",
                        children: [
                            {
                                name: "2026",
                                children: [
                                    { name: "enero", children: [{ name: "general" }, { name: "evento" }] },
                                    { name: "febrero", children: [{ name: "general" }, { name: "evento" }] }
                                ]
                            }
                        ]
                    },
                    {
                        name: "alkomprar",
                        children: [
                            {
                                name: "2026",
                                children: [
                                    { name: "enero", children: [{ name: "general" }, { name: "evento" }] },
                                    { name: "febrero", children: [{ name: "general" }, { name: "evento" }] }
                                ]
                            }
                        ]
                    },
                    {
                        name: "kalley",
                        children: [
                            {
                                name: "2026",
                                children: [
                                    { name: "enero", children: [{ name: "general" }, { name: "evento" }] },
                                    { name: "febrero", children: [{ name: "general" }, { name: "evento" }] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "banners",
                description: "Banners comerciales y creativos organizados por categoría y semana",
                children: [
                    {
                        name: "alkosto",
                        children: [
                            {
                                name: "2026",
                                children: [
                                    { name: "cel", children: [{ name: "ene-3" }, { name: "ene-10" }, { name: "ene-17" }] },
                                    { name: "comp" },
                                    { name: "tv" },
                                    { name: "emails" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "ktronix",
                        children: [
                            {
                                name: "2026",
                                children: [
                                    { name: "cel", children: [{ name: "ene-3" }, { name: "ene-10" }, { name: "ene-17" }] },
                                    { name: "comp" },
                                    { name: "tv" },
                                    { name: "emails" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "alkomprar",
                        children: [
                            {
                                name: "2026",
                                children: [
                                    { name: "cel", children: [{ name: "ene-3" }, { name: "ene-10" }, { name: "ene-17" }] },
                                    { name: "comp" },
                                    { name: "tv" },
                                    { name: "emails" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "kalley",
                        children: [
                            {
                                name: "2026",
                                children: [
                                    { name: "cel", children: [{ name: "ene-3" }, { name: "ene-10" }, { name: "ene-17" }] },
                                    { name: "comp" },
                                    { name: "tv" },
                                    { name: "emails" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "catalog",
                description: "Recursos del catálogo de productos (Separata) - ALKOSTO y KTRONIX",
                children: [
                    {
                        name: "alkosto",
                        children: [
                            { name: "2026", children: [{ name: "enero" }, { name: "febrero" }, { name: "marzo" }] }
                        ]
                    },
                    {
                        name: "ktronix",
                        children: [
                            { name: "2026", children: [{ name: "enero" }, { name: "febrero" }, { name: "marzo" }] }
                        ]
                    }
                ]
            },
            {
                name: "landings",
                description: "Recursos para páginas de marca, categorías, institucional y blogs",
                children: [
                    {
                        name: "alkosto",
                        children: [
                            { name: "brands", children: [{ name: "cristar" }, { name: "hankook" }] },
                            { name: "blogs" },
                            { name: "categorias", children: [{ name: "cam" }, { name: "jug" }, { name: "hog" }] },
                            { name: "institucional", children: [{ name: "plan-retoma" }] },
                            { name: "ofertas" }
                        ]
                    },
                    {
                        name: "ktronix",
                        children: [
                            { name: "brands" },
                            { name: "blogs" },
                            { name: "ofertas" }
                        ]
                    },
                    {
                        name: "alkomprar",
                        children: [
                            { name: "brands" },
                            { name: "blogs" },
                            { name: "ofertas" }
                        ]
                    },
                    {
                        name: "kalley",
                        children: [
                            { name: "brands" },
                            { name: "blogs" },
                            { name: "categorias", children: [{ name: "cam" }, { name: "jug" }, { name: "hog" }] },
                            { name: "institucional", children: [{ name: "plan-retoma" }] },
                            { name: "ofertas" }
                        ]
                    }
                ]
            },
            {
                name: "algolia",
                description: "Donde se almacenan las imagenes de las facetas",
                children: [
                    { name: "marcas" },
                    { name: "logos" },
                    { name: "categorias" }
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const treeContainer = document.getElementById('folder-tree');

    // Generar el HTML del árbol recursivamente
    function createTreeHtml(data, currentPath = '') {
        let html = '<ul>';
        data.forEach(item => {
            const hasChildren = item.children && item.children.length > 0;
            const itemPath = currentPath ? `${currentPath}/${item.name}` : item.name;

            // Mantener solo el nodo raíz abierto por defecto (ecommerce)
            const isOpen = currentPath === '' ? 'open' : '';
            const isExpandedIcon = isOpen ? 'expanded' : '';
            const folderTypeIcon = isOpen || hasChildren ? 'fa-folder' : 'fa-folder'; // Se puede usar fa-folder-open
            const iconHTML = hasChildren ? `<i class="fas fa-chevron-right toggle-icon ${isExpandedIcon}"></i>` : '';
            const folderDesc = item.description ? `<span class="folder-desc">${item.description}</span>` : '';

            html += `<li class="${hasChildren ? 'has-children ' + isOpen : ''}" data-name="${item.name.toLowerCase()}">
                <div class="tree-item" title="Ruta: ${itemPath}">
                    <span class="icon-container">${iconHTML}</span>
                    <i class="fas ${folderTypeIcon} folder-icon"></i>
                    <div class="folder-details">
                        <div class="folder-name-container">
                            <span class="folder-name">${item.name}</span>
                            <span class="path-preview">/${itemPath}</span>
                        </div>
                        ${folderDesc}
                    </div>
                </div>`;

            if (hasChildren) {
                html += createTreeHtml(item.children, itemPath);
            }

            html += '</li>';
        });
        html += '</ul>';
        return html;
    }

    // Insertar el árbol en el DOM
    treeContainer.innerHTML = createTreeHtml(folderStructure);

    // Lógica para expandir/colapsar
    const folderItems = document.querySelectorAll('.has-children > .tree-item');
    folderItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const parentLi = this.parentElement;
            const icon = this.querySelector('.toggle-icon');
            const folderIcon = this.querySelector('.folder-icon');

            parentLi.classList.toggle('open');

            if (parentLi.classList.contains('open')) {
                icon.classList.add('expanded');
                folderIcon.classList.remove('fa-folder');
                folderIcon.classList.add('fa-folder-open');
            } else {
                icon.classList.remove('expanded');
                folderIcon.classList.remove('fa-folder-open');
                folderIcon.classList.add('fa-folder');
            }
        });
    });

    // Abrir la carpeta raíz y el primer nivel por defecto (visual icon update)
    document.querySelectorAll('.has-children.open > .tree-item > .folder-icon').forEach(icon => {
        icon.classList.remove('fa-folder');
        icon.classList.add('fa-folder-open');
    });

    // Expandir Todo
    document.getElementById('btnExpandAll').addEventListener('click', () => {
        document.querySelectorAll('.has-children').forEach(li => {
            li.classList.add('open');
            const toggleIcon = li.querySelector('.toggle-icon');
            const folderIcon = li.querySelector('.folder-icon');
            if (toggleIcon) toggleIcon.classList.add('expanded');
            if (folderIcon) {
                folderIcon.classList.remove('fa-folder');
                folderIcon.classList.add('fa-folder-open');
            }
        });
    });

    // Contraer Todo
    document.getElementById('btnCollapseAll').addEventListener('click', () => {
        document.querySelectorAll('.has-children').forEach(li => {
            // Dejar la raíz abierta
            if (li.querySelector('.folder-name').innerText === 'ecommerce') return;

            li.classList.remove('open');
            const toggleIcon = li.querySelector('.toggle-icon');
            const folderIcon = li.querySelector('.folder-icon');
            if (toggleIcon) toggleIcon.classList.remove('expanded');
            if (folderIcon) {
                folderIcon.classList.remove('fa-folder-open');
                folderIcon.classList.add('fa-folder');
            }
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const treeItems = document.querySelectorAll('.tree-item');
        let hasMatches = false;

        treeItems.forEach(item => {
            item.classList.remove('highlight');
        });

        if (term === '') {
            noResults.classList.add('hidden');
            treeContainer.classList.remove('hidden');
            return;
        }

        let firstMatch = true;

        treeItems.forEach(item => {
            const folderName = item.querySelector('.folder-name').innerText.toLowerCase();
            if (folderName.includes(term)) {
                item.classList.add('highlight');
                hasMatches = true;

                // Expandir padres para asegurar que se vea
                let parent = item.closest('li').parentElement.closest('li');
                while (parent && parent.classList.contains('has-children')) {
                    parent.classList.add('open');
                    const toggleIcon = parent.querySelector('.toggle-icon');
                    const folderIcon = parent.querySelector('.folder-icon');
                    if (toggleIcon) toggleIcon.classList.add('expanded');
                    if (folderIcon) {
                        folderIcon.classList.remove('fa-folder');
                        folderIcon.classList.add('fa-folder-open');
                    }
                    parent = parent.parentElement.closest('li');
                }

                if (firstMatch) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstMatch = false;
                }
            }
        });

        if (hasMatches) {
            noResults.classList.add('hidden');
            treeContainer.classList.remove('hidden');
        } else {
            noResults.classList.remove('hidden');
            treeContainer.classList.add('hidden');
        }
    });
});
