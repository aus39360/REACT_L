function help(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export {help}