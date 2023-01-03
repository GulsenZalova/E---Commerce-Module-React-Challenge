
import { useBoolean } from '@chakra-ui/react'
import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import Protuct2 from "./assets/image-product-2.png"
import { useControllableState } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import ModalSlider from './component/ModalSlider'
import { useMediaQuery } from '@chakra-ui/react'
function App() {
  const [flag, setFlag] = useBoolean(false)
  const [image, setİmage] = useControllableState({ defaultValue: Protuct2 })
  const [value, setValue] = useControllableState({ defaultValue: 0 })
  const [basket, setBasket] = useControllableState({ defaultValue: [] })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [count, setCount] = useControllableState({ defaultValue: 0 })
  const [isLargerThan992] = useMediaQuery('(max-width: 992px)')
  return (
    <div
      className="App"
      style={{ height: "100vh", position: "relative",width:"100%"}} >
      <Header
        flag={flag}
        setFlag={setFlag}
        basket={basket}
        setBasket={setBasket}
        isLargerThan992={isLargerThan992}
      />
      <Main
        image={image}
        setİmage={setİmage}
        value={value}
        setValue={setValue}
        basket={basket}
        setBasket={setBasket}
        onOpen={onOpen}
        isLargerThan992={isLargerThan992}
      />
      <ModalSlider
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        image={image}
        count={count}
        setCount={setCount}
        isLargerThan992={isLargerThan992}
      />
    </div>
  )
}

export default App
