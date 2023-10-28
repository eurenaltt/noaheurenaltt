// Função para alternar o tema claro/escuro
const switcher = document.querySelector('.button');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');

    if (isDarkTheme) {
        this.textContent = 'Light';
    } else {
        this.textContent = 'Dark';
    }
});

// Exemplo de objeto de tradução para inglês e espanhol
const translations = {
    'greeting': {
        'en': 'Hello',
        'es': 'Hola'
    },
    'welcome-message': {
        'en': 'Welcome to our website!',
        'es': '¡Bienvenido a nuestro sitio web!'
    },
    // Adicione mais traduções conforme necessário
};

// Função para definir o idioma da página
function setLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][language]) {
            element.textContent = translations[key][language];
        }
    });
}

// Captura o elemento select do idioma
const languageSelect = document.getElementById('language-select');

// Adiciona um ouvinte de evento para alterar o idioma quando o usuário seleciona uma opção
languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    setLanguage(selectedLanguage);
});

// Exemplo de uso para definir o idioma como inglês no carregamento da página
setLanguage('en');

// Variável para armazenar o reprodutor de música do YouTube
let player;

// Função para carregar o reprodutor de música do YouTube
function loadYouTubePlayer(playlistURL) {
    player = new YT.Player('player', {
        height: '360', // Altura do reprodutor
        width: '640', // Largura do reprodutor
        playerVars: {
            'listType': 'playlist', // Tipo de lista de reprodução
            'list': playlistURL, // URL da lista de reprodução do YouTube
        },
        events: {
            'onReady': onPlayerReady,
            // Outros eventos do reprodutor podem ser adicionados aqui
        },
    });
}

// Função chamada quando o reprodutor de música do YouTube estiver pronto
function onPlayerReady(event) {
    // Você pode adicionar ações aqui, como reproduzir automaticamente a playlist, se desejar
}

// Captura o elemento de entrada de texto onde o usuário colará o URL da playlist
const playlistInput = document.getElementById('playlist-input');

// Captura o botão para carregar a playlist
const loadButton = document.getElementById('load-button');

// Adiciona um ouvinte de evento para carregar a playlist quando o botão for clicado
loadButton.addEventListener('click', function() {
    const playlistURL = playlistInput.value;
    loadYouTubePlayer(playlistURL);
});
