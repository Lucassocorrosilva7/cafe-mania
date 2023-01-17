import Image from 'next/image'
import useCoffee from "../hooks/useCoffe";
import Category from './Category';

const Sidebar = () => {
  const { categorys } = useCoffee();
  return (
    <>
  <Image 
        className='mt-5 m-auto'
        width={100}
        height={100}
        src="/assets/images/logo.svg"
        alt="imagen logotipo"
      />        <nav className='mt-10'>
          {categorys.map(category => (
            <Category key={category.id} category={category}/>))}
        </nav>
    </>
  )
}

export default Sidebar