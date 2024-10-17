//INFORMACIÓN DE LOS ELEMENTOS
const Elementos = {
    Hidrogeno: Hidrogeno={
        Nombre: "Hidrogeno",
        NumOx: [["-1"], ["+1"]],
        Nomeclatura: ["Hidruro", "Hidrogeno", "hidruro", "hidrogeno"],
        Simbolo: "H",
        Tipo: "Ácido"
    },
    Litio: Litio={
        Nombre: "Litio",
        NumOx: [["+1"],[]],
        Nomeclatura: ["Litio", "litio", "lit"],
        Simbolo: "Li",
        Tipo: "Básico"
    },
    Berilio: Berilio={
        Nombre: "Berilio",
        NumOx: [["+2"],[]],
        Nomeclatura: ["Berilio", "berilio", "ber"],
        Simbolo: "Be",
        Tipo: "Básico"
    },
    Boro: Boro={
        Nombre: "Boro",
        NumOx: [["+3"],[]],
        Nomeclatura: ["Boro", "boro", "Bor"],
        Simbolo: "B",
        Tipo: "Ácido"
    },
    Carbono: Carbono={
        Nombre: "Carbono",
        NumOx: [["+4"],[]],
        Nomeclatura: ["Carbono", "carbono", "carbon"],
        Simbolo: "C",
        Tipo: "Ácido"
    },
    Nitrogeno: Nitrogeno={
        Nombre: "Nitrogeno",
        NumOx: [["+3", "+5"]],
        Nomeclatura: ["Nitrogeno", "nitrogeno", "Nitr"],
        Simbolo: "N",
        Tipo: "Ácido"
    },
    Oxigeno: Oxigeno={
        Nombre: "Oxigeno",
        NumOx: [["-2"],[]],
        Nomeclatura: ["Oxido", "oxido", "Ox"],
        Simbolo: "O",
        Tipo: "Básico"
    },
    Fluor: Fluor={
        Nombre: "Fluor",
        NumOx: [[],["-1"]],
        Nomeclatura: ["Fluor", "fluor", "fluor"],
        Simbolo: "F",
        Tipo: "Ácido"
    },
    Sodio: Sodio={
        Nombre: "Sodio",
        NumOx: [["+1"],[]],
        Nomeclatura: ["Sodio", "sodio", "sod"],
        Simbolo: "Na",
        Tipo: "Básico"
    },
    Magnesio: Magnesio={
        Nombre: "Magnesio",
        NumOx: [["+2"],[]],
        Nomeclatura: ["Magnesio", "magnesio", "magnes"],
        Simbolo: "Mg",
        Tipo: "Básico"
    },
    Aluminio: Aluminio={
        Nombre: "Aluminio",
        NumOx: ["+3"],
        Nomeclatura: ["Aluminio", "aluminio", "Alimin"],
        Simbolo: "Al",
        Tipo: "Básico"
    },
    Silicio: Silicio={
        Nombre: "Silicio",
        NumOx: ["+4"],
        Nomeclatura: ["Silicio", "silicio", "Sil"],
        Simbolo: "Si",
        Tipo: "Ácido"
    },
    Fosforo: Fosforo={
        Nombre: "Fosforo",
        NumOx: ["+3", "+5"],
        Nomeclatura: ["Fosforo", "fosforo", "Fosfor"],
        Simbolo: "P",
        Tipo: "Ácido"
    },
    Azufre: Azufre={
        Nombre: "Azufre",
        NumOx: ["-2", "+4", "+6"],
        Nomeclatura: ["Azufre", "azufre", "Azufr"],
        Simbolo: "S",
        Tipo: "Ácido"
    },
    Cloro: Cloro={
        Nombre: "Cloro",
        NumOx: ["+1", "+3", "+5", "+7"],
        Nomeclatura: ["Cloro", "cloro", "clor"],
        Simbolo: "Cl",
        Tipo: "Ácido"
    },
    Potasio: Potasio={
        Nombre: "Potasio",
        NumOx: ["+1"],
        Nomeclatura: ["Potasio", "potasio", "potas"],
        Simbolo: "K",
        Tipo: "Básico"
    },
    Calsio: Calsio={
        Nombre: "Calsio",
        NumOx: ["+2"],
        Nomeclatura: ["Calsio", "calsio", "cals"],
        Simbolo: "Ca",
        Tipo: "Básico"
    },
    Rubidio: Rubidio={
        Nombre: "Rubidio",
        NumOx: ["+1"],
        Nomeclatura: ["Rubidio", "rubidio", "rub"],
        Simbolo: "Rb",
        Tipo: "Básico"
    },
    Estroncio: Estroncio={
        Nombre: "Estroncio",
        NumOx: ["+2"],
        Nomeclatura: ["Estroncio", "escronio", "escron"],
        Simbolo: "Sr",
        Tipo: "Básico"
    },
    Itrio: Itrio={
        Nombre: "Itrio",
        NumOx: ["+3"],
        Nomeclatura: ["Ytrio", "ytrio", "Yt"],
        Simbolo: "Y",
        Tipo: "Básico"
    },
    Escandio: Escandio={
        Nombre: "Escandio",
        NumOx: ["+3"],
        Nomeclatura: ["Escandio", "escandio", "escand"],
        Simbolo: "Sc",
        Tipo: "Básico"
    },
    Titanio: Titanio={
        Nombre: "Titanio",
        NumOx: ["+3", "+4"],
        Nomeclatura: ["Titanio", "titanio", "titan"],
        Simbolo: "Ti",
        Tipo: "Básico"
    },
    Vanadio: Vanadio={
        Nombre: "Vanadio",
        NumOx: ["+2", "+3", "+4", "+5"],
        Nomeclatura: ["Vanadio", "vanadio", "vanad"],
        Simbolo: "V",
        Tipo: "Básico"
    },
    Cromo: Cromo={
        Nombre: "Cromo",
        NumOx: ["+2", "+3", "+6"],
        Nomeclatura: ["Cromo", "cromo", "Crom"],
        Simbolo: "Cr",
        Tipo: "Básico"
    },
    Manganeso: Manganeso={
        Nombre: "Manganeso",
        NumOx: ["+2", "+3", "+4", "+6", "+7"],
        Nomeclatura: ["Manganeso", "manganesio", "Manganes"],
        Simbolo: "Mn",
        Tipo: "Básico"
    },
    Hierro: Hierro={
        Nombre: "Hierro",
        NumOx: ["+2", "+3"],
        Nomeclatura: ["Hierro", "hierro", "ferr"],
        Simbolo: "Fe",
        Tipo: "Básico"
    },
    Cobalto: Cobalto={
        Nombre: "Cobalto",
        NumOx: ["+2", "+3"],
        Nomeclatura: ["Cobalto", "cobalto", "cobalt"],
        Simbolo: "Co",
        Tipo: "Básico"
    },
    Niquel: Niquel={
        Nombre: "Niquel",
        NumOx: ["+2", "+3"],
        Nomeclatura: ["Niquel", "niquel", "niquel"],
        Simbolo: "Ni",
        Tipo: "Básico"
    },
    Cobre: Cobre={
        Nombre: "Cobre",
        NumOx: ["+1", "+2"],
        Nomeclatura: ["Cobre", "cobre", "cupr"],
        Simbolo: "Cu",
        Tipo: "Básico"
    },
    Zinc: Zinc={
        Nombre: "Zinc",
        NumOx: ["+2"],
        Nomeclatura: ["Zinc", "zin"],
        Simbolo: "Zn",
        Tipo: "Básico"
    },
    Galio: Galio={
        Nombre: "Galio",
        NumOx: ["+3"],
        Nomeclatura: ["Galio", "galio", "gal"],
        Simbolo: "Ga",
        Tipo: "Básico"
    },
    Germanio: Germanio={
        Nombre: "Germanio",
        NumOx: ["+2", "+4"],
        Nomeclatura: ["Germanio", "germanio", "German"],
        Simbolo: "Ge",
        Tipo: "Ácido"
    },
    Arsenio: Arsenio={
        Nombre: "Arsenio",
        NumOx: ["+3", "+5"],
        Nomeclatura: ["Arsenico", "arsenico", "arsen"],
        Simbolo: "As",
        Tipo: "Ácido"
    },
    Selenio: Selenio={
        Nombre: "Selenio",
        NumOx: ["-2", "+4", "+6"],
        Nomeclatura: ["Selenio", "selenio", "selen"],
        Simbolo: "Se",
        Tipo: "Ácido"
    },
    Bromo: Bromo={
        Nombre: "Bromo",
        NumOx: ["+1", "+3", "+5", "+7"],
        Nomeclatura: ["Bromo", "bromo", "Brom"],
        Simbolo: "Br",
        Tipo: "Ácido"
    },
    Zirconio: Zirconio={
        Nombre: "Zirconio",
        NumOx: ["+4"],
        Nomeclatura: ["Zirconio", "zirconio", "zircon"],
        Simbolo: "Zr",
        Tipo: "Básico"
    },
    Niobio: Niobio={
        Nombre: "Niobio",
        NumOx: ["+3", "+5"],
        Nomeclatura: ["Niobio", "niobio", "niob"],
        Simbolo: "Nb",
        Tipo: "Básico"
    },
    Molibdeno: Molibdeno={
        Nombre: "Molibdeno",
        NumOx: ["+2", "+3", "+4", "+5", "+6"],
        Nomeclatura: ["Molibdeno", "molibdeno", "molyb"],
        Simbolo: "Mo",
        Tipo: "Básico"
    },
    Tantasio: Tantasio={
        Nombre: "Tantasio",
        NumOx: ["+3"],
        Nomeclatura: ["Tantasio", "tantalo", "tantal"],
        Simbolo: "Ta",
        Tipo: "Básico"
    },
    Wolframio: Wolframio={
        Nombre: "Wolframio",
        NumOx: ["+2", "+3", "+4", "+5", "+6"],
        Nomeclatura: ["Wolframio", "wolframio", "wolfram"],
        Simbolo: "W",
        Tipo: "Básico"
    },
    Rhenio: Rhenio={
        Nombre: "Rhenio",
        NumOx: ["+1", "+2", "+4", "+6", "+7"],
        Nomeclatura: ["Rhenio", "renio", "ren"],
        Simbolo: "Re",
        Tipo: "Básico"
    },
    Osmio: Osmio={
        Nombre: "Osmio",
        NumOx: ["+2", "+3", "+4", "+6", "+8"],
        Nomeclatura: ["Osmio", "osmio", "osm"],
        Simbolo: "Os",
        Tipo: "Básico"
    },
    Iridio: Iridio={
        Nombre: "Iridio",
        NumOx: ["+1", "+3", "+4"],
        Nomeclatura: ["Iridio", "iridio", "irid"],
        Simbolo: "Ir",
        Tipo: "Básico"
    },
    Platino: Platino={
        Nombre: "Platino",
        NumOx: ["+2", "+4"],
        Nomeclatura: ["Platino", "platino", "plat"],
        Simbolo: "Pt",
        Tipo: "Básico"
    },
    Oro: Oro={
        Nombre: "Oro",
        NumOx: ["+1", "+3"],
        Nomeclatura: ["Oro", "oro", "aur"],
        Simbolo: "Au",
        Tipo: "Básico"
    },
    Mercurio: Mercurio={
        Nombre: "Mercurio",
        NumOx: ["+1", "+2"],
        Nomeclatura: ["Mercurio", "mercurio", "mercur"],
        Simbolo: "Hg",
        Tipo: "Básico"
    },
    Talio: Talio={
        Nombre: "Talio",
        NumOx: ["+1", "+3"],
        Nomeclatura: ["Talio", "talio", "thallium"],
        Simbolo: "Tl",
        Tipo: "Básico"
    },
    Plomo: Plomo={
        Nombre: "Plomo",
        NumOx: ["+2", "+4"],
        Nomeclatura: ["Plomo", "plomo", "plumbum"],
        Simbolo: "Pb",
        Tipo: "Básico"
    },
    Bismuto: Bismuto={
        Nombre: "Bismuto",
        NumOx: ["+3", "+5"],
        Nomeclatura: ["Bismuto", "bismuto", "bismuth"],
        Simbolo: "Bi",
        Tipo: "Básico"
    },
    Polonio: Polonio={
        Nombre: "Polonio",
        NumOx: ["+2", "+4"],
        Nomeclatura: ["Polonio", "polonio", "polonium"],
        Simbolo: "Po",
        Tipo: "Básico"
    },
    Escandio: Escandio= {
        Nombre: "Escandio",
        NumOx: ["+3"],
        Nomeclatura: ["Escandio", "escandio", "scandium"],
        Simbolo: "Sc",
        Tipo: "Básico"
    },
    Titanio: Titanio= {
        Nombre: "Titanio",
        NumOx: ["+3", "+4"],
        Nomeclatura: ["Titanio", "titanio", "titanium"],
        Simbolo: "Ti",
        Tipo: "Básico"
    },
    Zirconio: Zirconio= {
        Nombre: "Zirconio",
        NumOx: ["+4"],
        Nomeclatura: ["Zirconio", "zirconio", "zirconium"],
        Simbolo: "Zr",
        Tipo: "Básico"
    },
    Hafnio: Hafnio= {
        Nombre: "Hafnio",
        NumOx: ["+4"],
        Nomeclatura: ["Hafnio", "hafnio", "hafnium"],
        Simbolo: "Hf",
        Tipo: "Básico"
    },
    Rutenio: Rutenio= {
        Nombre: "Rutenio",
        NumOx: ["+2", "+3", "+4"],
        Nomeclatura: ["Rutenio", "rutenio", "ruthenium"],
        Simbolo: "Ru",
        Tipo: "Básico"
    },
    Rodio: Rodio= {
        Nombre:  "Rodio",
        NumOx: ["+1", "+2", "+3"],
        Nomeclatura: ["Rodio", "rodio", "rhodium"],
        Simbolo: "Rh",
        Tipo: "Básico"
    },
    Paladio: Paladio= {
        Nombre: "Paladio",
        NumOx: ["+2", "+4"],
        Nomeclatura: ["Paladio", "paladio", "palladium"],
        Simbolo: "Pd",
        Tipo: "Básico"
    },
    Plata: Plata= {
        Nombre: "Plata",
        NumOx: ["+1"],
        Nomeclatura: ["Plata", "plata", "silver"],
        Simbolo: "Ag",
        Tipo: "Básico"
    },
    Cadmio: Cadmio= {
        Nombre: "Cadmio",
        NumOx: ["+2"],
        Nomeclatura: ["Cadmio", "cadmio", "cadmium"],
        Simbolo: "Cd",
        Tipo: "Básico"
    },
    Indio: Indio= {
        Nombre: "Indio",
        NumOx: ["+1", "+3"],
        Nomeclatura: ["Indio", "indio", "indium"],
        Simbolo: "In",
        Tipo: "Básico"
    },
    Estaño: Estaño= {
        Nombre: "Estaño",
        NumOx: ["+2", "+4"],
        Nomeclatura: ["Estaño", "estano", "tin"],
        Simbolo: "Sn",
        Tipo: "Básico"
    },
    Antimonio: Antimonio={
        Nombre: "Antimonio",
        NumOx: ["+3", "+5"],
        Nomeclatura: ["Antimonio", "antimonio", "antimony"],
        Simbolo: "Sb",
        Tipo: "Ácido"
    },
    Telurio: Telurio= {
        Nombre: "Telurio",
        NumOx: ["-2", "+4", "+6"],
        Nomeclatura: ["Telurio", "telurio", "tellurium"],
        Simbolo: "Te",
        Tipo: "Ácido"
    },
    Polonio: Polonio= {
        Nombre: "Polonio",
        NumOx: ["+2", "+4"],
        Nomeclatura: ["Polonio", "polonio", "polonium"],
        Simbolo: "Po",
        Tipo: "Básico"
    },
    Francio: Francio= {
        Nombre: "Francio",
        NumOx: ["+1"],
        Nomeclatura: ["Francio", "francio", "francium"],
        Simbolo: "Fr",
        Tipo: "Básico"
    }

};

