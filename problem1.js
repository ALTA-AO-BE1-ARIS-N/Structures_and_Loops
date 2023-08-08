// problem 1
// konversi nilai
// nilai 80-100 maka akan keluar nilai "A"
// nilai 65-79 maka akan keluar nilai "B"
// nilai 50-64 maka akan keluar nilai "B+"
// nilai 35-49 maka akan keluar nilai "C"
// nilai 0-34 maka akan keluar nilai "D"
// nilai lebih dari 100 dan kurang dari 0 keluarkan  kata “invalid”

let abjad = (A,B,C,D,E)
let input = (42)

let A = (input => 100);(input <= 0);{
    return ("invalid");{
        let A = ((input => 80)(input <=100));{
            return ("A")
        }
    }
}

let B = (input => 65);(input <= 79);{
    return ("B")
}

let C = (input => 50);(input <= 64);{
    return ("C")
}

let D = (input => 35);(input <= 49);{
    return ("D")
}

let E = (input => 0);(input <= 34);{
    return ("E")
}

console.log ("nilai anda" + A + B + C + D + E)