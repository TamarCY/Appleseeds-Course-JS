const steps = (n) => {
    let line = "";
    for (let i = 1; i <= n; i++){
        line = "#".repeat(i);
        console.log(line)
    }
}

steps(4);