//BOTONES DE CalcQuimEleguir
document.getElementById("Eleccion1").addEventListener("click", ActivarBtn1);
document.getElementById("Eleccion2").addEventListener("click", ActivarBtn2);
document.getElementById("Combinar").addEventListener("click", () => Combinar(ElementoA,ElementoB));

//BOTONES DE LOS ELEMENTOS
document.getElementById("H").addEventListener("click", () => ElegirElemento(Elementos.Hidrogeno));
document.getElementById("O").addEventListener("click", () => ElegirElemento(Elementos.Oxigeno));
document.getElementById("Li").addEventListener("click", () => ElegirElemento(Elementos.Litio));
document.getElementById("Be").addEventListener("click", () => ElegirElemento(Elementos.Berilio));
document.getElementById("B").addEventListener("click", () => ElegirElemento(Elementos.Boro));
document.getElementById("C").addEventListener("click", () => ElegirElemento(Elementos.Carbono));
document.getElementById("N").addEventListener("click", () => ElegirElemento(Elementos.Nitrogeno));
document.getElementById("F").addEventListener("click", () => ElegirElemento(Elementos.Fluor));
document.getElementById("Na").addEventListener("click", () => ElegirElemento(Elementos.Sodio));
document.getElementById("Mg").addEventListener("click", () => ElegirElemento(Elementos.Magnesio));
document.getElementById("Al").addEventListener("click", () => ElegirElemento(Elementos.Aluminio));
document.getElementById("Si").addEventListener("click", () => ElegirElemento(Elementos.Silicio));
document.getElementById("P").addEventListener("click", () => ElegirElemento(Elementos.Fosforo));
document.getElementById("S").addEventListener("click", () => ElegirElemento(Elementos.Azufre));
document.getElementById("Cl").addEventListener("click", () => ElegirElemento(Elementos.Cloro));
document.getElementById("K").addEventListener("click", () => ElegirElemento(Elementos.Potasio));
document.getElementById("Ca").addEventListener("click", () => ElegirElemento(Elementos.Calsio));
document.getElementById("Rb").addEventListener("click", () => ElegirElemento(Elementos.Rubidio));
document.getElementById("Sr").addEventListener("click", () => ElegirElemento(Elementos.Estroncio));
document.getElementById("Y").addEventListener("click", () => ElegirElemento(Elementos.Ytrio));
document.getElementById("Sc").addEventListener("click", () => ElegirElemento(Elementos.Escandio));
document.getElementById("Ti").addEventListener("click", () => ElegirElemento(Elementos.Titanio));
document.getElementById("V").addEventListener("click", () => ElegirElemento(Elementos.Vanadio));
document.getElementById("Cr").addEventListener("click", () => ElegirElemento(Elementos.Cromo));
document.getElementById("Mn").addEventListener("click", () => ElegirElemento(Elementos.Manganeso));
document.getElementById("Fe").addEventListener("click", () => ElegirElemento(Elementos.Hierro));
document.getElementById("Co").addEventListener("click", () => ElegirElemento(Elementos.Cobalto));
document.getElementById("Ni").addEventListener("click", () => ElegirElemento(Elementos.Niquel));
document.getElementById("Cu").addEventListener("click", () => ElegirElemento(Elementos.Cobre));
document.getElementById("Zn").addEventListener("click", () => ElegirElemento(Elementos.Zinc));
document.getElementById("Ga").addEventListener("click", () => ElegirElemento(Elementos.Galio));
document.getElementById("Ge").addEventListener("click", () => ElegirElemento(Elementos.Germanio));
document.getElementById("As").addEventListener("click", () => ElegirElemento(Elementos.Arsenio));
document.getElementById("Se").addEventListener("click", () => ElegirElemento(Elementos.Selenio));
document.getElementById("Br").addEventListener("click", () => ElegirElemento(Elementos.Bromo));
document.getElementById("Zr").addEventListener("click", () => ElegirElemento(Elementos.Zirconio));
document.getElementById("Nb").addEventListener("click", () => ElegirElemento(Elementos.Niobio));
document.getElementById("Mo").addEventListener("click", () => ElegirElemento(Elementos.Molibdeno));
document.getElementById("Ta").addEventListener("click", () => ElegirElemento(Elementos.Tantasio));
document.getElementById("W").addEventListener("click", () => ElegirElemento(Elementos.Wolframio));
document.getElementById("Re").addEventListener("click", () => ElegirElemento(Elementos.Rhenio));
document.getElementById("Os").addEventListener("click", () => ElegirElemento(Elementos.Osmio));
document.getElementById("Ir").addEventListener("click", () => ElegirElemento(Elementos.Iridio));
document.getElementById("Pt").addEventListener("click", () => ElegirElemento(Elementos.Platino));
document.getElementById("Au").addEventListener("click", () => ElegirElemento(Elementos.Oro));
document.getElementById("Hg").addEventListener("click", () => ElegirElemento(Elementos.Mercurio));
document.getElementById("Tl").addEventListener("click", () => ElegirElemento(Elementos.Talio));
document.getElementById("Pb").addEventListener("click", () => ElegirElemento(Elementos.Plomo));
document.getElementById("Bi").addEventListener("click", () => ElegirElemento(Elementos.Bismuto));
document.getElementById("Po").addEventListener("click", () => ElegirElemento(Elementos.Polonio));
document.getElementById("Fr").addEventListener("click", () => ElegirElemento(Elementos.Francio));

