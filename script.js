var movies = [
     {
        id: 1,
      	title: 'Harry Potter',
        desc: 'Film o czarodzieju',
	      image: './images/harry.jpg'
	    },
      {
        id: 2,
      	title: 'Król Lew',
        desc: 'Film o królu sawanny',
	      image: './images/lew.jpg'
      },
      {
      	id: 3,
      	title: 'Blade runner',
      	desc: 'Film sci-fi',
      	image: './images/bladerunner2.jpg'
      },
      {
        id: 4,
      	title: 'Star Wars',
      	desc: 'Słynna gwiezdna saga',
      	image: './images/starwars.jpg'
	    }
];

var moviesElements = movies.map(function(movie) {
       return React.createElement('li', {key: movie.id},
              React.createElement('h2', {}, movie.title),
              React.createElement('p', {}, movie.desc),
	            React.createElement('img', {src: movie.image})
       );
});

var element =
       React.createElement('div', {},
       React.createElement('h1', {}, 'Lista filmów'),
       React.createElement('ul', {}, moviesElements)
  );
  
 ReactDOM.render(element, document.getElementById('app'));
 
