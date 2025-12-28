function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        // Add spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // Add #
        for (let k = 1; k <= i; k++) {
            row += "#";
        }

        console.log(row); // Print full row
    }
}

staircase(6);
