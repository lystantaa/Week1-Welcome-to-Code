// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("perulangan pertambahan 2:");
for(let i = 1; i <= 100; i += 2) {
    console.log(i)
    if (i % 3 === 0 ) {
        console.log(i + " kelipatan 3")
    }
}

console.log("perulangan pertambahan 5:");
for(let i = 1; i <= 100; i +=5 ) {
    console.log(i)
    if (i % 6 === 0 ) {
        console.log(i + " kelipatan 6")
    }
}

console.log("perulangan pertambahan 9:");
for (let i = 1; i <= 100; i += 9 ) {
    console.log(i)
    if (i % 10 === 0 ) {
        console.log(i + " kelipatan 10")
    }
}

