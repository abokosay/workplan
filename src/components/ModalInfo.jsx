import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ModalInfo({ data, onClose }) {
  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className="modal-overlay"
        style={{
          position: "fixed", top:0, left:0, width:"100%", height:"100%",
          background:"rgba(0,0,0,0.4)", display:"flex",
          justifyContent:"center", alignItems:"center", zIndex:1000
        }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-box"
          style={{
            background:"#fff", padding:"20px", borderRadius:"15px",
            maxWidth:"400px", width:"90%", boxShadow:"0 6px 25px rgba(0,0,0,0.2)"
          }}
          initial={{ y:50, opacity:0 }}
          animate={{ y:0, opacity:1 }}
          exit={{ y:50, opacity:0 }}
          transition={{ duration: 0.3 }}
          onClick={(e)=>e.stopPropagation()}
        >
          <button
            style={{ float:"right", border:"none", background:"none", fontSize:"1.2em", cursor:"pointer", color:"red" }}
            onClick={onClose}>✖</button>
          <h3>{data.name}</h3>
          <ul>
            {data.tasks.map((task, idx)=><li key={idx}>{task}</li>)}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalInfo;
