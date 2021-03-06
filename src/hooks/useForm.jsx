import { useState } from 'react'
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'
import { useCartContext } from '../Context/CartContext'

export const useForm = () => {
  const { cartList, totalPrice } = useCartContext()
  const [idOrder, setIdOrder] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dataForm, setDataForm] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    emailConfirmation: '',
    street: '',
    number: '',
    apartament: '',
    location: '',
    province: '',
    postalCode: '',
    idCard: '',
    birthDate: '',
    shipping: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setDataForm({
      ...dataForm,
      [name]: value,
    })
  }

  const orderGenerator = (e) => {
    e.preventDefault()
    setErrors(validate(dataForm))
    setIsSubmit(true)

    let order = {}
    order.date = Timestamp.fromDate(new Date())
    order.buyer = dataForm
    order.total = { totalPrice }
    order.items = cartList.map((item) => {
      const id = item.id
      const name = item.title
      const price = item.price

      return { id, name, price }
    })

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
      .then((res) => setIdOrder(res.id))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  const validate = (values) => {
    const error = {}
    const regex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

    if (!values.name) {
      error.name = 'Ingrese su nombre'
    }
    if (!values.phone) {
      error.phone = 'Ingrese su telefono'
    }
    if (!values.email) {
      error.email = 'Ingrese su email'
    } else if (!regex.test(values.email)) {
      error.email = 'Ingrese un email valido'
    }
    if (!values.emailConfirmation) {
      error.emailConfirmation = 'Confirme su email'
    } else if (values.emailConfirmation !== values.email) {
      error.emailConfirmation = 'Verifique su email'
    }
    return error
  }

  return {
    dataForm,
    idOrder,
    errors,
    isSubmit,
    handleChange,
    orderGenerator,
    loading,
  }
}
