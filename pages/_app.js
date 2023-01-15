import '../styles/globals.css'
import { CoffeeProvider } from '../context/coffeeProvider'

export default function App({ Component, pageProps }) {
  return (
    <CoffeeProvider>
      <Component {...pageProps} />
    </CoffeeProvider>
  )
}
