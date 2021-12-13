const product = {
  id: 1,
  title: "Circe",
  model: "Colgante",
  description: "Modelo Circe de metal negro mate",
  price: "$ 12.800",
  pictureUrl: "https://leukiluminacion.com/wp-content/uploads/2019/08/7-1.jpg",
}


export const getItem = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve (product)
    },2000)
})