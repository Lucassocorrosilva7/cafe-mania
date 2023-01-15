import Image from 'next/image'
import Logo from "../public/assets/img/logo.svg"

const Sidebar = () => {
  return (
    <>
        <Image width={100} height={100} src={Logo} alt="Logotipo " priority />
    </>
  )
}

export default Sidebar