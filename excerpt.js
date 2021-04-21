'use strict';
(function(){
	window.excerptHtml = function  (html, limit, append){
		var doc = new DOMParser().parseFromString(html, "text/html"),
			flagged = false,
		 	parents = [],
		 	domTree = [],
		 	totalChar = 0,
		 	lastTextN = null,
		 	walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null, null);

		while( walker.nextNode() ) {
		 	domTree.push(walker.currentNode);
		}

		for(var n of domTree){
			if( n.textContent.trim() ) {
				console.log(n.textContent);
				if( flagged ) {
					if( parents.indexOf(n.parentNode) > -1 ) {
						n.textContent = '';
					} else {
						n.parentNode.remove();
					}
				} else {
					if( totalChar + n.textContent.length > limit ) {
						flagged = true;
						n.textContent = n.textContent.substr(0, limit - totalChar);
						lastTextN = n;
						var temp = n.parentNode;
						while( temp ) {
							parents.push(temp);
							temp = temp.parentNode;
						}
					} else {
						totalChar += n.textContent.length
					}
				}
			}
		}

		if( append ) {
			var p = lastTextN.parentNode;
			p.innerHTML = p.innerHTML + append;
		}

		return doc.body.innerHTML;
		

	}
})();

