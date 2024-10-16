//INFORMACIÓN DE LOS ELEMENTOS
const Elementos = {
    Hidrogeno: Hidrogeno = {
        Nombre: "Hidrogeno",
        MasaAtom: "1.008",
        MASimplificada : 1,
        NumAtom: 1,
        NumOx: ["-1","+1"],
        Simbolo: "H",
        Electronegatividad: "2.1",
        ConfiguracionElectr: "1s°1",
        ElectronDeValencia: "1s°1",
        Foto : "Imagenes/Hidrogeno.png",
    },
    Helio: Helio={
        Nombre: "Helio",
        MasaAtom: "4.0026",
        MASimplificada : 4,
        NumAtom: 2,
        NumOx: ["0"],
        Simbolo: "He",
        Electronegatividad: "No posee",
        ConfiguracionElectr: "1s°2",
        ElectronDeValencia: "1s°2",
        Foto : "Imagenes/Helio.png",
    },
    Litio: Litio = {
        Nombre: "Litio",
        MasaAtom: "6.94",
        MASimplificada : 7,
        NumAtom: 3,
        NumOx: ["+1"],
        Simbolo: "Li",
        Electronegatividad: "1",
        ConfiguracionElectr: "1s°2 2s°1",
        ElectronDeValencia: "2s°1",
        Foto : "Imagenes/Litio.png",
    },
    Berilio: Berilio = {
        Nombre: "Berilio",
        MasaAtom: "9.0122",
        MASimplificada : 9,
        NumAtom: 4,
        NumOx: ["+2"],
        Simbolo: "Be",
        Electronegatividad: "2",
        ConfiguracionElectr: "1s°2 2s°2",
        ElectronDeValencia: "2s°2",
        Foto : "Imagenes/Berilio.png",
    },
    Boro: Boro = {
        Nombre: "Boro",
        MasaAtom: "10.811",
        MASimplificada : 11,
        NumAtom: 5,
        NumOx: ["+3"],
        Simbolo: "Be",
        Electronegatividad: "2",
        ConfiguracionElectr: "1s°2 2s°2 2p°1",
        ElectronDeValencia: "2s°2 2p°1",
        Foto : "Imagenes/Boro.png",
    },
    Carbono: Carbono = {
        Nombre: "Carbono",
        MasaAtom: "12.01115",
        MASimplificada : 12,
        NumAtom: 6,
        NumOx: ["+2", "-4", "+4"],
        Simbolo: "C",
        Electronegatividad: "2.1",
        ConfiguracionElectr: "1s°2 2s°2 2p°2",
        ElectronDeValencia: "2s°2 2p°2",
        Foto : "Imagenes/Carbono.png",
    },
    Nitrogeno: Nitrogeno = {
        Nombre: "Nitrogeno",
        MasaAtom: "14.0067",
        MASimplificada : 14,
        NumAtom: 7,
        NumOx: ["-3", "+3", "+5", "+4", "+2"],
        Simbolo: "N",
        Electronegatividad: "3",
        ConfiguracionElectr: "1s°2 2s°2 2p°3",
        ElectronDeValencia: "2s°2 2p°3",
        Foto : "Imagenes/Nitrogeno.png",
    },
    Oxigeno: Oxigeno = {
        Nombre: "Oxigeno",
        MasaAtom: "15.99",
        MASimplificada : 16,
        NumAtom: 8,
        NumOx: ["-2"],
        Simbolo: "O",
        Electronegatividad: "3.5",
        ConfiguracionElectr: "1s°2 2s°2 2p°4",
        ElectronDeValencia: "2s°2 2p°4",
        Foto : "Imagenes/Oxigeno.png",
    },
    Fluor: Fluor = {
        Nombre: "Fluor",
        MasaAtom: "18.9984",
        MASimplificada : 19,
        NumAtom: 9,
        NumOx: ["-1"],
        Simbolo: "F",
        Electronegatividad: "4",
        ConfiguracionElectr: "1s°2 2s°2 2p°5",
        ElectronDeValencia: "2s°2 2p°5",
        Foto : "Imagenes/Fluor.png",
    },
    Neon: Neon = {
        Nombre: "Neon",
        MasaAtom: "20.183",
        MASimplificada : 20,
        NumAtom: 10,
        NumOx: ["0"],
        Simbolo: "Ne",
        Electronegatividad: "No tiene",
        ConfiguracionElectr: "1s°2 2s°2 2p°6",
        ElectronDeValencia: "2s°2 2p°6",
        Foto : "Imagenes/Neon.png",
    },
    Sodio: Sodio = {
        Nombre: "Sodio",
        MasaAtom: "22.9898",
        MASimplificada : 23,
        NumAtom: 11,
        NumOx: ["+1"],
        Simbolo: "Na",
        Electronegatividad: "0.9",
        ConfiguracionElectr: "1s°2 2s°2 2p°6 3s°1",
        ElectronDeValencia: "3s°1",
        Foto : "Imagenes/Sodio.png",
    },
    Magnesio: Magnesio = {
        Nombre: "Magnesio",
        MasaAtom: "24.312",
        MASimplificada : 24,
        NumAtom: 12,
        NumOx: ["+2"],
        Simbolo: "Mg",
        Electronegatividad: "1.2",
        ConfiguracionElectr: "1s°2 2s°2 2p°6 3s°2",
        ElectronDeValencia: "3s°2",
        Foto : "Imagenes/Magnesio.png",
    },
    Aluminio: Aluminio = {
        Nombre: "Aluminio",
        MasaAtom: "26.9815",
        MASimplificada : 27,
        NumAtom: 13,
        NumOx: ["+3"],
        Simbolo: "Al",
        Electronegatividad: "15",
        ConfiguracionElectr: "1s°2 2s°2 2p°6 3s°2 3p°1",
        ElectronDeValencia: "3s°2 3p°1",
        Foto : "Imagenes/Aluminio.png",
    },
    Silicio: Silicio = {
        Nombre: "Silicio",
        MasaAtom: "28.086",
        MASimplificada : 28,
        NumAtom: 14,
        NumOx: ["+4"],
        Simbolo: "Si",
        Electronegatividad: "1.8",
        ConfiguracionElectr: "1s°2 2s°2 2p°6 3s°2 3p°2",
        ElectronDeValencia: "3s°2 3p°2",
        Foto : "Imagenes/Aluminio.png",
    },
    Cobre: Cobre = {
        Nombre : "Cobre",
        MasaAtom: "63.37",
        MASimplificada : 63,
        NumAtom: 29,
        NumOx: ["+1","+2"],
        Simbolo: "Cu",
        Electronegatividad: "7.73",
        ConfiguracionElectr: "1s°2 2s°2 2p°6 3s°2 3p°6 4s°2 3d°10",
        ElectronDeValencia: "3d 4s",
        Foto : "Imagenes/Cobre.png",
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
        case "Sodio":
            TomarNum(Sodio);
            LlamarInfoElem(Sodio);
            break;
        case "Magnesio":
            TomarNum(Magnesio);
            LlamarInfoElem(Magnesio);
            break;
        case "Cobre":
            TomarNum(Cobre);
            LlamarInfoElem(Cobre);
            break;
    }
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
