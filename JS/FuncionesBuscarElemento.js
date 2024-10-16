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
    switch (Eleccion){
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
