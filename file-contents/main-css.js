module.exports = (function() {
    return `
:root {
    --info: #17a2b8;
    --dark: #343a40;
}

body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,
    sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    color: #212529;
}
.container {
    width: 80%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

h1 {
    text-align: center!important;
    padding: 13vh 0vh;
    font-size: 2.5rem;
    font-family: inherit;
    color: whitesmoke;
    cursor: pointer;
}

.bg-info {
    background-color: var(--info);
}

.bg-dark {
    background-color: var(--dark);
}

input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    font-family: inherit;
    transition-property: border-color, box-shadow;
    transition-duration: 0.15s, 0.15s;
    transition-timing-function: ease-in-out, ease-in-out;
    transition-delay: 0s, 0s;
} 
    `.trim()
}());