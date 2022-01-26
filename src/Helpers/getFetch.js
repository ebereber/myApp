


const product =[
    { id: 1, title:"Circe", description:"colgantes", detail: "Modelo Circe de metal negro mate", price: 120, 
    pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/7-1.jpg",
    pictureUrl2:"https://leukiluminacion.com/wp-content/uploads/2019/08/1-12.jpg",
    pictureUrl3:"https://leukiluminacion.com/wp-content/uploads/2019/08/2-10.jpg",
    pictureUrl4:"https://leukiluminacion.com/wp-content/uploads/2019/08/6-1.jpg",
    pictureUrl5:"https://leukiluminacion.com/wp-content/uploads/2019/08/Circe-2.jpg",
     stock: 5 },
    { id: 2, title:"Zarek Negro", description:"colgantes", detail: "Modelo Zarek de aluminio y madera", price: 160, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/Zarek-Negro-600x600.jpg", stock: 4 },
    { id: 3, title:"Kassia", description:"colgantes", detail: "Modelo Kassia de aluminio y madera", price: 130, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/Kassia-e1625145906387.jpg", stock: 6 },
    { id: 4, title:"Conda Negro", description:"colgantes", detail: "Modelo Circe de metal negro mate", price: 760, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/3-7.jpg", stock: 8 },
    { id: 5, title:"Kairos", description:"colgantes",detail: "Modelo Circe de metal negro mate", price: 800, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/600x600-84.jpg", stock: 3 },
    { id: 6, title:"Elio Blanco", description:"veladores",detail: "Modelo Circe de metal negro mate", price:100, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2021/01/6-5.jpg", stock: 2 },
    { id: 7, title:"Catoi", description:"veladores", detail: "Modelo Circe de metal negro mate", price: 400, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/600x600-17.jpg", stock: 0 },
    { id: 8, title:"Pinaka", description:"veladores", detail: "Modelo Circe de metal negro mate", price: 680, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/600x600-18.jpg", stock: 4 },
    { id: 9, title:"Gemis Negro", description:"veladores", detail: "Hierro, aluminio, vidrio y mármol", price: 930, pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/Gemis-negrr.jpg", stock: 5 }

]

export const getFetch = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve(product)
    }, 3000)
});