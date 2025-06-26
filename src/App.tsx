import { PrimeReactProvider } from "primereact/api"

import LandingPage from "@pages/LandingPage/LandingPage"

export default function App() {

  return (
    <PrimeReactProvider >
      <LandingPage/>
    </PrimeReactProvider>
  )
}