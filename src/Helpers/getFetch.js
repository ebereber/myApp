
const product =[
    { id: 1, title:"Circe", description:"Colgante", price:"$ 12.800", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/7-1.jpg" },
    { id: 2, title:"Zarek Negro", description:"Colgante", price:"$ 16.300", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/Zarek-Negro-600x600.jpg" },
    { id: 3, title:"Kassia", description:"Colgante", price:"$ 13.200", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/Kassia-e1625145906387.jpg" },
    { id: 4, title:"Conda Negro", description:"Colgante", price:"$ 7.600", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2020/03/3-7.jpg" },
    { id: 5, title:"Kairos", description:"Colgante", price:"$ 8.000", pictureUrl:"https://leukiluminacion.com/wp-content/uploads/2019/08/600x600-84.jpg" }

]

export const getFetch = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve(product)
    }, 2000)
});