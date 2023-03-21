import React, {useState} from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import { cardContentVariants } from '../variants';
import CardContent from './cardContent';
import cardData from '../data';
import ExpandedContent from './expandedContent';

const ProfileCard = () =>{
    const [isExpanded, setIsExpanded] =  useState();
    return (
        <motion.div
            className={`card ${isExpanded ? "expanded" : "initial"} `}
            variants={cardContentVariants}
            animate = {isExpanded? "active":"inactive"}
            initial="inactive"
        >
            <div className='content'>
                <AnimatePresence initial={false} >

                    {
                        !isExpanded ? (
                           <CardContent data={cardData} onClick={setIsExpanded} key={'profile'} />
                        )
                        :
                        <ExpandedContent data={cardData} onClick={setIsExpanded} key={'profile'} />
                    }

                </AnimatePresence>

            </div>

        </motion.div>
    )
};

export default ProfileCard;