import Image from 'next/image'
import Logo from "../public/assets/images/logo.svg"
import useCoffee from "../hooks/useCoffe";
import Category from './Category';

const Sidebar = () => {
  const { categorys } = useCoffee();
  return (
    <>
        <Image width={100} height={100} src={Logo} alt="Logotipo " priority />
        <nav className='mt-10'>
          {categorys.map(category => (
            <Category 
              key={category.id} 
              category={category}
            />
          ))}
        </nav>
    </>
  )
}

export default Sidebar