//BOTONES DE LOS NUMEROS DE OXIDACION
document.getElementById("OxM1").addEventListener("click", CapturarM1);
document.getElementById("OxM2").addEventListener("click", CapturarM2);
document.getElementById("OxM3").addEventListener("click", CapturarM3);
document.getElementById("OxM4").addEventListener("click", CapturarM4);
document.getElementById("OxM5").addEventListener("click", CapturarM5);
document.getElementById("OxM6").addEventListener("click", CapturarM6);

document.getElementById("OxNM1").addEventListener("click", CapturarNM1);
document.getElementById("OxNM2").addEventListener("click", CapturarNM2);
document.getElementById("OxNM3").addEventListener("click", CapturarNM3);

//OBJETOS DEL DIV RESULTADOS
var Ele1 = document.querySelector(".BtnEle1");
var Ele2 = document.querySelector(".BtnEle2");
var Res1 = document.querySelector(".Res1");
var Res2 = document.querySelector(".Res2");
var Prod = document.querySelector(".Producto");
var Tradicional = document.querySelector(".NomTradicional");
var Sistematica = document.querySelector(".NomSistematica");
var NumStock = document.querySelector(".NomStock");

//BOTONES DEL DIV NUMEROS DE OXIDACIÓN
var BarraDeNumOx = document.querySelector(".BarraDeNumOx");
var NumerosOxidacionMetalicos = document.querySelector(".NumerosOxidacionMetalicos"); //----BOTÓNES DE NUMEROS DE OXIDACIÓN METALICOS POSIBLES-------
var OxM1 = document.querySelector(".OxM1");
var OxM2 = document.querySelector(".OxM2");
var OxM3 = document.querySelector(".OxM3");
var OxM4 = document.querySelector(".OxM4");
var OxM5 = document.querySelector(".OxM5");
var OxM6 = document.querySelector(".OxM6");
var NumerosOxidacionNoMetalicos = document.querySelector(".NumerosOxidacionNoMetalicos"); //----BOTÓNES DE NUMEROS DE OXIDACIÓN NO METALICOS POSIBLES-------
var OxNM1 = document.querySelector(".OxNM1");
var OxNM2 = document.querySelector(".OxNM2");
var OxNM3 = document.querySelector(".OxNM3");
var TexTipoM = document.querySelector(".TexTipoM");
var TexTipoNM = document.querySelector(".TexTipoNM");

