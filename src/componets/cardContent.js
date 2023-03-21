import React from "react";
import {motion} from 'framer-motion'
import { cardContentVariants, contentVariants, thumbnailVariants } from "../variants";

const CardContent = ({data, onClick}) =>{
    return(
        <motion.div className="flex" variants={cardContentVariants} exit={"inactive"} animate="active" initial="inactive">
            <motion.div className="thumbail-container" variants={thumbnailVariants}>
                <img src={data.imgSrc} alt={data.name} className="thumbnail" />
            </motion.div>
            <motion.div className="initial-content" variants={contentVariants}>
                <h2 className="title">{data.name}</h2>
                <h2 className="designation">{data.designation}</h2>
                <h2 className="main-skills">
                     {data.skills && data.skills.length>0? data.skills.map((item, index)=>(
                        <span key={index} className="skills">{item}</span>
                     )):null}
                </h2>
                <p>{data.shortDescription}</p>
                <button className="info-btn" onClick={()=>onClick(true)}>
                    Detail
                </button>
            </motion.div>

        </motion.div>
    );
};


export default CardContent;
