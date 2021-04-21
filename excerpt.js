(function(global, factory){
	"use strict";
	
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global));

})(this, function(global){
	
	
	global.excerptHtml = function(html, limit, append){

		var doc = new DOMParser().parseFromString(html, "text/html"),
			flagged = false;
		 	parents = [];
		 	domTree = [];
		 	totalChar = 0;
		 	lastTextN = null;
		 	walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null, null);

		while( walker.nextNode() ) {
		 	domTree.push(walker.currentNode);
		}

		
		for( var i in domTree){
			var n = domTree[i];
			if( n.textContent.trim() ) {
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
			var p = lastTextN ? lastTextN.parentNode : domTree.slice(-1);
			p.innerHTML = p.innerHTML + append;
		}

		return doc.body.innerHTML;
		

	}

	global.excerptStripHtml = function(html, limit){
		var doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.innerText.substr(0, limit);
	}
	
	
	
});

