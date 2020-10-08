function perm(a) {
    if (a.length < 2) return [a];
    var c, d, b = [];
    for (c = 0; c < a.length; c++) {
        var e = a.splice(c, 1),
            f = perm(a);
        for (d = 0; d < f.length; d++) b.push([e].concat(f[d]));
        a.splice(c, 0, e[0])
    } return b
}
 
console.log(perm([ '1', '0', '2', '7' ]).join("\n"));