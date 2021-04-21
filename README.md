
# better-excerpt-html
generate excerpt from html text while preserving html structure. Very lightweight and standalone

# Install

```
$ npm i better-excerpt-html --save
```

# Usage
var htmlText =
```HTML
<ul>
	<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
	<li>Praesent interdum lacus at nisi tristique, dapibus lobortis purus consectetur.</li>
	<li>Ut pellentesque neque non est cursus condimentum.</li>
	<li>Vestibulum varius felis vel commodo consequat.</li>
	<li>Quisque congue massa in molestie euismod.</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus ex, aliquam sed dictum ac, laoreet ac purus. Sed sem elit, varius in dolor ac, interdum consequat enim. Vestibulum elementum velit sed sem sodales aliquam. In scelerisque, massa ac tincidunt viverra, ligula felis cursus metus, eu consectetur libero eros a libero. Ut enim ligula, pulvinar eget purus in, vestibulum molestie mi. Curabitur consequat augue id venenatis rhoncus. Nam interdum luctus erat. Etiam efficitur sit amet turpis ut aliquet. Integer consequat ligula ac tortor rutrum venenatis. Fusce dui nulla, suscipit eu neque non, pretium consequat enim. Pellentesque massa tortor, pretium sed dolor id, pulvinar consectetur orci. Integer lobortis ipsum eu augue auctor euismod. Cras massa mi, vestibulum eu porttitor nec, varius at sapien. Nulla facilisi. Cras dolor turpis, porttitor nec bibendum eu, pretium a justo. Suspendisse euismod rutrum dapibus.</p>

```
```Javascript
//excerptHtml(htmlText, characterLimit, [appendText])
var output = excerptHtml(htmlText, 200, '...');
```
**OUTPUT**
```HTML
<ul>
   <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
   <li>Praesent interdum lacus at nisi tristique, dapibus lobortis purus consectetur.</li>
   <li>Ut pellentesque neque non est cursus condimentum.</li>
   <li>Vestibulum varius...</li>
</ul>
```

