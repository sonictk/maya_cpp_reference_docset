$.extend({
	getUrlVars: function() {
    	var vars = [], hash;

    	var search = window.location.search,
    	    hashes = search.slice(search.indexOf('?') + 1).split('&');

    	for(var i = 0; i < hashes.length; i++)	{
      		hash = hashes[i].split('=');
      		vars.push(hash[0]);
      		vars[hash[0]] = hash[1];
    	}
    	return vars;
  	},

  	getUrlVar: function(name){
    	return $.getUrlVars()[name];
  	}
});
