// Array para armazenar os materiais de estudo
let materials = [];

// Função para criar um novo material na página
function displayMaterials() {
    const materialsList = document.getElementById('materialsList');
    materialsList.innerHTML = ''; // Limpa a lista de materiais

    materials.forEach((material, index) => {
        const materialDiv = document.createElement('div');
        materialDiv.classList.add('material');

        materialDiv.innerHTML = `
            <div class="info">
                <h3>${material.title}</h3>
                <p>${material.description}</p>
            </div>
            <button onclick="downloadMaterial(${index})">Baixar</button>
        `;

        materialsList.appendChild(materialDiv);
    });
}

// Função para simular o download do material
function downloadMaterial(index) {
    const material = materials[index];
    alert(`Você está baixando: ${material.title}`);
    // No futuro, aqui você integraria a funcionalidade para baixar o arquivo real
}

// Função para lidar com o envio do formulário de upload
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');

    const file = fileInput.files[0];
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (file && title && description) {
        // Cria um objeto para o material
        const material = {
            title: title,
            description: description,
            file: file, // Em um sistema real, você armazenaria o arquivo em um servidor
        };

        // Adiciona o material ao array e atualiza a lista
        materials.push(material);

        // Limpa os campos
        fileInput.value = '';
        titleInput.value = '';
        descriptionInput.value = '';

        // Exibe os materiais atualizados
        displayMaterials();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Seleciona o botão e o input file
const customButton = document.getElementById('customButton');
const fileInput = document.getElementById('fileInput');

// Adiciona um evento de clique no botão personalizado
customButton.addEventListener('click', function() {
    fileInput.click();  // Aciona o clique no input file oculto
});

// Quando um arquivo for selecionado, altere o texto do botão (opcional)
fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        customButton.textContent = `Arquivo Selecionado: ${fileInput.files[0].name}`;
    } else {
        customButton.textContent = 'Escolher Arquivo';
    }
});
