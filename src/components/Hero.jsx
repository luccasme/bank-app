import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './Getstarted';

const Hero = () => (

    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        
          <img src={discount} alt='discount' className='w´[32px] h-[32px]'/>
          
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20% </span>
          de Desconto por {" "}
          <span className='text-white'>1 Mês </span>
          de Conta
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Novo método <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Ágil e Fácil </span>
            de transações
          
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>

        </div>

      </div>

    </section>
  )


export default Hero