// VARIABLES Y FUNCIONES EN CASO DE PRECIONE ALGUN BOTÓN PARA SELECCIONAR UN ELEMENTO
var LugarDeEleccion = "Ninguno";
var Auxiliar = "Nada";
function ActivarBtn1(){
    if (LugarDeEleccion == "Ninguno"){
        LugarDeEleccion = "Btn1";
        Auxiliar = "Btn1";
        Invertir(Ele1);
        ReInvertir(Ele2);
        ReInvertirTodosLosNumerosOx();
    }else{
        LugarDeEleccion = "Ninguno";
        ReInvertir(Ele1);
    };
};
function ActivarBtn2(){
    if (LugarDeEleccion == "Ninguno"){
        LugarDeEleccion = "Btn2";
        Auxiliar = "Btn2";
        Invertir(Ele2);
        ReInvertir(Ele1);
        ReInvertirTodosLosNumerosOx();
    }else{
        LugarDeEleccion = "Ninguno";
        ReInvertir(Ele2);
    };
};
// FUNCIONES EN CASO DE QUE TRAS PREIONAR EL Btn1 O 2 SE SELECCIONE UN ELEMENTO
var ElementoA = " ";
var ElementoB = " ";
function ElegirElemento(Seleccion){
    ReiniciarLosNumOxMostrados();
    if (LugarDeEleccion != "Ninguno" && LugarDeEleccion == "Btn1"){
        Mostrar(Seleccion.Simbolo, Ele1, Res1);
        MostrarBarraDeOx(Seleccion);
        ElementoA = Seleccion;
    }
    else if (LugarDeEleccion != "Ninguno" && LugarDeEleccion == "Btn2"){
        Mostrar(Seleccion.Simbolo, Ele2, Res2);
        MostrarBarraDeOx(Seleccion);
        ElementoB = Seleccion;
    };
};
//--------PARA SABER QUE BOTON SE ESTÁ SELECCIONANDO Y TOMAR EL NÚMERO DE OXIDACCIÓN QUE CONTENGA
var NumOx1 = "Nada";
var NumOx2 = "Nada";
function DarNumOxAlElememento(BtnOxElegido){
    switch (Auxiliar){
        case "Btn1":
            NumOx1 = BtnOxElegido.textContent;
            break;
        case "Btn2":
            NumOx2 = BtnOxElegido.textContent;
            break;
    };
};

