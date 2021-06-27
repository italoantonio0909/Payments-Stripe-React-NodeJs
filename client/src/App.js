import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import product from './static/product-06.jpg'
import { payment } from './service/checkout'

function App() {
  const stripePromise = loadStripe(
    'pk_test_51HA6CKBxKGAw17hbtYe5qpZA3PwCwoQGD4S9M44JMIldE7HJ7NsfR0u8igpTq32UUhwjLi1kt7XMxKIFy6Clkrnr00HJR9nKeN'
  )
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  async function submit(e) {
    e.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error) {
      const { id } = paymentMethod
      const data = {
        id: id,
        amount: 10000,
      }
      const response = await payment({ data })
      console.log('del servidor llegó ', response)
    }
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form className="card" onSubmit={submit}>
            <img className="card-img-top" src={product} alt="img-product" />
            <div className="card-body">
              <div className="form-group">
                <CardElement className="form-control" />
              </div>
              <div className="form-group mt-2">
                <button className="btn btn-success form-control">Buy</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App
