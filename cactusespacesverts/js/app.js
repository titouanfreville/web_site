/**
* @ngdoc overview
* @author Titouan Freville <titouanfreville@hotmail.fr>
* @description Main module for Cactus Espaces Vertsweb site

/* jshint +W097 */
'use strict';
/*jshint -W097 */
var cactusespacesverts=angular.module('cactusespacesverts', [ 'ngRoute', 'ui.router']);
// State navigation for angular.
// Config require $stateProvider and $urlRouterProvider
cactusespacesverts.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    // Opening State. The base state when you access the web site.
    .state('cactusespacesverts', {
      url: '',
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
      }
     })
    // Accueil state for navigation requirements.
    .state('accueil', {
      url: '/accueil',
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
      }
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
// Main Controller
// Used on all view to check if user is define && if user is ProductOwner
// jirallo.controller('mainCtrl',['$rootScope', '$scope', '$window', '$state', function($rootScope, $scope, $window, $state) {
//   if ($rootScope.userName) $scope.userName = $rootScope.userName
//   else $scope.userName = $window.sessionStorage.userName;
//   $scope.logged = angular.isDefined($scope.userName);
//   if ($rootScope.userRole) $scope.ispo = ($rootScope.userRole == 'ProductOwner')
//   else $scope.ispo = ($window.sessionStorage.userRole == 'ProductOwner');
// }]);
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