//VARIABES Y FUNCIONES PARA EN CASO DE PRESIONAR UN BOTÓN PARA LOS NÚMEROS DE OXIDACIÓN
//-------ELEGIR NUMERO DE OXIDACION METALICO--------
var NumeroOxSelec = "Ninguno";
var NumeroDeOxidacionElegido = " ";
function CapturarM1(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxM1";
        DarNumOxAlElememento(OxM1);
        Invertir(OxM1);
    }else if (NumeroOxSelec == "OxM1"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxM1);
    };
};
function CapturarM2(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxM2";
        DarNumOxAlElememento(OxM2);
        Invertir(OxM2);
    }else if (NumeroOxSelec == "OxM2"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxM2);
    };
};
function CapturarM3(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxM3";
        DarNumOxAlElememento(OxM3);
        Invertir(OxM3);
    }else if (NumeroOxSelec == "OxM3"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxM3);
    };
};
function CapturarM4(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxM4";
        DarNumOxAlElememento(OxM4);
        Invertir(OxM4);
    }else if (NumeroOxSelec == "OxM4"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxM4);
    };
};
function CapturarM5(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxM5";
        DarNumOxAlElememento(OxM5);
        Invertir(OxM5);
    }else if (NumeroOxSelec == "OxM5"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxM5);
    };
};
function CapturarM6(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxM6";
        DarNumOxAlElememento(OxM6);
        Invertir(OxM6);
    }else if (NumeroOxSelec == "OxM6"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxM6);
    };
};
//--------ELEGIR NUMERO OXIDACION NO METALICO------
function CapturarNM1(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxNM1";
        DarNumOxAlElememento(OxNM1);
        Invertir(OxNM1);
    }else if (NumeroOxSelec == "OxNM1"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxNM1);
    };
};
function CapturarNM2(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxNM2";
        DarNumOxAlElememento(OxNM2);
        Invertir(OxNM2);
    }else if (NumeroOxSelec == "OxNM2"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxNM2);
    };
};
function CapturarNM3(){
    if (NumeroOxSelec == "Ninguno"){
        NumeroOxSelec = "OxNM3";
        DarNumOxAlElememento(OxNM3);
        Invertir(OxNM3);
    }else if (NumeroOxSelec == "OxNM3"){
        NumeroOxSelec = "Ninguno";
        NumeroDeOxidacionElegido = "Nada";
        ReInvertir(OxNM3);
    };
};

