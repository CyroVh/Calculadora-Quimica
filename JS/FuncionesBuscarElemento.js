//INFORMACIÓN DE LOS ELEMENTOS
const Elementos = {
    Hidrogeno: Hidrogeno = {
        Nombre: "Hidrogeno",
        MasaAtom: "1.008",
        MASimplificada: 1,
        NumAtom: 1,
        NumOx: [["-1"], ["+1"]],
        Simbolo: "H",
        Electronegatividad: "2.1",
        ConfiguracionElectr: "1s¹",
        ElectronDeValencia: "1s¹",
        Foto: "Imagenes/Hidrogeno.png",
    },
    Helio: Helio = {
        Nombre: "Helio",
        MasaAtom: "4.003",
        MASimplificada: 4,
        NumAtom: 2,
        NumOx: [["No tiene"], ["No tiene"]],
        Simbolo: "He",
        Electronegatividad: "No tiene",
        ConfiguracionElectr: "1s²",
        ElectronDeValencia: "1s²",
        Foto: "Imagenes/Helio.png",
    },
    Litio: Litio = {
        Nombre: "Litio",
        MasaAtom: "6.94",
        MASimplificada: 7,
        NumAtom: 3,
        NumOx: [["+1"]],
        Simbolo: "Li",
        Electronegatividad: "0.98",
        ConfiguracionElectr: "[He] 2s¹",
        ElectronDeValencia: "2s¹",
        Foto: "Imagenes/Litio.png",
    },
    Berilio: Berilio = {
        Nombre: "Berilio",
        MasaAtom: "9.0122",
        MASimplificada: 9,
        NumAtom: 4,
        NumOx: [["+2"]],
        Simbolo: "Be",
        Electronegatividad: "1.57",
        ConfiguracionElectr: "[He] 2s²",
        ElectronDeValencia: "2s²",
        Foto: "Imagenes/Berilio.png",
    },
    Boro: Boro = {
        Nombre: "Boro",
        MasaAtom: "10.81",
        MASimplificada: 11,
        NumAtom: 5,
        NumOx: [["+3"]],
        Simbolo: "B",
        Electronegatividad: "2.04",
        ConfiguracionElectr: "[He] 2s² 2p¹",
        ElectronDeValencia: "2s² 2p¹",
        Foto: "Imagenes/Boro.png",
    },
    Carbono: Carbono = {
        Nombre: "Carbono",
        MasaAtom: "12.011",
        MASimplificada: 12,
        NumAtom: 6,
        NumOx: [["-4"], ["+4"]],
        Simbolo: "C",
        Electronegatividad: "2.55",
        ConfiguracionElectr: "[He] 2s² 2p²",
        ElectronDeValencia: "2s² 2p²",
        Foto: "Imagenes/Carbono.png",
    },
    Nitrogeno: Nitrogeno = {
        Nombre: "Nitrogeno",
        MasaAtom: "14.007",
        MASimplificada: 14,
        NumAtom: 7,
        NumOx: [["-3"], ["+3"], ["+5"]],
        Simbolo: "N",
        Electronegatividad: "3.04",
        ConfiguracionElectr: "[He] 2s² 2p³",
        ElectronDeValencia: "2s² 2p³",
        Foto: "Imagenes/Nitrogeno.png",
    },
    Oxigeno: Oxigeno = {
        Nombre: "Oxigeno",
        MasaAtom: "15.999",
        MASimplificada: 16,
        NumAtom: 8,
        NumOx: [["-2"]],
        Simbolo: "O",
        Electronegatividad: "3.44",
        ConfiguracionElectr: "[He] 2s² 2p⁴",
        ElectronDeValencia: "2s² 2p⁴",
        Foto: "Imagenes/Oxigeno.png",
    },
    Fluor: Fluor = {
        Nombre: "Fluor",
        MasaAtom: "18.998",
        MASimplificada: 19,
        NumAtom: 9,
        NumOx: [["-1"]],
        Simbolo: "F",
        Electronegatividad: "3.98",
        ConfiguracionElectr: "[He] 2s² 2p⁵",
        ElectronDeValencia: "2s² 2p⁵",
        Foto: "Imagenes/Fluor.png",
    },
    Neon: Neon = {
        Nombre: "Neon",
        MasaAtom: "20.180",
        MASimplificada: 20,
        NumAtom: 10,
        NumOx: [["No tiene"]],
        Simbolo: "Ne",
        Electronegatividad: "No tiene",
        ConfiguracionElectr: "[He] 2s² 2p⁶",
        ElectronDeValencia: "2s² 2p⁶",
        Foto: "Imagenes/Neon.png",
    },
    Sodio: Sodio = {
        Nombre: "Sodio",
        MasaAtom: "22.990",
        MASimplificada: 23,
        NumAtom: 11,
        NumOx: [["+1"]],
        Simbolo: "Na",
        Electronegatividad: "0.93",
        ConfiguracionElectr: "[Ne] 3s¹",
        ElectronDeValencia: "3s¹",
        Foto: "Imagenes/Sodio.png",
    },
    Magnesio: Magnesio = {
        Nombre: "Magnesio",
        MasaAtom: "24.305",
        MASimplificada: 24,
        NumAtom: 12,
        NumOx: [["+2"]],
        Simbolo: "Mg",
        Electronegatividad: "1.31",
        ConfiguracionElectr: "[Ne] 3s²",
        ElectronDeValencia: "3s²",
        Foto: "Imagenes/Magnesio.png",
    },
    Aluminio: Aluminio = {
        Nombre: "Aluminio",
        MasaAtom: "26.982",
        MASimplificada: 27,
        NumAtom: 13,
        NumOx: [["+3"]],
        Simbolo: "Al",
        Electronegatividad: "1.61",
        ConfiguracionElectr: "[Ne] 3s² 3p¹",
        ElectronDeValencia: "3s² 3p¹",
        Foto: "Imagenes/Aluminio.png",
    },
    Silicio: Silicio = {
        Nombre: "Silicio",
        MasaAtom: "28.085",
        MASimplificada: 28,
        NumAtom: 14,
        NumOx: [["-4"], ["+4"]],
        Simbolo: "Si",
        Electronegatividad: "1.9",
        ConfiguracionElectr: "[Ne] 3s² 3p²",
        ElectronDeValencia: "3s² 3p²",
        Foto: "Imagenes/Silicio.png",
    },
    Fosforo: Fosforo = {
        Nombre: "Fosforo",
        MasaAtom: "30.974",
        MASimplificada: 31,
        NumAtom: 15,
        NumOx: [["-3"], ["+3"], ["+5"]],
        Simbolo: "P",
        Electronegatividad: "2.19",
        ConfiguracionElectr: "[Ne] 3s² 3p³",
        ElectronDeValencia: "3s² 3p³",
        Foto: "Imagenes/Fosforo.png",
    },
    Azufre: Azufre = {
        Nombre: "Azufre",
        MasaAtom: "32.06",
        MASimplificada: 32,
        NumAtom: 16,
        NumOx: [["-2"], ["+4"], ["+6"]],
        Simbolo: "S",
        Electronegatividad: "2.58",
        ConfiguracionElectr: "[Ne] 3s² 3p⁴",
        ElectronDeValencia: "3s² 3p⁴",
        Foto: "Imagenes/Azufre.png",
    },
    Cloro: Cloro = {
        Nombre: "Cloro",
        MasaAtom: "35.45",
        MASimplificada: 35,
        NumAtom: 17,
        NumOx: [["-1"], ["+1"], ["+3"], ["+5"], ["+7"]],
        Simbolo: "Cl",
        Electronegatividad: "3.16",
        ConfiguracionElectr: "[Ne] 3s² 3p⁵",
        ElectronDeValencia: "3s² 3p⁵",
        Foto: "Imagenes/Cloro.png",
    },
    Argon: Argon = {
        Nombre: "Argon",
        MasaAtom: "39.948",
        MASimplificada: 40,
        NumAtom: 18,
        NumOx: [["No tiene"]],
        Simbolo: "Ar",
        Electronegatividad: "No tiene",
        ConfiguracionElectr: "[Ne] 3s² 3p⁶",
        ElectronDeValencia: "3s² 3p⁶",
        Foto: "Imagenes/Argon.png",
    },
    Potasio: Potasio = {
        Nombre: "Potasio",
        MasaAtom: "39.098",
        MASimplificada: 39,
        NumAtom: 19,
        NumOx: [["+1"]],
        Simbolo: "K",
        Electronegatividad: "0.82",
        ConfiguracionElectr: "[Ar] 4s¹",
        ElectronDeValencia: "4s¹",
        Foto: "Imagenes/Potasio.png",
    },
    Calcio: Calcio = {
        Nombre: "Calcio",
        MasaAtom: "40.078",
        MASimplificada: 40,
        NumAtom: 20,
        NumOx: [["+2"]],
        Simbolo: "Ca",
        Electronegatividad: "1.00",
        ConfiguracionElectr: "[Ar] 4s²",
        ElectronDeValencia: "4s²",
        Foto: "Imagenes/Calcio.png",
    },
    Escandio: Escandio = {
        Nombre: "Escandio",
        MasaAtom: "44.955",
        MASimplificada: 45,
        NumAtom: 21,
        NumOx: [["+3"]],
        Simbolo: "Sc",
        Electronegatividad: "1.36",
        ConfiguracionElectr: "[Ar] 3d¹ 4s²",
        ElectronDeValencia: "3d¹ 4s²",
        Foto: "Imagenes/Escandio.png",
    },
    Titanio: Titanio = {
        Nombre: "Titanio",
        MasaAtom: "47.867",
        MASimplificada: 48,
        NumAtom: 22,
        NumOx: [["+4"]],
        Simbolo: "Ti",
        Electronegatividad: "1.54",
        ConfiguracionElectr: "[Ar] 3d² 4s²",
        ElectronDeValencia: "3d² 4s²",
        Foto: "Imagenes/Titanio.png",
    },
    Vanadio: Vanadio = {
        Nombre: "Vanadio",
        MasaAtom: "50.942",
        MASimplificada: 51,
        NumAtom: 23,
        NumOx: [["+5"]],
        Simbolo: "V",
        Electronegatividad: "1.63",
        ConfiguracionElectr: "[Ar] 3d³ 4s²",
        ElectronDeValencia: "3d³ 4s²",
        Foto: "Imagenes/Vanadio.png",
    },
    Cromo: Cromo = {
        Nombre: "Cromo",
        MasaAtom: "51.996",
        MASimplificada: 52,
        NumAtom: 24,
        NumOx: [["+3"], ["+6"]],
        Simbolo: "Cr",
        Electronegatividad: "1.66",
        ConfiguracionElectr: "[Ar] 3d⁵ 4s¹",
        ElectronDeValencia: "3d⁵ 4s¹",
        Foto: "Imagenes/Cromo.png",
    },
    Manganeso: Manganeso = {
        Nombre: "Manganeso",
        MasaAtom: "54.938",
        MASimplificada: 55,
        NumAtom: 25,
        NumOx: [["+2"], ["+4"], ["+7"]],
        Simbolo: "Mn",
        Electronegatividad: "1.55",
        ConfiguracionElectr: "[Ar] 3d⁵ 4s²",
        ElectronDeValencia: "3d⁵ 4s²",
        Foto: "Imagenes/Manganeso.png",
    },
    Hierro: Hierro = {
        Nombre: "Hierro",
        MasaAtom: "55.845",
        MASimplificada: 56,
        NumAtom: 26,
        NumOx: [["+2"], ["+3"]],
        Simbolo: "Fe",
        Electronegatividad: "1.83",
        ConfiguracionElectr: "[Ar] 3d⁶ 4s²",
        ElectronDeValencia: "3d⁶ 4s²",
        Foto: "Imagenes/Hierro.png",
    },
    Cobalto: Cobalto = {
        Nombre: "Cobalto",
        MasaAtom: "58.933",
        MASimplificada: 59,
        NumAtom: 27,
        NumOx: [["+2"], ["+3"]],
        Simbolo: "Co",
        Electronegatividad: "1.88",
        ConfiguracionElectr: "[Ar] 3d⁷ 4s²",
        ElectronDeValencia: "3d⁷ 4s²",
        Foto: "Imagenes/Cobalto.png",
    },
    Niquel: Niquel = {
        Nombre: "Niquel",
        MasaAtom: "58.693",
        MASimplificada: 59,
        NumAtom: 28,
        NumOx: [["+2"], ["+3"]],
        Simbolo: "Ni",
        Electronegatividad: "1.91",
        ConfiguracionElectr: "[Ar] 3d⁸ 4s²",
        ElectronDeValencia: "3d⁸ 4s²",
        Foto: "Imagenes/Niquel.png",
    },
    Cobre: Cobre = {
        Nombre: "Cobre",
        MasaAtom: "63.546",
        MASimplificada: 64,
        NumAtom: 29,
        NumOx: [["+1"], ["+2"]],
        Simbolo: "Cu",
        Electronegatividad: "1.90",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s¹",
        ElectronDeValencia: "3d¹⁰ 4s¹",
        Foto: "Imagenes/Cobre.png",
    },
    Zinc: Zinc = {
        Nombre: "Zinc",
        MasaAtom: "65.38",
        MASimplificada: 65,
        NumAtom: 30,
        NumOx: [["+2"]],
        Simbolo: "Zn",
        Electronegatividad: "1.65",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s²",
        ElectronDeValencia: "3d¹⁰ 4s²",
        Foto: "Imagenes/Zinc.png",
    },
    Galio: Galio = {
        Nombre: "Galio",
        MasaAtom: "69.723",
        MASimplificada: 70,
        NumAtom: 31,
        NumOx: [["+3"]],
        Simbolo: "Ga",
        Electronegatividad: "1.81",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s² 4p¹",
        ElectronDeValencia: "4s² 4p¹",
        Foto: "Imagenes/Galio.png",
    },
    Germanio: Germanio = {
        Nombre: "Germanio",
        MasaAtom: "72.63",
        MASimplificada: 73,
        NumAtom: 32,
        NumOx: [["-4"], ["+2"], ["+4"]],
        Simbolo: "Ge",
        Electronegatividad: "2.01",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s² 4p²",
        ElectronDeValencia: "4s² 4p²",
        Foto: "Imagenes/Germanio.png",
    },
    Arsenico: Arsenico = {
        Nombre: "Arsenico",
        MasaAtom: "74.922",
        MASimplificada: 75,
        NumAtom: 33,
        NumOx: [["-3"], ["+3"], ["+5"]],
        Simbolo: "As",
        Electronegatividad: "2.18",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s² 4p³",
        ElectronDeValencia: "4s² 4p³",
        Foto: "Imagenes/Arsenico.png",
    },
    Selenio: Selenio = {
        Nombre: "Selenio",
        MasaAtom: "78.971",
        MASimplificada: 79,
        NumAtom: 34,
        NumOx: [["-2"], ["+4"], ["+6"]],
        Simbolo: "Se",
        Electronegatividad: "2.55",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s² 4p⁴",
        ElectronDeValencia: "4s² 4p⁴",
        Foto: "Imagenes/Selenio.png",
    },
    Bromo: Bromo = {
        Nombre: "Bromo",
        MasaAtom: "79.904",
        MASimplificada: 80,
        NumAtom: 35,
        NumOx: [["-1"], ["+1"], ["+3"], ["+5"]],
        Simbolo: "Br",
        Electronegatividad: "2.96",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s² 4p⁵",
        ElectronDeValencia: "4s² 4p⁵",
        Foto: "Imagenes/Bromo.png",
    },
    Kripton: Kripton = {
        Nombre: "Kripton",
        MasaAtom: "83.798",
        MASimplificada: 84,
        NumAtom: 36,
        NumOx: [["+2"]],
        Simbolo: "Kr",
        Electronegatividad: "3.00",
        ConfiguracionElectr: "[Ar] 3d¹⁰ 4s² 4p⁶",
        ElectronDeValencia: "4s² 4p⁶",
        Foto: "Imagenes/Kripton.png",
    },
    Rubidio: Rubidio = {
        Nombre: "Rubidio",
        MasaAtom: "85.468",
        MASimplificada: 85,
        NumAtom: 37,
        NumOx: [["+1"]],
        Simbolo: "Rb",
        Electronegatividad: "0.82",
        ConfiguracionElectr: "[Kr] 5s¹",
        ElectronDeValencia: "5s¹",
        Foto: "Imagenes/Rubidio.png",
    },
    Estroncio: Estroncio = {
        Nombre: "Estroncio",
        MasaAtom: "87.62",
        MASimplificada: 88,
        NumAtom: 38,
        NumOx: [["+2"]],
        Simbolo: "Sr",
        Electronegatividad: "0.95",
        ConfiguracionElectr: "[Kr] 5s²",
        ElectronDeValencia: "5s²",
        Foto: "Imagenes/Estroncio.png",
    },
    Itrio: Itrio = {
        Nombre: "Itrio",
        MasaAtom: "88.906",
        MASimplificada: 89,
        NumAtom: 39,
        NumOx: [["+3"]],
        Simbolo: "Y",
        Electronegatividad: "1.22",
        ConfiguracionElectr: "[Kr] 4d¹ 5s²",
        ElectronDeValencia: "4d¹ 5s²",
        Foto: "Imagenes/Itrio.png",
    },
    Circonio: Circonio = {
        Nombre: "Circonio",
        MasaAtom: "91.224",
        MASimplificada: 91,
        NumAtom: 40,
        NumOx: [["+4"]],
        Simbolo: "Zr",
        Electronegatividad: "1.33",
        ConfiguracionElectr: "[Kr] 4d² 5s²",
        ElectronDeValencia: "4d² 5s²",
        Foto: "Imagenes/Circonio.png",
    },
    Niobio: Niobio = {
        Nombre: "Niobio",
        MasaAtom: "92.906",
        MASimplificada: 93,
        NumAtom: 41,
        NumOx: [["+5"]],
        Simbolo: "Nb",
        Electronegatividad: "1.6",
        ConfiguracionElectr: "[Kr] 4d⁴ 5s¹",
        ElectronDeValencia: "4d⁴ 5s¹",
        Foto: "Imagenes/Niobio.png",
    },
    Molibdeno: Molibdeno = {
        Nombre: "Molibdeno",
        MasaAtom: "95.95",
        MASimplificada: 96,
        NumAtom: 42,
        NumOx: [["+4"], ["+6"]],
        Simbolo: "Mo",
        Electronegatividad: "2.16",
        ConfiguracionElectr: "[Kr] 4d⁵ 5s¹",
        ElectronDeValencia: "4d⁵ 5s¹",
        Foto: "Imagenes/Molibdeno.png",
    },
    Tecnecio: Tecnecio = {
        Nombre: "Tecnecio",
        MasaAtom: "98",
        MASimplificada: 98,
        NumAtom: 43,
        NumOx: [["+7"]],
        Simbolo: "Tc",
        Electronegatividad: "1.9",
        ConfiguracionElectr: "[Kr] 4d⁵ 5s²",
        ElectronDeValencia: "4d⁵ 5s²",
        Foto: "Imagenes/Tecnecio.png",
    },
    Rutenio: Rutenio = {
        Nombre: "Rutenio",
        MasaAtom: "101.07",
        MASimplificada: 101,
        NumAtom: 44,
        NumOx: [["+4"]],
        Simbolo: "Ru",
        Electronegatividad: "2.2",
        ConfiguracionElectr: "[Kr] 4d⁷ 5s¹",
        ElectronDeValencia: "4d⁷ 5s¹",
        Foto: "Imagenes/Rutenio.png",
    },
    Rodio: Rodio = {
        Nombre: "Rodio",
        MasaAtom: "102.91",
        MASimplificada: 103,
        NumAtom: 45,
        NumOx: [["+3"]],
        Simbolo: "Rh",
        Electronegatividad: "2.28",
        ConfiguracionElectr: "[Kr] 4d⁸ 5s¹",
        ElectronDeValencia: "4d⁸ 5s¹",
        Foto: "Imagenes/Rodio.png",
    },
    Paladio: Paladio = {
        Nombre: "Paladio",
        MasaAtom: "106.42",
        MASimplificada: 106,
        NumAtom: 46,
        NumOx: [["+2"], ["+4"]],
        Simbolo: "Pd",
        Electronegatividad: "2.20",
        ConfiguracionElectr: "[Kr] 4d¹⁰",
        ElectronDeValencia: "4d¹⁰",
        Foto: "Imagenes/Paladio.png",
    },
    Plata: Plata = {
        Nombre: "Plata",
        MasaAtom: "107.87",
        MASimplificada: 108,
        NumAtom: 47,
        NumOx: [["+1"]],
        Simbolo: "Ag",
        Electronegatividad: "1.93",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s¹",
        ElectronDeValencia: "4d¹⁰ 5s¹",
        Foto: "Imagenes/Plata.png",
    },
    Cadmio: Cadmio = {
        Nombre: "Cadmio",
        MasaAtom: "112.41",
        MASimplificada: 112,
        NumAtom: 48,
        NumOx: [["+2"]],
        Simbolo: "Cd",
        Electronegatividad: "1.69",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s²",
        ElectronDeValencia: "4d¹⁰ 5s²",
        Foto: "Imagenes/Cadmio.png",
    },
    Indio: Indio = {
        Nombre: "Indio",
        MasaAtom: "114.82",
        MASimplificada: 115,
        NumAtom: 49,
        NumOx: [["+3"]],
        Simbolo: "In",
        Electronegatividad: "1.78",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s² 5p¹",
        ElectronDeValencia: "5s² 5p¹",
        Foto: "Imagenes/Indio.png",
    },
    Estaño: Estaño = {
        Nombre: "Estaño",
        MasaAtom: "118.71",
        MASimplificada: 119,
        NumAtom: 50,
        NumOx: [["-4"], ["+2"], ["+4"]],
        Simbolo: "Sn",
        Electronegatividad: "1.96",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s² 5p²",
        ElectronDeValencia: "5s² 5p²",
        Foto: "Imagenes/Estaño.png",
    },
    Antimonio: Antimonio = {
        Nombre: "Antimonio",
        MasaAtom: "121.76",
        MASimplificada: 122,
        NumAtom: 51,
        NumOx: [["-3"], ["+3"], ["+5"]],
        Simbolo: "Sb",
        Electronegatividad: "2.05",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s² 5p³",
        ElectronDeValencia: "5s² 5p³",
        Foto: "Imagenes/Antimonio.png",
    },
    Telurio: Telurio = {
        Nombre: "Telurio",
        MasaAtom: "127.60",
        MASimplificada: 128,
        NumAtom: 52,
        NumOx: [["-2"], ["+4"], ["+6"]],
        Simbolo: "Te",
        Electronegatividad: "2.1",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s² 5p⁴",
        ElectronDeValencia: "5s² 5p⁴",
        Foto: "Imagenes/Telurio.png",
    },
    Yodo: Yodo = {
        Nombre: "Yodo",
        MasaAtom: "126.90",
        MASimplificada: 127,
        NumAtom: 53,
        NumOx: [["-1"], ["+1"], ["+3"], ["+5"], ["+7"]],
        Simbolo: "I",
        Electronegatividad: "2.66",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s² 5p⁵",
        ElectronDeValencia: "5s² 5p⁵",
        Foto: "Imagenes/Yodo.png",
    },
    Xenon: Xenon = {
        Nombre: "Xenon",
        MasaAtom: "131.29",
        MASimplificada: 131,
        NumAtom: 54,
        NumOx: [["0"], ["+2"], ["+4"], ["+6"], ["+8"]],
        Simbolo: "Xe",
        Electronegatividad: "2.6",
        ConfiguracionElectr: "[Kr] 4d¹⁰ 5s² 5p⁶",
        ElectronDeValencia: "5s² 5p⁶",
        Foto: "Imagenes/Xenon.png",
    },
    Cesio: Cesio = {
        Nombre: "Cesio",
        MasaAtom: "132.91",
        MASimplificada: 133,
        NumAtom: 55,
        NumOx: [["+1"]],
        Simbolo: "Cs",
        Electronegatividad: "0.79",
        ConfiguracionElectr: "[Xe] 6s¹",
        ElectronDeValencia: "6s¹",
        Foto: "Imagenes/Cesio.png",
    },
    Bario: Bario = {
        Nombre: "Bario",
        MasaAtom: "137.33",
        MASimplificada: 137,
        NumAtom: 56,
        NumOx: [["+2"]],
        Simbolo: "Ba",
        Electronegatividad: "0.89",
        ConfiguracionElectr: "[Xe] 6s²",
        ElectronDeValencia: "6s²",
        Foto: "Imagenes/Bario.png",
    },
    Lantano: Lantano = {
        Nombre: "Lantano",
        MasaAtom: "138.91",
        MASimplificada: 139,
        NumAtom: 57,
        NumOx: [["+3"]],
        Simbolo: "La",
        Electronegatividad: "1.10",
        ConfiguracionElectr: "[Xe] 5d¹ 6s²",
        ElectronDeValencia: "5d¹ 6s²",
        Foto: "Imagenes/Lantano.png",
    },
    Cerio: Cerio = {
        Nombre: "Cerio",
        MasaAtom: "140.12",
        MASimplificada: 140,
        NumAtom: 58,
        NumOx: [["+3"], ["+4"]],
        Simbolo: "Ce",
        Electronegatividad: "1.12",
        ConfiguracionElectr: "[Xe] 4f¹ 5d¹ 6s²",
        ElectronDeValencia: "4f¹ 5d¹ 6s²",
        Foto: "Imagenes/Cerio.png",
    },
    Praseodimio: Praseodimio = {
        Nombre: "Praseodimio",
        MasaAtom: "140.91",
        MASimplificada: 141,
        NumAtom: 59,
        NumOx: [["+3"]],
        Simbolo: "Pr",
        Electronegatividad: "1.13",
        ConfiguracionElectr: "[Xe] 4f³ 6s²",
        ElectronDeValencia: "4f³ 6s²",
        Foto: "Imagenes/Praseodimio.png",
    },
    Neodimio: Neodimio = {
        Nombre: "Neodimio",
        MasaAtom: "144.24",
        MASimplificada: 144,
        NumAtom: 60,
        NumOx: [["+3"]],
        Simbolo: "Nd",
        Electronegatividad: "1.14",
        ConfiguracionElectr: "[Xe] 4f⁴ 6s²",
        ElectronDeValencia: "4f⁴ 6s²",
        Foto: "Imagenes/Neodimio.png",
    },
    Prometio: Prometio = {
        Nombre: "Prometio",
        MasaAtom: "145",
        MASimplificada: 145,
        NumAtom: 61,
        NumOx: [["+3"]],
        Simbolo: "Pm",
        Electronegatividad: "1.13",
        ConfiguracionElectr: "[Xe] 4f⁵ 6s²",
        ElectronDeValencia: "4f⁵ 6s²",
        Foto: "Imagenes/Prometio.png",
    },
    Samario: Samario = {
        Nombre: "Samario",
        MasaAtom: "150.36",
        MASimplificada: 150,
        NumAtom: 62,
        NumOx: [["+2"], ["+3"]],
        Simbolo: "Sm",
        Electronegatividad: "1.17",
        ConfiguracionElectr: "[Xe] 4f⁶ 6s²",
        ElectronDeValencia: "4f⁶ 6s²",
        Foto: "Imagenes/Samario.png",
    },
    Europio: Europio = {
        Nombre: "Europio",
        MasaAtom: "151.96",
        MASimplificada: 152,
        NumAtom: 63,
        NumOx: [["+2"], ["+3"]],
        Simbolo: "Eu",
        Electronegatividad: "1.20",
        ConfiguracionElectr: "[Xe] 4f⁷ 6s²",
        ElectronDeValencia: "4f⁷ 6s²",
        Foto: "Imagenes/Europio.png",
    },
    Gadolinio: Gadolinio = {
        Nombre: "Gadolinio",
        MasaAtom: "157.25",
        MASimplificada: 157,
        NumAtom: 64,
        NumOx: [["+3"]],
        Simbolo: "Gd",
        Electronegatividad: "1.20",
        ConfiguracionElectr: "[Xe] 4f⁷ 5d¹ 6s²",
        ElectronDeValencia: "4f⁷ 5d¹ 6s²",
        Foto: "Imagenes/Gadolinio.png",
    },
    Terbio: Terbio = {
        Nombre: "Terbio",
        MasaAtom: "158.93",
        MASimplificada: 159,
        NumAtom: 65,
        NumOx: [["+3"]],
        Simbolo: "Tb",
        Electronegatividad: "1.22",
        ConfiguracionElectr: "[Xe] 4f⁹ 6s²",
        ElectronDeValencia: "4f⁹ 6s²",
        Foto: "Imagenes/Terbio.png",
    },
    Disprosio: Disprosio = {
        Nombre: "Disprosio",
        MasaAtom: "162.50",
        MASimplificada: 163,
        NumAtom: 66,
        NumOx: [["+3"]],
        Simbolo: "Dy",
        Electronegatividad: "1.22",
        ConfiguracionElectr: "[Xe] 4f¹⁰ 6s²",
        ElectronDeValencia: "4f¹⁰ 6s²",
        Foto: "Imagenes/Disprosio.png",
    },
    Holmio: Holmio = {
        Nombre: "Holmio",
        MasaAtom: "164.93",
        MASimplificada: 165,
        NumAtom: 67,
        NumOx: [["+3"]],
        Simbolo: "Ho",
        Electronegatividad: "1.23",
        ConfiguracionElectr: "[Xe] 4f¹¹ 6s²",
        ElectronDeValencia: "4f¹¹ 6s²",
        Foto: "Imagenes/Holmio.png",
    },
    Erbio: Erbio = {
        Nombre: "Erbio",
        MasaAtom: "167.26",
        MASimplificada: 167,
        NumAtom: 68,
        NumOx: [["+3"]],
        Simbolo: "Er",
        Electronegatividad: "1.24",
        ConfiguracionElectr: "[Xe] 4f¹² 6s²",
        ElectronDeValencia: "4f¹² 6s²",
        Foto: "Imagenes/Erbio.png",
    },
    Tulio: Tulio = {
        Nombre: "Tulio",
        MasaAtom: "168.93",
        MASimplificada: 169,
        NumAtom: 69,
        NumOx: [["+3"]],
        Simbolo: "Tm",
        Electronegatividad: "1.25",
        ConfiguracionElectr: "[Xe] 4f¹³ 6s²",
        ElectronDeValencia: "4f¹³ 6s²",
        Foto: "Imagenes/Tulio.png",
    },
    Iterbio: Iterbio = {
        Nombre: "Iterbio",
        MasaAtom: "173.04",
        MASimplificada: 173,
        NumAtom: 70,
        NumOx: [["+2"], ["+3"]],
        Simbolo: "Yb",
        Electronegatividad: "1.1",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 6s²",
        ElectronDeValencia: "4f¹⁴ 6s²",
        Foto: "Imagenes/Iterbio.png",
    },
    Lutecio: Lutecio = {
        Nombre: "Lutecio",
        MasaAtom: "174.97",
        MASimplificada: 175,
        NumAtom: 71,
        NumOx: [["+3"]],
        Simbolo: "Lu",
        Electronegatividad: "1.27",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹ 6s²",
        ElectronDeValencia: "4f¹⁴ 5d¹ 6s²",
        Foto: "Imagenes/Lutecio.png",
    },
    Hafnio: Hafnio = {
        Nombre: "Hafnio",
        MasaAtom: "178.49",
        MASimplificada: 178,
        NumAtom: 72,
        NumOx: [["+4"]],
        Simbolo: "Hf",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d² 6s²",
        ElectronDeValencia: "4f¹⁴ 5d² 6s²",
        Foto: "Imagenes/Hafnio.png",
    },
    Tantalio: Tantalio = {
        Nombre: "Tantalio",
        MasaAtom: "180.95",
        MASimplificada: 181,
        NumAtom: 73,
        NumOx: [["+5"]],
        Simbolo: "Ta",
        Electronegatividad: "1.5",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d³ 6s²",
        ElectronDeValencia: "4f¹⁴ 5d³ 6s²",
        Foto: "Imagenes/Tantalio.png",
    },
    Wolframio: Wolframio = {
        Nombre: "Wolframio",
        MasaAtom: "183.84",
        MASimplificada: 184,
        NumAtom: 74,
        NumOx: [["+6"]],
        Simbolo: "W",
        Electronegatividad: "2.36",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d⁴ 6s²",
        ElectronDeValencia: "4f¹⁴ 5d⁴ 6s²",
        Foto: "Imagenes/Wolframio.png",
    },
    Renio: Renio = {
        Nombre: "Renio",
        MasaAtom: "186.21",
        MASimplificada: 186,
        NumAtom: 75,
        NumOx: [["+7"]],
        Simbolo: "Re",
        Electronegatividad: "1.9",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d⁵ 6s²",
        ElectronDeValencia: "4f¹⁴ 5d⁵ 6s²",
        Foto: "Imagenes/Renio.png",
    },
    Osmio: Osmio = {
        Nombre: "Osmio",
        MasaAtom: "190.23",
        MASimplificada: 190,
        NumAtom: 76,
        NumOx: [["+4"]],
        Simbolo: "Os",
        Electronegatividad: "2.2",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d⁶ 6s²",
        ElectronDeValencia: "4f¹⁴ 5d⁶ 6s²",
        Foto: "Imagenes/Osmio.png",
    },
    Iridio: Iridio = {
        Nombre: "Iridio",
        MasaAtom: "192.22",
        MASimplificada: 192,
        NumAtom: 77,
        NumOx: [["+4"]],
        Simbolo: "Ir",
        Electronegatividad: "2.2",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d⁷ 6s²",
        ElectronDeValencia: "4f¹⁴ 5d⁷ 6s²",
        Foto: "Imagenes/Iridio.png",
    },
    Platino: Platino = {
        Nombre: "Platino",
        MasaAtom: "195.08",
        MASimplificada: 195,
        NumAtom: 78,
        NumOx: [["+2"], ["+4"]],
        Simbolo: "Pt",
        Electronegatividad: "2.28",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
        ElectronDeValencia: "4f¹⁴ 5d⁹ 6s¹",
        Foto: "Imagenes/Platino.png",
    },
    Oro: Oro = {
        Nombre: "Oro",
        MasaAtom: "196.97",
        MASimplificada: 197,
        NumAtom: 79,
        NumOx: [["+1"], ["+3"]],
        Simbolo: "Au",
        Electronegatividad: "2.54",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        ElectronDeValencia: "4f¹⁴ 5d¹⁰ 6s¹",
        Foto: "Imagenes/Oro.png",
    },
    Mercurio: Mercurio = {
        Nombre: "Mercurio",
        MasaAtom: "200.59",
        MASimplificada: 201,
        NumAtom: 80,
        NumOx: [["+1"], ["+2"]],
        Simbolo: "Hg",
        Electronegatividad: "2.0",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        ElectronDeValencia: "4f¹⁴ 5d¹⁰ 6s²",
        Foto: "Imagenes/Mercurio.png",
    },
    Talio: Talio = {
        Nombre: "Talio",
        MasaAtom: "204.38",
        MASimplificada: 204,
        NumAtom: 81,
        NumOx: [["+1"], ["+3"]],
        Simbolo: "Tl",
        Electronegatividad: "1.62",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
        ElectronDeValencia: "6s² 6p¹",
        Foto: "Imagenes/Talio.png",
    },
    Plomo: Plomo = {
        Nombre: "Plomo",
        MasaAtom: "207.2",
        MASimplificada: 207,
        NumAtom: 82,
        NumOx: [["+2"], ["+4"]],
        Simbolo: "Pb",
        Electronegatividad: "2.33",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
        ElectronDeValencia: "6s² 6p²",
        Foto: "Imagenes/Plomo.png",
    },
    Bismuto: Bismuto = {
        Nombre: "Bismuto",
        MasaAtom: "208.98",
        MASimplificada: 209,
        NumAtom: 83,
        NumOx: [["+3"], ["+5"]],
        Simbolo: "Bi",
        Electronegatividad: "2.02",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
        ElectronDeValencia: "6s² 6p³",
        Foto: "Imagenes/Bismuto.png",
    },
    Polonio: Polonio = {
        Nombre: "Polonio",
        MasaAtom: "209",
        MASimplificada: 209,
        NumAtom: 84,
        NumOx: [["+2"], ["+4"]],
        Simbolo: "Po",
        Electronegatividad: "2.0",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
        ElectronDeValencia: "6s² 6p⁴",
        Foto: "Imagenes/Polonio.png",
    },
    Astato: Astato = {
        Nombre: "Astato",
        MasaAtom: "210",
        MASimplificada: 210,
        NumAtom: 85,
        NumOx: [["-1"], ["+1"], ["+3"], ["+5"]],
        Simbolo: "At",
        Electronegatividad: "2.2",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
        ElectronDeValencia: "6s² 6p⁵",
        Foto: "Imagenes/Astato.png",
    },
    Radon: Radon = {
        Nombre: "Radon",
        MasaAtom: "222",
        MASimplificada: 222,
        NumAtom: 86,
        NumOx: ["No tiene"],
        Simbolo: "Rn",
        Electronegatividad: "No tiene",
        ConfiguracionElectr: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
        ElectronDeValencia: "6s² 6p⁶",
        Foto: "Imagenes/Radon.png",
    },
    Francio: Francio = {
        Nombre: "Francio",
        MasaAtom: "223",
        MASimplificada: 223,
        NumAtom: 87,
        NumOx: [["+1"]],
        Simbolo: "Fr",
        Electronegatividad: "0.7",
        ConfiguracionElectr: "[Rn] 7s¹",
        ElectronDeValencia: "7s¹",
        Foto: "Imagenes/Francio.png",
    },
    Radio: Radio = {
        Nombre: "Radio",
        MasaAtom: "226",
        MASimplificada: 226,
        NumAtom: 88,
        NumOx: [["+2"]],
        Simbolo: "Ra",
        Electronegatividad: "0.9",
        ConfiguracionElectr: "[Rn] 7s²",
        ElectronDeValencia: "7s²",
        Foto: "Imagenes/Radio.png",
    },
    Actinio: Actinio = {
        Nombre: "Actinio",
        MasaAtom: "227",
        MASimplificada: 227,
        NumAtom: 89,
        NumOx: [["+3"]],
        Simbolo: "Ac",
        Electronegatividad: "1.1",
        ConfiguracionElectr: "[Rn] 6d¹ 7s²",
        ElectronDeValencia: "6d¹ 7s²",
        Foto: "Imagenes/Actinio.png",
    },
    Torio: Torio = {
        Nombre: "Torio",
        MasaAtom: "232.04",
        MASimplificada: 232,
        NumAtom: 90,
        NumOx: [["+4"]],
        Simbolo: "Th",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 6d² 7s²",
        ElectronDeValencia: "6d² 7s²",
        Foto: "Imagenes/Torio.png",
    },
    Protactinio: Protactinio = {
        Nombre: "Protactinio",
        MasaAtom: "231.04",
        MASimplificada: 231,
        NumAtom: 91,
        NumOx: [["+5"]],
        Simbolo: "Pa",
        Electronegatividad: "1.5",
        ConfiguracionElectr: "[Rn] 5f² 6d¹ 7s²",
        ElectronDeValencia: "5f² 6d¹ 7s²",
        Foto: "Imagenes/Protactinio.png",
    },
    Uranio: Uranio = {
        Nombre: "Uranio",
        MasaAtom: "238.03",
        MASimplificada: 238,
        NumAtom: 92,
        NumOx: [["+6"]],
        Simbolo: "U",
        Electronegatividad: "1.38",
        ConfiguracionElectr: "[Rn] 5f³ 6d¹ 7s²",
        ElectronDeValencia: "5f³ 6d¹ 7s²",
        Foto: "Imagenes/Uranio.png",
    },
    Neptunio: Neptunio = {
        Nombre: "Neptunio",
        MasaAtom: "237",
        MASimplificada: 237,
        NumAtom: 93,
        NumOx: [["+5"]],
        Simbolo: "Np",
        Electronegatividad: "1.36",
        ConfiguracionElectr: "[Rn] 5f⁴ 6d¹ 7s²",
        ElectronDeValencia: "5f⁴ 6d¹ 7s²",
        Foto: "Imagenes/Neptunio.png",
    },
    Plutonio: Plutonio = {
        Nombre: "Plutonio",
        MasaAtom: "244",
        MASimplificada: 244,
        NumAtom: 94,
        NumOx: [["+4"], ["+6"]],
        Simbolo: "Pu",
        Electronegatividad: "1.28",
        ConfiguracionElectr: "[Rn] 5f⁶ 7s²",
        ElectronDeValencia: "5f⁶ 7s²",
        Foto: "Imagenes/Plutonio.png",
    },
    Americio: Americio = {
        Nombre: "Americio",
        MasaAtom: "243",
        MASimplificada: 243,
        NumAtom: 95,
        NumOx: [["+3"]],
        Simbolo: "Am",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f⁷ 7s²",
        ElectronDeValencia: "5f⁷ 7s²",
        Foto: "Imagenes/Americio.png",
    },
    Curio: Curio = {
        Nombre: "Curio",
        MasaAtom: "247",
        MASimplificada: 247,
        NumAtom: 96,
        NumOx: [["+3"]],
        Simbolo: "Cm",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f⁷ 6d¹ 7s²",
        ElectronDeValencia: "5f⁷ 6d¹ 7s²",
        Foto: "Imagenes/Curio.png",
    },
    Berkelio: Berkelio = {
        Nombre: "Berkelio",
        MasaAtom: "247",
        MASimplificada: 247,
        NumAtom: 97,
        NumOx: [["+3"], ["+4"]],
        Simbolo: "Bk",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f⁹ 7s²",
        ElectronDeValencia: "5f⁹ 7s²",
        Foto: "Imagenes/Berkelio.png",
    },
    Californio: Californio = {
        Nombre: "Californio",
        MasaAtom: "251",
        MASimplificada: 251,
        NumAtom: 98,
        NumOx: [["+3"], ["+4"]],
        Simbolo: "Cf",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f¹⁰ 7s²",
        ElectronDeValencia: "5f¹⁰ 7s²",
        Foto: "Imagenes/Californio.png",
    },
    Einstenio: Einstenio = {
        Nombre: "Einstenio",
        MasaAtom: "252",
        MASimplificada: 252,
        NumAtom: 99,
        NumOx: [["+3"]],
        Simbolo: "Es",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f¹¹ 7s²",
        ElectronDeValencia: "5f¹¹ 7s²",
        Foto: "Imagenes/Einstenio.png",
    },
    Fermio: Fermio = {
        Nombre: "Fermio",
        MasaAtom: "257",
        MASimplificada: 257,
        NumAtom: 100,
        NumOx: [["+3"]],
        Simbolo: "Fm",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f¹² 7s²",
        ElectronDeValencia: "5f¹² 7s²",
        Foto: "Imagenes/Fermio.png",
    },
    Mendelevio: Mendelevio = {
        Nombre: "Mendelevio",
        MasaAtom: "258",
        MASimplificada: 258,
        NumAtom: 101,
        NumOx: [["+3"]],
        Simbolo: "Md",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f¹³ 7s²",
        ElectronDeValencia: "5f¹³ 7s²",
        Foto: "Imagenes/Mendelevio.png",
    },
    Nobelio: Nobelio = {
        Nombre: "Nobelio",
        MasaAtom: "259",
        MASimplificada: 259,
        NumAtom: 102,
        NumOx: [["+2"], ["+3"]],
        Simbolo: "No",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f¹⁴ 7s²",
        ElectronDeValencia: "5f¹⁴ 7s²",
        Foto: "Imagenes/Nobelio.png",
    },
    Lawrencio: Lawrencio = {
        Nombre: "Lawrencio",
        MasaAtom: "262",
        MASimplificada: 262,
        NumAtom: 103,
        NumOx: [["+3"]],
        Simbolo: "Lr",
        Electronegatividad: "1.3",
        ConfiguracionElectr: "[Rn] 5f¹⁴ 7s² 7p¹",
        ElectronDeValencia: "7s² 7p¹",
        Foto: "Imagenes/Lawrencio.png",
    },
    Unbiunio: Unbiunio = {
        Nombre: "Unbiunio",
        MasaAtom: "Desconocido",
        MASimplificada: 292,
        NumAtom: 121,
        NumOx: [["+3"]],
        Simbolo: "Ubu",
        Electronegatividad: "Desconocido",
        ConfiguracionElectr: "[Uuo] 8s² 8p¹",
        ElectronDeValencia: "8s² 8p¹",
        Foto: "Imagenes/Unbiunio.png",
    }
};

