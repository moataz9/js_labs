/**
 * remove HTML/XML tags from string.
 */

function stripHTMLTags(str) {
  return str.replace(/<[^>]*>/g, '');
}

console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));
