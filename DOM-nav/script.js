console.log(document.body.firstChild);
console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('[data-currnet="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
	if (node.nodeName == "#text") {
		continue
	}
	console.log(node);
}