module.exports = (function() {
    return function(b) {
        if (b === true) {
            return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React ENV</title>
    <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css">
</head>
<body>

    <div id="root"></div>

    <script src="jquery/dist/jquery.js"></script>
    <script src="popper.js/dist/umd/popper.js"></script>
    <script src="bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>
    `.trim()
        } else {
            return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React ENV</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>

    <div id="root"></div>

</body>
</html>
    `.trim()
        }
    }
}());