document.addEventListener('DOMContentLoaded', function () {
    // Obtém referências aos elementos do DOM
    var btnAbrirMenu = document.getElementById('btn-menu');
    var btnFecharMenu = document.getElementById('menu-mobile');
    var menuMobile = document.querySelector('.menu-mobile');
    var overlayMenu = document.querySelector('.overlay-menu');

    // Adiciona um ouvinte de evento para o botão de abrir menu
    btnAbrirMenu.addEventListener('click', function () {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.style.display = 'block';
    });

    // Adiciona um ouvinte de evento para o botão de fechar menu
    btnFecharMenu.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });

    // Adiciona um ouvinte de evento para fechar o menu ao clicar no overlay
    overlayMenu.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });
});

function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var mensagem = document.getElementById('mensagem').value;

    // Verificar se todos os campos estão preenchidos
    if (nome && celular && mensagem) {
      // Se todos os campos estão preenchidos, chama a função enviarParaWhatsApp
      enviarParaWhatsApp();
    } else {
      alert('Por favor, preencha todos os campos antes de enviar.');
    }
  }

  function enviarParaWhatsApp() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var mensagem = document.getElementById('mensagem').value;

    var whatsappLink = 'https://api.whatsapp.com/send?phone=16991139460&text=' +
      encodeURIComponent('Nome: ' + nome + '\nE-mail: ' + email + '\nCelular: ' + celular + '\nMensagem: ' + mensagem);

    window.open(whatsappLink);
  }
