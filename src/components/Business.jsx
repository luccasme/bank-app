import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button'

const FeatureCard =  (title, icon, content, index ) => {
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
    </div>  
  </div>
}

const Business = () => {
  return (
    <section id="features" className='(layout.section'>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Você faz o negócio, <br className='sm:block hidden'/> nós cuidados do dinheiro!</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Com o cartão de crédito certo, você pode melhorar sua vida financeira construindo crédito, ganhando recompensas e economizando dinheiro. Mas com centenas de cartões de crédito no mercado.</p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {... feature} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Business