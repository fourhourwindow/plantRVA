'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('myApp').filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

angular.module('myApp').controller('mainCtrl',['$scope','$timeout',
function($scope, $timeout){
	
	$scope.animationsReady = false;
	$scope.visitUrl = visitUrl;

	$scope.getStyle = getStyle;

	function getStyle(index){
		return index * .25 +'s';
	}

	$timeout(function(){
		$scope.animationsReady = true;
	},600)

http://unboxedonline.com/comcastmobileexperience/www/

	$scope.links = [
	{
		name:'XFINITY Mobile Experience',
		client:'Comcast',
		platform:'42" Touchscreen TV and iPad',
		description:'UX/UI concepts and development',
		image:'images/moxe.png',
		year:'2016',
		technologies:[{name:'javascript'},{name:'css'},{name:'photoshop'},{name:'aftereffects'},{name:'audition'}],
		link:'http://unboxedonline.com/comcastmobileexperience'
	},{
		name:'XFINITY Customer Care',
		client:'Comcast',
		platform:'iPad and Desktop',
		description:'UX/UI concepts and development of individual interactive modules within',
		image:'images/customercare.png',
		year:'2014',
		technologies:[{name:'javascript'},{name:'css'},{name:'flash'},{name:'photoshop'},{name:'premiere'},{name:'audition'}],
		link:'http://www.xfinitysalestool.com/customercare'
	},{
		name:'XFINITY Apps Previewer',
		client:'Comcast',
		platform:'iPhone',
		description:'UX/UI conceps, development',
		year:'2015',
		technologies:[{name:'angular'}, {name:'javascript'},{name:'css'}],
		image:'images/customer_apps.png',
		link:'http://xfinitysalestool.com/appspreviewer'
	},{
		name:'River City Fugitive',
		client:'Freelance Project',
		platform:'iPad - export from Flash',
		description:'Concept, design and development of entire game, based on the boardgame <i>Scotland Yard</i>',
		year:'2008',
		technologies:[{name:'flash'}, {name:'photoshop'}],
		image:'images/rva_fugitive.png',
		link:'http://www.fourhourwindow.com/demos/rva.html'
	},{
		name:'CarLotz Animation',
		client:'CarLotz',
		platform:'All',
		description:'Development of animation and flow',
		year:'2012',
		technologies:[{name:'flash'}, {name:'aftereffects'},{name:'audition'}],
		image:'images/carlotz.png',
		link:'http://www.fourhourwindow.com/carlotz.html'
	},{
		name:'Richmond Radio',
		client:'Freelance Project',
		platform:'Desktop',
		description:'Concept, design, development, worked with local musicians to aggregate content, maintenance',
		year:'2008',
		technologies:[{name:'javascript'},{name:'css'},{name:'flash'},{name:'photoshop'}],
		image:'images/rr.png',
		link:'http://www.richmondradio.org'
	},{
		name:'Surround Sound',
		client:'Dell (BDS Marketing)',
		platform:'Dell touchscreen computers (various)',
		description:'Design, development',
		year:'2010',
		technologies:[{name:'flash'},{name:'photoshop'}],
		image:'images/surround_sound.png',
		link:'http://www.fourhourwindow.com/demos/surround_sound.html'
	},{
		name:'My Portfolio',
		client:'Me',
		platform:'All',
		description:'Design, development',
		year:'2015',
		technologies:[{name:'angular'}, {name:'javascript'},{name:'photoshop'},{name:'css'}],
		image:'images/portfolio.png',
		link:'http://www.fourhourwindow.com'
	},{
		name:'Stands and Wall Mounts',
		client:'Dell (BDS Marketing)',
		platform:'Dell touchscreen computers (various)',
		description:'Design, development',
		year:'2010',
		technologies:[{name:'flash'},{name:'photoshop'}],
		image:'images/stands.png',
		link:'http://www.fourhourwindow.com/demos/stands_and_wall_mounts.html'
	},{
		name:'Plasma vs LCD',
		client:'Dell (BDS Marketing)',
		platform:'Dell touchscreen computers (various)',
		description:'Design, development',
		year:'2010',
		technologies:[{name:'flash'},{name:'photoshop'}],
		image:'images/plasma.png',
		link:'http://www.fourhourwindow.com/demos/plasma_vs_lcd.html'
	},{
		name:'Casa La Huerta',
		client:'Private Owner',
		platform:'Desktop',
		description:'Design and development of entire website, including pdf borchure',
		year:'2007',
		technologies:[{name:'flash'},{name:'photoshop'}, {name:'acrobat'}],
		image:'images/casa.png',
		link:'http://www.casalahuerta.com'
	},{
		name:'MP3 Accessories',
		client:'Circuit City',
		platform:'Tablet PCs',
		description:'Worked with Project Managers to iron out UX/UI, design and development',
		image:'images/mp3.png',
		year:'2008',
		technologies:[{name:'flash'},{name:'photoshop'}],
		link:'http://www.fourhourwindow.com/demos/mp3_accessories.html'
	},{
		name:'Parts of a PC',
		client:'Circuit City',
		platform:'Tablet PCs',
		description:'UX/UI concept, design, development',
		image:'images/pc.png',
		year:'2008',
		technologies:[{name:'flash'},{name:'photoshop'}],
		link:'http://www.fourhourwindow.com/demos/parts_of_a_pc.html'
	}
	]

	function visitUrl(index){

		window.open($scope.links[index].link,'_newtab');
		
	}


}]);