//VARIABLES Y FUNCIONES EN CASO DE PRESIONAR EL BOTÓN DE COMBINAR ELEMENTOS
var Balanceo = " ";
function Combinar(a, b){
    if (NumOx1 == "Nada" || NumOx2 == "Nada"){
        alert("Seleccione el numero de oxidación antes de conbinar lo elementos");
        Prod.textContent = " ";
        Tradicional.textContent = " ";
        Sistematica.textContent = " ";
        NumStock.textContent = " ";
    }
    else if (a == b){
        alert("No elija dos elementos iguales");
        Prod.textContent = " ";
        Tradicional.textContent = " ";
        Sistematica.textContent = " ";
        NumStock.textContent = " ";
    }
    else if (a != Oxigeno && b != Oxigeno && a != Hidrogeno && b != Hidrogeno){
        alert("Para convinar elemetos se requiere oxigeno o hidrogeno");
        Prod.textContent = " ";
        Tradicional.textContent = " ";
        Sistematica.textContent = " ";
        NumStock.textContent = " ";
    }
    else if (NumOx1.charAt(0) == NumOx2.charAt(0)){
        alert("Si selecciona un numero de oxidación negativo el otro debe ser positivo");
        Prod.textContent = " ";
        Tradicional.textContent = " ";
        Sistematica.textContent = " ";
        NumStock.textContent = " ";
    }
    else{
        NumOxA = NumOx1.charAt(1);
        NumOxB = NumOx2.charAt(1);
        NumOxABalanceado = 0;
        NumOxBBalanceado = 0;
        LugarA = "#";
        LugarB = "#";
        if (a.Simbolo == "O"){
            Prod.textContent = Balacear(b,NumOxB,a,NumOxA);
            Tradicional.textContent = a.Nomeclatura[0] + " " + BucleSobreLista(b, parseInt(NumOxB));
            NumStock.textContent = a.Nomeclatura[0] + " de " + b.Nomeclatura[1] + ConvertirNumerosRomanos(NumOx2);
            Sistematica.textContent = Prefijo(a,NumOxABalanceado) + " de "+Prefijo(b, NumOxBBalanceado);
        }
        else if (b.Simbolo == "O"){
            Prod.textContent = Balacear(a,NumOxA,b,NumOxB);
            Tradicional.textContent = b.Nomeclatura[0] + " " + BucleSobreLista(a, parseInt(NumOxA));
            NumStock.textContent = b.Nomeclatura[0] + "de" + a.Nomeclatura[1] + ConvertirNumerosRomanos(NumOx1);
            Sistematica.textContent = Prefijo(b,NumOxBBalanceado) + " de "+ Prefijo(a, NumOxABalanceado);
        }
        else if (a.Simbolo == "H" && NumOx1.charAt(0) == "-"){
            Prod.textContent = Balacear(b,NumOxB,a,NumOxA);
            Tradicional.textContent = Hidrogeno.Nomeclatura[0] + " " + BucleSobreLista(b, parseInt(NumOxB));
            NumStock.textContent = Hidrogeno.Nomeclatura[0] + " de " + a.Nomeclatura[1] + ConvertirNumerosRomanos(NumOx2);
            Sistematica.textContent = Prefijo(a,NumOxABalanceado) + " de "+ Prefijo(b, NumOxBBalanceado);
        }
        else if (b.Simbolo == "H" && NumOx2.charAt(0) == "-"){
            Prod.textContent = Balacear(a,NumOxA,b,NumOxB);
            Tradicional.textContent = Hidrogeno.Nomeclatura[0] + " " + BucleSobreLista(a, parseInt(NumOxA));
            NumStock.textContent = Hidrogeno.Nomeclatura[0] + " de " + a.Nomeclatura[1] + ConvertirNumerosRomanos(NumOx1);
            Sistematica.textContent = Prefijo(b,NumOxBBalanceado) + " de "+ Prefijo(a, NumOxABalanceado);
        }
        else if (a.Simbolo = "H" && NumOx1.charAt(0) == "+"){
            EleConUroB = b.Nomeclatura[2].charAt(0).toUpperCase() + b.Nomeclatura[2].slice(1);
            EleConUroA = Hidrogeno.Nomeclatura[2].charAt(0).toUpperCase() + Hidrogeno.Nomeclatura[2].slice(1);

            Prod.textContent = Balacear(Hidrogeno,NumOxA,b,NumOxB);
            Tradicional.textContent = EleConUroA + "uro" + " de " + Hidrogeno.Nomeclatura[3];
            Sistematica.textContent = EleConUroB + "uro" + " de " + Hidrogeno.Nomeclatura[3];
        }
        else if (b.Simbolo = "H" && NumOx2.charAt(0) == "+"){
            EleConUroA = Hidrogeno.Nomeclatura[2].charAt(0).toUpperCase() + Hidrogeno.Nomeclatura[2].slice(1);
            EleConUroB = a.Nomeclatura[2].charAt(0).toUpperCase() + a.Nomeclatura[2].slice(1);

            Prod.textContent = Balacear(Hidrogenod,NumOxB,a,NumOxA);
            Tradicional.textContent = EleConUroB + "uro" + " de " + Hidrogeno.Nomeclatura[3];
            Sistematica.textContent = EleConUroA + "uro" + " de " + Hidrogeno.Nomeclatura[3];
        };
    };
};

