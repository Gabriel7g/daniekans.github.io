/* A Person's Life
 * Trabalho de Web – INF-1A – CEFET-MG
 * Versão 2 – Sem teste
 */

$(function() {

	/* Handlers para janelas à parte do conteúdo principal */

	let $auxEl = $('#aux');
	let $infoEl = $('#janela-info');
	let $headerEl = $('header');

	// ícone para a janela de informações:
	$headerEl.on('click', '#icone-info', function() {
		if (!$auxEl.hasClass('escuro')) {
			$auxEl.show();
			$auxEl.addClass('escuro');
			$infoEl.addClass('ocupa-espaco');
		}
	});

	// evento para o desvanescimento da div auxiliar ao clicá-la:
	$auxEl.on('click', function() {
		if ($('#menu-criacao-conta').css('display') === 'none'
				&& $('#fim-de-jogo').css('display') === 'none'
				&& !$('.ficha').length) {
			$auxEl.removeClass('escuro');
			setTimeout(() => $auxEl.hide(), 200);
			$infoEl.removeClass('ocupa-espaco');
		}
	});

	// ícone para ativar o menu lateral:
	$('header').on('click', '#icone-menu-lateral', function() {
		$('body').toggleClass('menu-lateral-ativo');
		playSfx('menu-ativo.wav');
	});

	// seleção do modelo de personagem:
	let $modelosEl = $('#menu-criacao-conta').find('section');

	$modelosEl.on('click', function() {
		$modelosEl.removeClass('selecionado');
		$(this).addClass('selecionado');
	});

	// listeners para a loja e pertences:
	let $lojaEl = $('#loja');
	let $pertencesEl = $('#pertences');

	function destaqueAoPassarOMouse(sectionMaiorEl, sectionOcultaEl) {
		sectionMaiorEl.on('mouseenter', function() {
			sectionOcultaEl.css('height', '0');
			sectionMaiorEl.css('height', '90%');
		});
		sectionMaiorEl.on('mouseleave', function() {
			sectionMaiorEl.css('height', '40%');
			sectionOcultaEl.css('height', '40%');
		});
	}

	destaqueAoPassarOMouse($lojaEl, $pertencesEl);
	destaqueAoPassarOMouse($pertencesEl, $lojaEl);

	// áudios do jogo (OBS: usando <audio>):

	$('#musica-de-fundo').prop('volume', '0.3');

	$headerEl.on('click', '#icone-audio', function() {
		let $audiosEl = $('audio');

		if ($audiosEl.prop('muted')) {
			$audiosEl.prop('muted', false);
			$(this).attr('src', 'imgs/com-audio.png');
		}	else {
			$audiosEl.prop('muted', true);
			$(this).attr('src', 'imgs/sem-audio.svg');
		}
	});

	// screenshot do personagem:
	$('#li-screenshot').on('click', function() {
		html2canvas($('#cenario-container')[0], {
			onrendered: function(canvas) {
				let imagemURL = canvas.toDataURL(),
						nomeJogador = $('#nome-span').text(),
						$linkEl = $('<a></a>')
							.attr('download', `${nomeJogador}.png`)
							.attr('href', imagemURL);
				$('body').append($linkEl);
				$linkEl[0].click(); // apenas assim está sendo possível baixar com o JQuery;
			}
		});
	});

	// instruções do jogo (OBS: feito com alert() devido ao pouco tempo):
	$('#li-instrucoes').on('click', function() {

		alert('Esse é um jogo que se baseia na vida, logo o único objetivo é viver.');
		alert('Ao clicar em seu personagem, você faz o tempo passar, ganhando dinheiro, experiência e idade.');
		alert('No local escrito "Loja" você compra objetos que deseja adquirir.');
		alert('No local com título "Pertences" estão os objetos que você comprou em sua vida.');
		alert('A barra de XP abaixo, indica basicamente o tempo que falta para seu personagem ficar 1 ano mais velho.');
		alert('No local escrito "Upgrades" contém itens que irão deixar sua vida mais fácil.');
		alert('Boa sorte.');

	});

});
