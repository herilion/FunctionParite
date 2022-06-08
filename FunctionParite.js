function nParite(n, parite) {
    if (parite) {
        return n * (n - 1);
    }
    return n * n;
}
//en une ligne
//return parite? n*(n-1):n*n