//FUNCIONES PARA EVITAR REPETERIR LARGAS LINEAS DE CODIGO
//------BUCLES------
function BucleSobreLista(Seleccion, NumeroOxEleguido){
    var TamañoLista = 0;
    for (PosLista in Seleccion.NumOx){
        TamañoLista = Seleccion.NumOx[PosLista].length;
        for (PosNumOx in Seleccion.NumOx[PosLista]){
            if (NumeroOxEleguido == Seleccion.NumOx[PosLista][PosNumOx]){
                AuxiliarOx = PosNumOx;
                switch(TamañoLista){
                    case 1:
                        if(PosNumOx="0"){
                            return Seleccion.Nomeclatura[2] + "ico";
                        };
                    case 2:
                        switch (PosNumOx){
                            case "0":
                                return Seleccion.Nomeclatura[2] +"oso";
                            case "1":
                                return Seleccion.Nomeclatura[2] + "ico";
                        };
                    case 3:
                        switch (PosNumOx){
                            case "0":
                                return "hipo" + Seleccion.Nomeclatura[2] + "oso";
                            case "1":
                                return Seleccion.Nomeclatura[2] + "oso";
                            case "2":
                                return Seleccion.Nomeclatura[2] + "ico";
                        };
                    case 4:
                        switch (PosNumOx){
                            case "0":
                                return "hipo" + Seleccion.Nomeclatura[2] + "oso";
                            case "1":
                                return Seleccion.Nomeclatura[2] + "oso";
                            case "2":
                                return Seleccion.Nomeclatura[2] + "ico";
                            case "3":
                                return "per" + Seleccion.Nomeclatura[2] + "ico"
                        };
                };
            };
        };
    };
};
function ConvertirNumerosRomanos(NumeroOxEleguido){
    switch (parseInt(NumeroOxEleguido.charAt(1))){
        case 1:
            return "(I)"
        case 2:
            return "(II)"
        case 3:
            return "(III)"
        case 4:
            return "(IV)"
        case 5:
            return "(V)"
        case 6:
            return "(VI)"
        case 7:
            return "(VII)"
    };
};
function Prefijo(Seleccion, NumeroDeOxidacionElegido){
    switch (parseInt(NumeroDeOxidacionElegido)){
        case 1:
            return "Mono" + Seleccion.Nomeclatura[1];
        case 2:
            return "Di" + Seleccion.Nomeclatura[1];
        case 3:
            return "Tri" + Seleccion.Nomeclatura[1];
        case 4:
            return "Tetra" + Seleccion.Nomeclatura[1];
        case 5:
            return "Penta" + Seleccion.Nomeclatura[1];
        case 6:
            return "Hexa" + Seleccion.Nomeclatura[1];
        case 7:
            return "Hepta" + Seleccion.Nomeclatura[1];
    };
};
function Balacear(a,NumOxA,b,NumOxB){
    NumOxA = parseInt(NumOxA);
    NumOxB = parseInt(NumOxB);
    if (NumOxA > NumOxB  || NumOxA == NumOxB && NumOxA % NumOxB == 0 && NumOxB % NumOxB == 0){
        NumOxABalanceado = (NumOxA/NumOxB);
        NumOxBBalanceado = (NumOxB/NumOxB);
        return a.Simbolo + (NumOxB/NumOxB) + b.Simbolo + (NumOxA/NumOxB);
    }
    else if (NumOxB > NumOxA || NumOxA == NumOxB && NumOxB % NumOxA == 0 && NumOxA % NumOxA == 0){
        NumOxABalanceado = (NumOxB/NumOxA);
        NumOxBBalanceado = (NumOxA/NumOxA);
        return a.Simbolo + (NumOxA/NumOxA) + b.Simbolo + (NumOxB/NumOxA);
    }
    else{
        return a.Simbolo + NumOxB + b.Simbolo + NumOxA;
    };
};
//------CAMBIAR EL COLOR DE LOS BOTONES AL SER SELECCIONADOS------
var ColorBoton = "rgb(53, 60, 68)";
var ColorLetraBoton = "rgb(188, 210, 252)";
function Invertir(Btn){
    Btn.style.backgroundColor = ColorLetraBoton;
    Btn.style.color = ColorBoton;
};
function ReInvertir(Btn){
    Btn.style.backgroundColor = ColorBoton;
    Btn.style.color = ColorLetraBoton;
};
function ReInvertirTodosLosNumerosOx(){
    OxM1.style.backgroundColor = ColorBoton;
    OxM1.style.color = ColorLetraBoton;
    OxM2.style.backgroundColor = ColorBoton;
    OxM2.style.color = ColorLetraBoton;
    OxM3.style.backgroundColor = ColorBoton;
    OxM3.style.color = ColorLetraBoton;
    OxM4.style.backgroundColor = ColorBoton;
    OxM4.style.color = ColorLetraBoton;
    OxM5.style.backgroundColor = ColorBoton;
    OxM5.style.color = ColorLetraBoton;
    OxM6.style.backgroundColor = ColorBoton;
    OxM6.style.color = ColorLetraBoton;
    OxNM1.style.backgroundColor = ColorBoton;
    OxNM1.style.color = ColorLetraBoton;
    OxNM2.style.backgroundColor = ColorBoton;
    OxNM2.style.color = ColorLetraBoton;
    OxNM3.style.backgroundColor = ColorBoton;
    OxNM3.style.color = ColorLetraBoton;
};
//------MOSTRAR ELEMENTOS QUE SON NECESARIOS EN ESE MOMENTO---------
function MostrarBtnM(o,i,Seleccion){
    if (Seleccion.Tipo == "Básico" && o == "0"|| Seleccion.Tipo == "Amfotero" && o == "0"){
        switch (i){
            case "0":
                OxM1.style.display = "flex";
                OxM1.style.opacity = 1;
                OxM1.textContent = Seleccion.NumOx[0][i];
                break;
            case "1":
                OxM2.style.display = "flex";
                OxM2.style.opacity = 1;
                OxM2.textContent = Seleccion.NumOx[0][i];
                break;
            case "2":
                OxM3.textContent = Seleccion.NumOx[0][i];
                OxM3.style.display = "flex";
                OxM3.style.opacity = 1;
                break;
            case "3":
                OxM4.textContent = Seleccion.NumOx[0][i];
                OxM4.style.display = "flex";
                OxM4.style.opacity = 1;
                break;
            case "4":
                OxM5.textContent = Seleccion.NumOx[0][i];
                OxM5.style.display = "flex";
                OxM5.style.opacity = 1;
                break;
            case "5":
                OxM6.textContent = Seleccion.NumOx[0][i];
                OxM6.style.display = "flex";
                OxM6.style.opacity = 1;
                break;
        };
    };
};
function MostrarBtnNM(o,i,Seleccion){
    if (Seleccion.Tipo == "Ácido"  && o == "1"|| Seleccion.Tipo == "Amfotero" && o == "1"){
        switch (i){
            case "0":
                OxNM1.style.display = "flex";
                OxNM1.style.opacity = 1;
                OxNM1.textContent = Seleccion.NumOx[1][i];
                break;
            case "1":
                OxNM2.style.display = "flex";
                OxNM2.style.opacity = 1;
                OxNM2.textContent = Seleccion.NumOx[1][i];
                break;
            case "2":
                OxNM3.textContent = Seleccion.NumOx[1][i];
                OxNM3.style.display = "flex";
                OxNM3.style.opacity = 1;
                break;
        };
    };
};
function MostrarBarraM(){
    TexTipoM.style.display = "flex";
    TexTipoM.style.opacity = 1;
    NumerosOxidacionMetalicos.style.display = "flex";
    NumerosOxidacionMetalicos.style.opacity = 1;
};
function MostrarBarraNM(){
    TexTipoNM.style.display = "flex";
    TexTipoNM.style.opacity = 1;
    NumerosOxidacionNoMetalicos.style.display = "flex";
    NumerosOxidacionNoMetalicos.style.opacity = 1;
};
function Mostrar(Elem, Btn, Lugar){
    Btn.textContent = Elem;
    Lugar.textContent = Elem;
};
function MostrarBarraDeOx(Seleccion){
    BarraDeNumOx.style.display = "flex";
    BarraDeNumOx.style.opacity = 1;
    switch (Seleccion.Tipo){
        case "Básico":
            MostrarBarraM();
            OcultarBarraNM();
            break;
        case "Ácido":
            OcultarBarraM();
            MostrarBarraNM();
            break;
        case "Amfotero":
            MostrarBarraM();
            MostrarBarraNM();
            break;
    };
    if (Seleccion.Simbolo == "O"){
        OcultarBarraNM();
        MostrarBarraM()
        OxM1.textContent = "-2"
        OxM1.style.display = "flex";
        OxM1.style.opacity = 1;
        TexTipoNM.style.display = "none";
        TexTipoNM.style.opacity = 0;
    }
    else if (Seleccion.Simbolo == "H"){
        MostrarBarraM();
        MostrarBarraNM()
        OxM1.textContent = "-1"
        OxM1.style.display = "flex";
        OxM1.style.opacity = 1;
        OxNM1.textContent = "+1"
        OxNM1.style.display = "flex";
        OxNM1.style.opacity = 1;
    }
    else{
        for (o in Seleccion.NumOx){
            for (i in Seleccion.NumOx[o]){
                MostrarBtnM(o,i,Seleccion);
                MostrarBtnNM(o,i,Seleccion);
            };
        };
    };
};

