import { card } from "../assets"
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Encontre a melhor oferta de cartão <br className="sm:black hidden" /> em alguns passos fáceis.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Andur qweqq s qweoi er inqwe asodo qweoiq asdj anuqu qw qwnunasd qweu asdaudn qweu nsndn asone nqweons asdn e asodna.
        </p>
        <Button styles='mt-10' />  
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className="w-[100%] h-100%]" />
      </div>


    
    </section>
  )


export default CardDeal