    // Função para fechar o popup
    function fecharPopup() {
      document.getElementById('popup').style.display = 'none';
    }

    // Exibir popup ao carregar a página
    window.onload = function () {
      document.getElementById('popup').style.display = 'flex';
    };