/**
 *  get the extension and name of a filename.
 */

// method 1
function fileNameInfo(fileFullName) {
  const fileParts = fileFullName.split('.')
  const fileName = fileParts.shift()
  const fileExt = fileParts.pop()
  return `File-full-Name is: ${fileFullName},\nname is: ${fileName},\nfile extension: ${fileExt}\n`
}

// method 2
function fileNameInfo_2(fileFullName) {
  const fileExt = fileFullName.slice(fileFullName.lastIndexOf('.'))
  const fileName = fileFullName.slice(0, fileFullName.lastIndexOf('.'))
  return `File-full-Name is: ${fileFullName},\nname is: ${fileName},\nfile extension: ${fileExt}\n`
}

console.log(fileNameInfo('system.php'))
console.log(fileNameInfo_2('system.php'))
console.log(fileNameInfo_2('system.base.php'))
