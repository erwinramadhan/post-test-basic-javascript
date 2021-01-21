function inputAlasTinggi() {
    let alas = prompt("Masukan alas dari segitiga! (cm)", 10)
    let tinggi = prompt("Masukan tinggi dari segitiga! (cm)", 8);
    if (alas && tinggi != null) {
        document.querySelector("#hasilLuasSegitiga").innerHTML =
            "Luas segitiga tersebut adalah " + 0.5 * alas * tinggi + "cm<sup>2<sup>";
    }
}

function inputJariJari() {
    let jariJari = prompt("Masukan jari-jari dari lingkaran (cm)", 7)
    let phi

    if (jariJari % 7 == 0)  {
        phi = 22 / 7
    }
    else{
        phi = 3.14
    }
    
    document.querySelector("#hasilLuasLingkaran").innerHTML =
    "Luas lingkaran tersebut adalah " + phi * jariJari * jariJari + "cm<sup>2<sup>";
}