//VARIABLES CON LOS COLORES QUE SE USARÁN
var ColorAvisoCorrecto = "rgba(43, 216, 43, 0.678)";
var ColorLetraAvisoCorrecto = "rgb(194, 253, 194)";
var ColorAvisoIncorrecto = "rgba(243, 50, 50, 0.678)";
var ColorLetraAvisoIncorrecto = "rgb(248, 196, 196)";

//BOTONES DE LA PAGINA CalQuimmBuscar
document.getElementById("BtnBuscar").addEventListener("click", Buscar);

//ELEMENTOS DEL DIV QUE MUESTRA LA INFORMACIÓN DEL ELEMENTO BUSCADO
var FotoEle = document.querySelector(".FotoEle")
var NombreEle = document.querySelector(".NombreEle");
var SimboloEle = document.querySelector(".SimboloEle");
var NumAtomEle = document.querySelector(".NumAtomEle");
var MasaAtomEle = document.querySelector(".MasaAtomEle");
var NumElectrEle = document.querySelector(".NumElectrEle");
var NumProtEle = document.querySelector(".NumProtEle");
var NumNeutEle = document.querySelector(".NumNeutEle");
var NumOxEle = document.querySelector(".NumOxEle");
var ElectronegatividadEle = document.querySelector(".ElectronegatividadEle");
var ConfElectrEle = document.querySelector(".ConfElectrEle");
var ElectrDeValEle = document.querySelector(".ElectrDeValEle");
//------ELEMENTOS DEL DIV PARA AVISARLE AL USUARIO SI SE HA PODIDO ENCONTRAR EL ELEMENTO-------
var Aviso = document.querySelector(".SeEncontroElemento");
var H3Aviso = document.querySelector(".EstadoDeBusqueda");
var TextoAviso = document.querySelector(".RazonInfo");

