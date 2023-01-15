import Image from 'next/image'
import Logo from "../public/assets/img/logo.svg"

const Sidebar = () => {
  return (
    <aside>
        <Image width={100} height={100} src={Logo} alt="Logotipo " priority />
    </aside>
  )
}

export default Sidebar