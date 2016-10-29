/**
* @ngdoc overview
* @author Titouan Freville <titouanfreville@hotmail.fr>
* @description Main module for Cactus Espaces Vertsweb site

/* jshint +W097 */
'use strict';
/*jshint -W097 */
<<<<<<< Updated upstream
var cactusespacesverts=angular.module('cactusespacesverts', [ 'ngRoute', 'ui.router', 'ngAnimate']);
=======
var cactusespacesverts=angular.module('cactusespacesverts', [ 'ngRoute', 'ui.router', 'uiGmapgoogle-maps']);
>>>>>>> Stashed changes
// State navigation for angular.
// Config require $stateProvider and $urlRouterProvider
cactusespacesverts.config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

  uiGmapGoogleMapApiProvider.configure({
    key: "AIzaSyDvv4BBsnlxliMeVKOOFvanEnDrkX3B3y0", //Clé pour utiliser l'API
    v: '3.17', //Par défaut la version la plus récente disponible
    libraries: 'geometry,visualization' //Librairies supplémentaires
  });

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
        }
      },
      controller: 'mapCtrl'
     })
    // Accueil state for navigation requirements.
    .state('accueil', {
      url: '/accueil',
      controller: 'mainCtrl',
      views:{
        'opening': {
          templateUrl: 'views/opening.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('fruticetum', {
      url: '/fruticetum',
      views:{
        'opening': {
          templateUrl: 'views/remarquable.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('creations', {
      url: '/creations',
      views:{
        'opening': {
          templateUrl: 'views/creations.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('terrasses', {
      url: '/terrasses',
      views:{
        'opening': {
          templateUrl: 'views/terrasses.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('t_bois', {
      url: '/t_bois',
      views:{
        'opening': {
          templateUrl: 'views/terrasses/bois.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('t_pavees', {
      url: '/t_pavees',
      views:{
        'opening': {
          templateUrl: 'views/terrasses/pave.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('t_minerales', {
      url: '/t_minerales',
      views:{
        'opening': {
          templateUrl: 'views/terrasses/mineral.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('vegetal', {
      url: '/vegetal',
      views:{
        'opening': {
          templateUrl: 'views/vegetal.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('massif', {
      url: '/massif',
      views:{
        'opening': {
          templateUrl: 'views/vegetal/massif.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('gazon', {
      url: '/gazon',
      views:{
        'opening': {
          templateUrl: 'views/vegetal/gazon.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('plantation', {
      url: '/plantation',
      views:{
        'opening': {
          templateUrl: 'views/vegetal/plantation.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('menuiserie', {
      url: '/menuiserie',
      views:{
        'opening': {
          templateUrl: 'views/menuiserie.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('banc', {
      url: '/banc',
      views:{
        'opening': {
          templateUrl: 'views/menuiserie/banc.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('bac', {
      url: '/bac',
      views:{
        'opening': {
          templateUrl: 'views/menuiserie/bac.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('pergola', {
      url: '/pergola',
      views:{
        'opening': {
          templateUrl: 'views/menuiserie/pergola.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('chalet', {
      url: '/chalet',
      views:{
        'opening': {
          templateUrl: 'views/menuiserie/chalet.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('cheminement', {
      url: '/cheminement',
      views:{
        'opening': {
          templateUrl: 'views/cheminement.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('c_pavage', {
      url: '/c_pavage',
      views:{
        'opening': {
          templateUrl: 'views/cheminement/pave.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('c_bois', {
      url: '/c_bois',
      views:{
        'opening': {
          templateUrl: 'views/cheminement/bois.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('c_mineral', {
      url: '/c_mineral',
      views:{
        'opening': {
          templateUrl: 'views/cheminement/mineral.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('bassin', {
      url: '/bassin',
      views:{
        'opening': {
          templateUrl: 'views/bassin.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('soutenement', {
      url: '/soutenement',
      views:{
        'opening': {
          templateUrl: 'views/soutenement.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('entretien', {
      url: '/entretien',
      views:{
        'opening': {
          templateUrl: 'views/entretien.html',
        },
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
    .state('contact', {
      url: '/contact',
      views:{
        'opening': {
          templateUrl: 'views/contact.html',
        },
        'header':{
          templateUrl: 'views/header.html'
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
        'header':{
          templateUrl: 'views/header.html'
        }
      }
     })
})

cactusespacesverts.controller('OpSliderCtrl', function($scope, $timeout) {
  var INTERVAL = 5000;
  
  $scope.slides = [
    {image: 'images/diapo1.jpg', description: 'Image 00'},
    {image: 'images/diapo2.jpg', description: 'Image 01'},
    {image: 'images/diapo3.jpg', description: 'Image 02'},
    {image: 'images/diapo4.jpg', description: 'Image 03'},
    {image: 'images/diapo5.jpg', description: 'Image 04'}
  ];

  function setCurrentSlideIndex(index) {
      $scope.currentIndex = index;
  }
  function isCurrentSlideIndex(index) {
      return $scope.currentIndex === index;
  }
  function nextSlide() {
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
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
<<<<<<< Updated upstream
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
=======
//   else $scope.ispo = ($window.sessionStorage.userRole == 'ProductOwner');
// }]);
// Map controller. initialize map values.
cactusespacesverts.controller('mapCtrl', ['$scope', '$window', '$rootScope', '$state', '$http', function($scope, $window, $rootScope, $state, $http) {
  //Initialisation des variables
  $scope.map = {
     center: {
    latitude: 46.5132, //Position initial de la carte
    longitude: 0.1033
     },
     zoom: 11 // de 0 à 19, 0 étant la valeur de zoom la plus forte
  };

  $scope.markers = [{
     coord: {
        latitude: 44.93, //Coordonnées où placer le point
        longitude: 4.89
     },
     email: "netapsys@netapsys.fr", //Propriété métier, pour les afficher à l'utilisateur lorsqu'il sélectionne le point par exemple
     icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", //Icone personnalisée
     id: 412
  },{
     coord: {
        latitude: 46.5132,
        longitude: 0.1033
     },
     email: "netapsys@netapsys.fr",
     icon: "//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", //Icone personnalisée
     id: 413
  }];

  $scope.clickMarker = function(marker) {
     alert(marker.email); //Affichera l'email du point sur lequel on a cliqué
  };
}])
>>>>>>> Stashed changes
