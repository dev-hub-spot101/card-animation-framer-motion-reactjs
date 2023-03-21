import React from 'react';
import {motion} from 'framer-motion';
import { contentBlockVariants, expandedVariants, mainImageVariants } from '../variants';


const AnimatedContentBlock = ({children}) =>(
    <motion.div variants={contentBlockVariants}>{children}</motion.div>
);

const ExpandedContent = ({data, onClick}) =>(
    <motion.div variants={expandedVariants} animate="active" initial="inactive" exit="exit">
        <button className='close' onClick={()=>onClick(false)} >
            Close
        </button>
        <motion.div className='flex'>
            <motion.div className='image-container' variants={mainImageVariants}>
                <img src={data.imgSrc} alt={data.name} className='main-image' />
            </motion.div>

            <motion.div className='expanded-dontent'>

                <AnimatedContentBlock>
                    <h2 className='title-large'>{data.name}</h2>
                    <h3 className="designation">{data.designation}</h3>

                    <h5 className="main-skills">
                        {data.skills && data.skills.length>0? data.skills.map((item, index)=>(
                            <span key={index} className="skills">{item}</span>
                        )):null}
                    </h5>
                    <p style={{textAlign:'left'}}>{data.longDescription}</p>
                    
                </AnimatedContentBlock>

            </motion.div>

        </motion.div>
    </motion.div>
)
export default ExpandedContent;