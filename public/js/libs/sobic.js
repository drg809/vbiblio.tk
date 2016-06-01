/* En esta sección se encuentra la función que controla los modals */

function modalCreate($modal, type, title, body ){
	var modalInstance = $modal.open({
      	templateUrl: 'partials/modal/main.html',
	  	controller: 'ModalController',
	  	backdrop: 'static',
	  	size: 'md',
      	resolve: {
        	modal: function () {
          		return {type: type, title: title, body: body};
        	}
		}
    });
    return modalInstance;
};


function size(){
//	$('#main-container').css("height", $(window).height());
}

/* Esta función actualmente no está en uso pero puede ser utilizada para enlazar a un objeto DOM */
function goTo(position){
	$('html, body').animate({ 
		scrollTop: $('#'+position).offset().top
	}, 1500);
	setTimeout(function(){
		$('html, body').animate({ 
			scrollTop: $('#'+position).offset().top
		}, 500);
	}, 1600);
}


/*  En esta sección se encuentran funciones para controlar el "scroll" y el "resize" en el navegador */
$( document ).ready(function() {
	size();
	$( window ).resize(function() {
		size();
	});
	$(window).scroll(function(){
		size();
	});
});

function modalVerCementerio($modal, cementerio, enJuego, mano){
	var modalInstance = $modal.open({
		templateUrl: 'partials/pages/cementerio.html',
		controller: 'CementerioController',
		backdrop: 'static',
		size: 'md',
		resolve: {
			cementerio: function () {
				return cementerio;
			},
			enJuego: function () {
				return enJuego;
			},
			mano: function () {
				return mano;
			}
		}
	});
	return modalInstance;
};

function modalVerCarta($modal, preference){
	var modalInstance = $modal.open({
		templateUrl: 'partials/pages/form.html',
		controller: 'PreferenceFormController',
		backdrop: 'static',
		size: 'md',
		resolve: {
			preference: function () {
				return preference;
			}
		}
	});
	return modalInstance;
};

app.directive("closedmenu", function () {
	return function(scope, element, attrs) {
		angular.element(element).bind("click", function() {
			if($('#btn-info').attr('aria-expanded') !='false'){
				$("#btn-info").trigger( "click" );
			}
			if($('#btn-app').attr('aria-expanded') !='false'){
				$("#btn-app").trigger( "click" );
			}
		});
	};
});

$(function() {
    $('#navbar .nav a').on('click', function(){ 
        if($('#btn-info').css('display') !='none'){
            $("#btn-info").trigger( "click" );
        }
    });
    $('#navbar-bottom .nav a').on('click', function(){ 
        if($('#btn-app').css('display') !='none'){
            $("#btn-app").trigger( "click" );
        }
    });
});
