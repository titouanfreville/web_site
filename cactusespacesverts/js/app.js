/**
 * @ngdoc overview
 * @author Titouan Freville <titouanfreville@hotmail.fr>
 * @description Main module for Cactus Espaces Vertsweb site

 /* jshint +W097 */
'use strict';
/*jshint -W097 */

var cactusespacesverts=angular.module('cactusespacesverts', [ 'ngRoute', 'ui.router', 'ngAnimate' ]);

// var cactusespacesverts=angular.module('cactusespacesverts', [ 'ngRoute', 'ui.router', 'uiGmapgoogle-maps']);

// State menu for angular.
// Config require $stateProvider and $urlRouterProvider
cactusespacesverts.config(function ($stateProvider, $urlRouterProvider) {

    // uiGmapGoogleMapApiProvider.configure({
    //   key: "AIzaSyDvv4BBsnlxliMeVKOOFvanEnDrkX3B3y0", //Clé pour utiliser l'API
    //   v: '3.17', //Par défaut la version la plus récente disponible
    //   libraries: 'geometry,visualization' //Librairies supplémentaires
    // });

    $stateProvider
    // Opening State. The base state when you access the web site.
        .state('cactusespacesverts', {
            url: '',
            controller: 'mainCtrl',
            data: {loc_state: 'index'},
            views:{
                'opening': {
                    templateUrl: 'views/opening.html',
                },
                'remarquable': {
                    templateUrl: 'views/remarquable.html'
                },
                'creations': {
                    templateUrl: 'views/creations.html'
                },
                'entretien': {
                    templateUrl: 'views/entretien.html'
                },
                'contact': {
                    templateUrl: 'views/contact.html'
                },
                'others': {
                    templateUrl: 'views/others.html'
                },
                'header':{
                    templateUrl: 'views/header.html'
                },
                "menu":{
                    templateUrl: 'views/menu.html'
                },
                'work':{
                    templateUrl: 'views/work.html'
                },
                'footer':{
                    templateUrl: 'views/footer.html'
                }
            },
            // controller: 'mapCtrl'
        })
        // Accueil state for menu requirements.
        .state('accueil', {
            url: '/accueil',
            controller: 'mainCtrl',
            views:{
                'opening': {
                    templateUrl: 'views/opening.html'
                },
                'work':{
                    templateUrl: 'views/work.html'
                },
                'footer':{
                    templateUrl: 'views/footer.html'
                },
                'header':{
                    templateUrl: 'views/header.html'
                },
                'nav':{
                    templateUrl: 'views/menu.html'
                }
            }
        })
        .state('fruticetum', {
            url: '/fruticetum',
            views:{
                'opening': {
                    templateUrl: 'views/remarquable.html'
                },
                'nav':{
                    templateUrl: 'views/menu.html'
                },
                'work':{
                    templateUrl: 'views/work.html'
                },
                'footer':{
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('creations', {
            url: '/creations',
            views:{
                'opening': {
                    templateUrl: 'views/creations.html',
                },
                'nav':{
                    templateUrl: 'views/menu.html'
                },
                'work':{
                    templateUrl: 'views/work.html'
                },
                'footer':{
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('entretien', {
            url: '/entretien',
            views:{
                'opening': {
                    templateUrl: 'views/entretien.html',
                },
                'nav':{
                    templateUrl: 'views/menu.html'
                },
                'work':{
                    templateUrl: 'views/work.html'
                },
                'footer':{
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('contact', {
            url: '/contact',
            views:{
                'opening': {
                    templateUrl: 'views/contact.html',
                },
                'nav':{
                    templateUrl: 'views/menu.html'
                },
                'work':{
                    templateUrl: 'views/work.html'
                },
                'footer':{
                    templateUrl: 'views/footer.html'
                }
            },
            controller: 'mapCtrl'
        })
        .state('other', {
            url: '/other',
            views:{
                'opening': {
                    templateUrl: 'views/other.html',
                },
                'work':{
                    templateUrl: 'views/work.html'
                },
                'footer':{
                    templateUrl: 'views/footer.html'
                }
            }
        })
})

cactusespacesverts.directive('setClassWhenAtTop', function ($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            console.log(element);
            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = element.offset().top; // get element's offset top relative to document
                offsetTop = (offsetTop !== 0 ? offsetTop : ($win.height()));
            $win.on('scroll', function (e) {
                element[($win.scrollTop() >= offsetTop) ? 'addClass' : 'removeClass'](topClass);
            });
        }
    };
});

cactusespacesverts.controller('OpSliderCtrl', function($scope, $timeout) {
    var INTERVAL = 5000;
    var diapo_root='images/diapo/';
    $scope.slides1 = [
        {image: diapo_root+'diapo1.jpg', description: 'Image 00'},
        {image: diapo_root+'diapo2.jpg', description: 'Image 01'},
        {image: diapo_root+'diapo3.jpg', description: 'Image 02'},
        {image: diapo_root+'diapo4.jpg', description: 'Image 03'},
        {image: diapo_root+'diapo5.jpg', description: 'Image 04'}
    ];
    $scope.slides2 = [
        {image: diapo_root+'diapo6.jpg', description: 'Image 00'},
        {image: diapo_root+'diapo7.jpg', description: 'Image 01'},
        {image: diapo_root+'diapo8.jpg', description: 'Image 02'},
        {image: diapo_root+'diapo9.jpg', description: 'Image 03'},
        {image: diapo_root+'diapo10.jpg', description: 'Image 04'}
    ];
    $scope.slides3 = [
        {image: diapo_root+'diapo11.jpg', description: 'Image 00'},
        {image: diapo_root+'diapo12.jpg', description: 'Image 01'},
        {image: diapo_root+'diapo13.jpg', description: 'Image 02'},
        {image: diapo_root+'diapo14.jpg', description: 'Image 03'},
        {image: diapo_root+'diapo15.jpg', description: 'Image 04'}
    ];

    function setCurrentSlideIndex(index) {
        $scope.currentIndex = index;
    }
    function isCurrentSlideIndex(index) {
        return $scope.currentIndex === index;
    }
    function nextSlide() {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides1.length - 1) ? ++$scope.currentIndex : 0;
        $timeout(nextSlide, INTERVAL);
    }
    function loadSlides() {
        $timeout(nextSlide, INTERVAL);
    }

    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;
    loadSlides();
});

cactusespacesverts.animation('.slide-animation', function () {
    return {
        addClass: function (element, className, done) {
            if (className == 'ng-hide') {
                TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            if (className == 'ng-hide') {
                element.removeClass('ng-hide');
                TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
});
// Main Controller
// Used on all view to check if user is define && if user is ProductOwner
// cactusespacesverts.controller('mainCtrl', function($rootScope, $scope, $state) {
//   $rootScope.state = $scope.loc_state;
// });
//   if ($rootScope.userRole) $scope.ispo = ($rootScope.userRole == 'ProductOwner')

// // Logout controller. Call the logout server session and remove sessionStorage && rootScope stored user value.
// jirallo.controller('logoutCtrl', ['$scope', '$window', '$rootScope', '$state', '$http', function($scope, $window, $rootScope, $state, $http) {
//   $scope.destroy = function() {
//     $rootScope.userName=null;
//     $rootScope.userRole=null;
//     $window.sessionStorage.clear();
//     $http({
//       method: 'POST',
//       url: '/destroy_session'
//     }).success(function(res){
//       $window.alert(res.message);
//       $state.go('index');
//     })
//   }
// }])
//   else $scope.ispo = ($window.sessionStorage.userRole == 'ProductOwner');
// }]);
// Map controller. initialize map values.
// cactusespacesverts.controller('mapCtrl', ['$scope', '$window', '$rootScope', '$state', '$http', function($scope, $window, $rootScope, $state, $http) {
//   //Initialisation des variables
//   $scope.map = {
//      center: {
//     latitude: 46.5132, //Position initial de la carte
//     longitude: 0.1033
//      },
//      zoom: 11 // de 0 à 19, 0 étant la valeur de zoom la plus forte
//   };

//   $scope.markers = [{
//      coord: {
//         latitude: 44.93, //Coordonnées où placer le point
//         longitude: 4.89
//      },
//      email: "netapsys@netapsys.fr", //Propriété métier, pour les afficher à l'utilisateur lorsqu'il sélectionne le point par exemple
//      icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", //Icone personnalisée
//      id: 412
//   },{
//      coord: {
//         latitude: 46.5132,
//         longitude: 0.1033
//      },
//      email: "netapsys@netapsys.fr",
//      icon: "//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", //Icone personnalisée
//      id: 413
//   }];

//   $scope.clickMarker = function(marker) {
//      alert(marker.email); //Affichera l'email du point sur lequel on a cliqué
//   };
// }])

// TODO
// Make a nicear photoswipe pls....
$(document).ready(function() {
    var fruticetum_root='images/fruticetum/';
    var diapo_root='images/diapo/';
    var terrasse_root='images/terrasse/';
    var menuiserie_root='images/menuiserie/';
    var cheminement_root='images/cheminement/';
    var bassin_root='images/bassin/';
    var soutenement_root='images/soutenement/';
    var vegetal_root='images/vegetal/';
    var openPhotoSwipe = function() {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [
            {
                src: diapo_root + 'diapo1.jpg', // ratio 1.5
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo5.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo6.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo7.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo8.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo9.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo10.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo11.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo12.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo13.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo14.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: diapo_root + 'diapo15.jpg',
                w: 3000,
                h: 2000
            },
            // FRUTICETUM
            //TODO clean an specizalise fruti
            {
                src: fruticetum_root + 'fruticetum_abri.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: fruticetum_root + 'fruticetum_egrennoire.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_long_bassin.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: fruticetum_root + 'fruticetum_cordage.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_muraille.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_egrennoire2.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_long.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_pergolas_long.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_pergolas.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_pergolas2.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_pergola_nonfinis.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_rampe.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_rampe1.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_vue_bassin.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum1.jpg',
                w: 3000,
                h: 2000
            },

            {
                src: fruticetum_root + 'fruticetum_vue_muraille.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: fruticetum_root + 'fruticetum_abri_pommier.jpg',
                w: 3000,
                h: 2000
            },
            // Terrasse
            //TODO Clean and Specialize terrasse
            {
                src: terrasse_root + 'terrassebois1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois5.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois6.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois7.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois8.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois9.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassebois10.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrasseboiscomposite1.jpg',
                h: 3000,
                w: 2000
            },
            {
                src: terrasse_root + 'terrasseboiscomposite2.jpg',
                h: 3000,
                w: 2000
            },
            {
                src: terrasse_root + 'terrasseboiscomposite3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassedallage.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassedallage2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassedallage3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassedallage4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassedallage5.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassedallage6.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassedallage7.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: terrasse_root + 'terrassegravier1.jpg',
                w: 3000,
                h: 2000
            },
            // Menuiserie
            //TODO Clean and Specialize menuiserie
            {
                src: menuiserie_root + 'barriere1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'barriere2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'barriere3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'barriere4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'barriere5.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'chalet1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'chalet2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'escalier1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'piscine1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'pergola1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'pergola2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: menuiserie_root + 'pergola3.jpg',
                w: 3000,
                h: 2000
            },
            // Cheminement
            //TODO Clean and Specialize cheminement
            {
                src: cheminement_root + 'cheminement1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement5.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement6.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement7.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement8.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement9.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement10.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement11.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: cheminement_root + 'cheminement12.jpg',
                w: 3000,
                h: 2000
            },
            // Bassin
            //TODO Clean and Specialize bassin
            {
                src: bassin_root + 'bassin1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: bassin_root + 'bassin2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: bassin_root + 'bassin3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: bassin_root + 'bassin4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: bassin_root + 'bassin5.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: bassin_root + 'bassin6.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: bassin_root + 'bassin7.jpg',
                w: 3000,
                h: 2000
            },
            // Soutenement
            //TODO Clean and Specialize soutenement
            {
                src: soutenement_root + 'soutenement1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: soutenement_root + 'soutenement2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: soutenement_root + 'soutenement3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: soutenement_root + 'soutenement4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: soutenement_root + 'soutenement5.jpg',
                w: 3000,
                h: 2000
            },
            // Vegetal
            //TODO Clean and Specialize vegetal
            {
                src: vegetal_root + 'vegetal1.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal2.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal3.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal4.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal5.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal6.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal7.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal8.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal9.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal10.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal11.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal12.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal13.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal14.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal15.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal16.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal17.jpg',
                w: 3000,
                h: 2000
            },
            {
                src: vegetal_root + 'vegetal18.jpg',
                w: 3000,
                h: 2000
            },


        ];

        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen
            history: false,
            focus: false,

            shareEl: false,
            showAnimationDuration: 1,
            hideAnimationDuration: 1

        };

        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    var photos = document.getElementsByClassName('photoswipe');
    for (var i=0; i < photos.length; i++) {
        photos[i].onclick = openPhotoSwipe;
    }
});