//----------OCULTAR ELEMENTOS QUE NO SON NECESARIOS EN ESE MOMENTO-------
function OcultarBarraM(){
    TexTipoM.style.display = "none";
    TexTipoM.style.opacity = 0;
    NumerosOxidacionMetalicos.style.display = "none";
    NumerosOxidacionMetalicos.style.opacity = 0;
}
function OcultarBarraNM(){
    TexTipoNM.style.display = "none";
    TexTipoNM.style.opacity = 0;
    NumerosOxidacionNoMetalicos.style.display = "none";
    NumerosOxidacionNoMetalicos.style.opacity = 0;
};
function ReiniciarLosNumOxMostrados(){
    //PARA EVITAR QUE SE MUESTREN MAS NUMEROS DE OXIDACIÓN DE LOS QUE POSEE EL ELEMENTO SELECCIONADO
    OxM1.style.display = "none";
    OxM1.style.opacity = 0;
    OxM2.style.display = "none";
    OxM2.style.opacity = 0;
    OxM3.style.display = "none";
    OxM3.style.opacity = 0;
    OxM4.style.display = "none";
    OxM4.style.opacity = 0;
    OxM5.style.display = "none";
    OxM5.style.opacity = 0;
    OxM6.style.display = "none";
    OxM6.style.opacity = 0;
    OxNM1.style.display = "none";
    OxNM1.style.opacity = 0;
    OxNM2.style.display = "none";
    OxNM2.style.opacity = 0;
    OxNM3.style.display = "none";
    OxNM3.style.opacity = 0;
};