//VARIABLES AUXILIARES
var Encontrado = false
var NúmeroA = 0;
var NúmeroB = 0;
var Protones =  0;

//FUNCION PRINCIPAL CUANDO SE PRESIONE EL BOTÓN BUSCAR Y ASIGNACION DE DICCIONARIO AL PARAMETRO QUE RECOPILA LA INFORMACIÓN 
function Buscar(){
    var Busqueda = document.querySelector('.ElemtoBuscar').value;
    Busqueda = Busqueda.toLowerCase();
    Busqueda = Busqueda.split(" ").join('');
    Busqueda = Busqueda.charAt(0).toUpperCase() + Busqueda.slice(1);
    for (i in Elementos){
        if (Busqueda == i){
            VaciarInfo();
            LlamadoCorrecto(Busqueda);
            VerElem(Busqueda);
            break;
        }
        else{
            LlamadoIncorrecto(Busqueda);
            VaciarInfo();
        }
    };
};
function VerElem(Eleccion){
    switch (Eleccion) {
        case "Hidrogeno":
            TomarNum(Hidrogeno);
            LlamarInfoElem(Hidrogeno);
            break;
        case "Helio":
            TomarNum(Helio);
            LlamarInfoElem(Helio);
            break;
        case "Litio":
            TomarNum(Litio);
            LlamarInfoElem(Litio);
            break;
        case "Berilio":
            TomarNum(Berilio);
            LlamarInfoElem(Berilio);
            break;
        case "Boro":
            TomarNum(Boro);
            LlamarInfoElem(Boro);
            break;
        case "Carbono":
            TomarNum(Carbono);
            LlamarInfoElem(Carbono);
            break;
        case "Nitrogeno":
            TomarNum(Nitrogeno);
            LlamarInfoElem(Nitrogeno);
            break;
        case "Oxigeno":
            TomarNum(Oxigeno);
            LlamarInfoElem(Oxigeno);
            break;
        case "Fluor":
            TomarNum(Fluor);
            LlamarInfoElem(Fluor);
            break;
        case "Neon":
            TomarNum(Neon);
            LlamarInfoElem(Neon);
            break;
        case "Sodio":
            TomarNum(Sodio);
            LlamarInfoElem(Sodio);
            break;
        case "Magnesio":
            TomarNum(Magnesio);
            LlamarInfoElem(Magnesio);
            break;
        case "Aluminio":
            TomarNum(Aluminio);
            LlamarInfoElem(Aluminio);
            break;
        case "Silicio":
            TomarNum(Silicio);
            LlamarInfoElem(Silicio);
            break;
        case "Fosforo":
            TomarNum(Fosforo);
            LlamarInfoElem(Fosforo);
            break;
        case "Azufre":
            TomarNum(Azufre);
            LlamarInfoElem(Azufre);
            break;
        case "Cloro":
            TomarNum(Cloro);
            LlamarInfoElem(Cloro);
            break;
        case "Argon":
            TomarNum(Argon);
            LlamarInfoElem(Argon);
            break;
        case "Potasio":
            TomarNum(Potasio);
            LlamarInfoElem(Potasio);
            break;
        case "Calcio":
            TomarNum(Calcio);
            LlamarInfoElem(Calcio);
            break;
        case "Escandio":
            TomarNum(Escandio);
            LlamarInfoElem(Escandio);
            break;
        case "Titanio":
            TomarNum(Titanio);
            LlamarInfoElem(Titanio);
            break;
        case "Vanadio":
            TomarNum(Vanadio);
            LlamarInfoElem(Vanadio);
            break;
        case "Cromo":
            TomarNum(Cromo);
            LlamarInfoElem(Cromo);
            break;
        case "Manganeso":
            TomarNum(Manganeso);
            LlamarInfoElem(Manganeso);
            break;
        case "Hierro":
            TomarNum(Hierro);
            LlamarInfoElem(Hierro);
            break;
        case "Cobalto":
            TomarNum(Cobalto);
            LlamarInfoElem(Cobalto);
            break;
        case "Niquel":
            TomarNum(Niquel);
            LlamarInfoElem(Niquel);
            break;
        case "Cobre":
            TomarNum(Cobre);
            LlamarInfoElem(Cobre);
            break;
        case "Zinc":
            TomarNum(Zinc);
            LlamarInfoElem(Zinc);
            break;
        case "Galio":
            TomarNum(Galio);
            LlamarInfoElem(Galio);
            break;
        case "Germanio":
            TomarNum(Germanio);
            LlamarInfoElem(Germanio);
            break;
        case "Arsenico":
            TomarNum(Arsenico);
            LlamarInfoElem(Arsenico);
            break;
        case "Selenio":
            TomarNum(Selenio);
            LlamarInfoElem(Selenio);
            break;
        case "Bromo":
            TomarNum(Bromo);
            LlamarInfoElem(Bromo);
            break;
        case "Kripton":
            TomarNum(Kripton);
            LlamarInfoElem(Kripton);
            break;
        case "Rubidio":
            TomarNum(Rubidio);
            LlamarInfoElem(Rubidio);
            break;
        case "Estroncio":
            TomarNum(Estroncio);
            LlamarInfoElem(Estroncio);
            break;
        case "Itrio":
            TomarNum(Itrio);
            LlamarInfoElem(Itrio);
            break;
        case "Circonio":
            TomarNum(Circonio);
            LlamarInfoElem(Circonio);
            break;
        case "Niobio":
            TomarNum(Niobio);
            LlamarInfoElem(Niobio);
            break;
        case "Molibdeno":
            TomarNum(Molibdeno);
            LlamarInfoElem(Molibdeno);
            break;
        case "Tecnecio":
            TomarNum(Tecnecio);
            LlamarInfoElem(Tecnecio);
            break;
        case "Rutenio":
            TomarNum(Rutenio);
            LlamarInfoElem(Rutenio);
            break;
        case "Rodio":
            TomarNum(Rodio);
            LlamarInfoElem(Rodio);
            break;
        case "Paladio":
            TomarNum(Paladio);
            LlamarInfoElem(Paladio);
            break;
        case "Plata":
            TomarNum(Plata);
            LlamarInfoElem(Plata);
            break;
        case "Cadmio":
            TomarNum(Cadmio);
            LlamarInfoElem(Cadmio);
            break;
        case "Indio":
            TomarNum(Indio);
            LlamarInfoElem(Indio);
            break;
        case "Estano":
            TomarNum(Estano);
            LlamarInfoElem(Estano);
            break;
        case "Antimonio":
            TomarNum(Antimonio);
            LlamarInfoElem(Antimonio);
            break;
        case "Telurio":
            TomarNum(Telurio);
            LlamarInfoElem(Telurio);
            break;
        case "Yodo":
            TomarNum(Yodo);
            LlamarInfoElem(Yodo);
            break;
        case "Xenon":
            TomarNum(Xenon);
            LlamarInfoElem(Xenon);
            break;
        case "Cesio":
            TomarNum(Cesio);
            LlamarInfoElem(Cesio);
            break;
        case "Bario":
            TomarNum(Bario);
            LlamarInfoElem(Bario);
            break;
        case "Lantano":
            TomarNum(Lantano);
            LlamarInfoElem(Lantano);
            break;
        case "Cerio":
            TomarNum(Cerio);
            LlamarInfoElem(Cerio);
            break;
        case "Praseodimio":
            TomarNum(Praseodimio);
            LlamarInfoElem(Praseodimio);
            break;
        case "Neodimio":
            TomarNum(Neodimio);
            LlamarInfoElem(Neodimio);
            break;
        case "Prometio":
            TomarNum(Prometio);
            LlamarInfoElem(Prometio);
            break;
        case "Samario":
            TomarNum(Samario);
            LlamarInfoElem(Samario);
            break;
        case "Europio":
            TomarNum(Europio);
            LlamarInfoElem(Europio);
            break;
        case "Gadolinio":
            TomarNum(Gadolinio);
            LlamarInfoElem(Gadolinio);
            break;
        case "Terbio":
            TomarNum(Terbio);
            LlamarInfoElem(Terbio);
            break;
        case "Disprosio":
            TomarNum(Disprosio);
            LlamarInfoElem(Disprosio);
            break;
        case "Holmio":
            TomarNum(Holmio);
            LlamarInfoElem(Holmio);
            break;
        case "Erbio":
            TomarNum(Erbio);
            LlamarInfoElem(Erbio);
            break;
        case "Tulio":
            TomarNum(Tulio);
            LlamarInfoElem(Tulio);
            break;
        case "Iterbio":
            TomarNum(Iterbio);
            LlamarInfoElem(Iterbio);
            break;
        case "Lutecio":
            TomarNum(Lutecio);
            LlamarInfoElem(Lutecio);
            break;
        case "Hafnio":
            TomarNum(Hafnio);
            LlamarInfoElem(Hafnio);
            break;
        case "Tantalio":
            TomarNum(Tantalio);
            LlamarInfoElem(Tantalio);
            break;
        case "Wolframio":
            TomarNum(Wolframio);
            LlamarInfoElem(Wolframio);
            break;
        case "Renio":
            TomarNum(Renio);
            LlamarInfoElem(Renio);
            break;
        case "Osmio":
            TomarNum(Osmio);
            LlamarInfoElem(Osmio);
            break;
        case "Iridio":
            TomarNum(Iridio);
            LlamarInfoElem(Iridio);
            break;
        case "Platino":
            TomarNum(Platino);
            LlamarInfoElem(Platino);
            break;
        case "Oro":
            TomarNum(Oro);
            LlamarInfoElem(Oro);
            break;
        case "Mencurio":
            TomarNum(Mencurio);
            LlamarInfoElem(Mencurio);
            break;
        case "Talio":
            TomarNum(Talio);
            LlamarInfoElem(Talio);
            break;
        case "Plomo":
            TomarNum(Plomo);
            LlamarInfoElem(Plomo);
            break;
        case "Bismuto":
            TomarNum(Bismuto);
            LlamarInfoElem(Bismuto);
            break;
        case "Polonio":
            TomarNum(Polonio);
            LlamarInfoElem(Polonio);
            break;
        case "Astato":
            TomarNum(Astato);
            LlamarInfoElem(Astato);
            break;
        case "Radon":
            TomarNum(Radon);
            LlamarInfoElem(Radon);
            break;
        case "Francio":
            TomarNum(Francio);
            LlamarInfoElem(Francio);
            break;
        case "Radio":
            TomarNum(Radio);
            LlamarInfoElem(Radio);
            break;
    };
};
//FUNCIONES PARA AVISAR SI LA BUSQUEDA FUÉ EXITOSA
function LlamadoCorrecto(ElemBuscado){
    Aviso.style.display = "block";
    Aviso.style.opacity = "1";
    Aviso.style.backgroundColor = ColorAvisoCorrecto;
    Aviso.style.color = ColorLetraAvisoCorrecto;
    H3Aviso.textContent = "Se encontró el elemento " + ElemBuscado;
    TextoAviso.textContent = "Toda la información de este aparecerá abajo"
};
function LlamadoIncorrecto(ElemBuscado){
    Aviso.style.display = "block";
    Aviso.style.opacity = "1";
    Aviso.style.backgroundColor = ColorAvisoIncorrecto;
    Aviso.style.color = ColorLetraAvisoIncorrecto;
    H3Aviso.textContent = "No se pudo encontrar elemento: " + ElemBuscado;
    TextoAviso.textContent = "Revise que el elemento a buscar esté bien escrito y este escrita sin ninguna nomeclatura añadida";
};
//FUNCIONES PARA EVITAR REESCRIBIR LINEAS DE CODIGO
function VaciarInfo(){
    //DEVUELVE LAS ETIQUETAS A SU ESTADO ORIGINAL 
    FotoEle.src = "Imagenes/VacioDeBusqueda.png"
    NombreEle.textContent = "Nombre: ";
    SimboloEle.textContent = "Simbolo: ";
    NumAtomEle.textContent = "Número atomico: ";
    MasaAtomEle.textContent = "Masa atomica: ";
    NumElectrEle.textContent = "N° de electrones: ";
    NumProtEle.textContent = "N° de protones: ";
    NumNeutEle.textContent = "N° de neutrones: ";
    NumOxEle.textContent = "Números de oxidación: ";
    ElectronegatividadEle.textContent = "Electronegatividad: ";
    ConfElectrEle.textContent = "Configuración electronica: ";
    ElectrDeValEle.textContent = "Electrones de valencia: ";
};
function TomarNum(ElementoQuimico){
    NúmeroA = ElementoQuimico.MASimplificada;
    NúmeroB = ElementoQuimico.NumAtom;
    Protones = NúmeroA - NúmeroB;
};
function LlamarInfoElem(Elemento, Pro = Protones){
    FotoEle.src = Elemento.Foto
    NombreEle.textContent = NombreEle.textContent + " " + Elemento.Nombre;
    SimboloEle.textContent = SimboloEle.textContent + " " + Elemento.Simbolo;
    NumAtomEle.textContent = NumAtomEle.textContent + " " + Elemento.NumAtom;
    MasaAtomEle.textContent = MasaAtomEle.textContent + " " + Elemento.MasaAtom;
    NumElectrEle.textContent = NumElectrEle.textContent + " " + Elemento.NumAtom;
    NumProtEle.textContent = NumProtEle.textContent + " " + Elemento.NumAtom;
    NumNeutEle.textContent = NumNeutEle.textContent + " " + Pro;
    for (j in Elemento.NumOx){
        NumOxEle.textContent = NumOxEle.textContent + " " + Elemento.NumOx[j] +",";
    };
    ElectronegatividadEle.textContent = ElectronegatividadEle.textContent + " " + Elemento.Electronegatividad;
    ConfElectrEle.textContent = ConfElectrEle.textContent + " " + Elemento.ConfiguracionElectr;
    ElectrDeValEle.textContent = ElectrDeValEle.textContent + " " + Elemento.ElectronDeValencia;
};
