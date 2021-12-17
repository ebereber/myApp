
const product =[
    { id: 1, title:"Circe", description:"colgantes", detail: "Modelo Circe de metal negro mate", price:"$ 12.800", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/7-1.jpg" },
    { id: 2, title:"Zarek Negro", description:"colgantes", detail: "Modelo Zarek de aluminio y madera", price:"$ 16.300", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/Zarek-Negro-600x600.jpg" },
    { id: 3, title:"Kassia", description:"colgantes", detail: "Modelo Kassia de aluminio y madera", price:"$ 13.200", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/Kassia-e1625145906387.jpg" },
    { id: 4, title:"Conda Negro", description:"colgantes", detail: "Modelo Circe de metal negro mate", price:"$ 7.600", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/3-7.jpg" },
    { id: 5, title:"Kairos", description:"colgantes",detail: "Modelo Circe de metal negro mate", price:"$ 8.000", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/600x600-84.jpg" },
    { id: 6, title:"Elio Blanco", description:"veladores",detail: "Modelo Circe de metal negro mate", price:"$ 10.300", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2021/01/6-5.jpg" },
    { id: 7, title:"Catoi", description:"veladores", detail: "Modelo Circe de metal negro mate", price:"$ 4.000", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/600x600-17.jpg" },
    { id: 8, title:"Pinaka", description:"veladores", detail: "Modelo Circe de metal negro mate", price:"$ 6.800", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/600x600-18.jpg" },
    { id: 9, title:"Gemis Negro", description:"veladores", detail: "Hierro, aluminio, vidrio y mármol", price:"$ 9.300", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/Gemis-negrr.jpg" }

]

export const getFetch = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve(product)
    }, 2000)
});