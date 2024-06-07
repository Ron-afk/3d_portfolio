import { motion } from 'framer-motion';
import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { educations } from '../constants';

const EducationCard =({index,areas, degree, school, program, date}) =>(
  <motion.div
    variants={fadeIn("","spring",index*0.5,0.75)}
    className='bg-black-200 p-10 rounded-3xl  w-full'
  >
    <div className="flex flex-row items-center justify-between">
      <div ><p className='text-white font-black text-[36px]'>{program}</p></div>
      <div ><p className='text-white font-black text-[24px]' text-align:right>{date}</p></div>
    </div>
    

    <div className='mt-1'>
      <div>
        <p className='text-white tracking-wider text-[18px]'>{degree}</p>
      </div>

      <div>
        <p className='text-white tracking-wider text-[24px]'>{school}</p>
      </div>
      <div><p className='mt-3 text-[20px]'>Area of Study:</p></div>
      <div className='flex gap-1 flex-wrap'>
        
        {areas.map((area,index) => (
          <div className='text-[20px] xs:w-[300px]'>
            <span>·</span> {area}
          </div>
        ))}
        
      </div>
      
    </div>

    
  </motion.div>
)

const Educations = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others says</p>
          <h2 className={styles.sectionHeadText}>Educations.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {educations.map((education,index)=>(
        <EducationCard 
          key={education.program}
          index={index}
          {...education}
        />
      ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Educations,"")