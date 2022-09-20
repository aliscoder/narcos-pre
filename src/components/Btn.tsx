import React from "react";

interface Props {
  title?: string;
  border?: boolean;
  className?: string;
  onClick?: any;
}

export default function Btn({ 
    title = 'Button', 
    border = false, 
    className = '', 
    onClick = () => {}, 
}: Props) {
  return (
  <button onClick={onClick} className={`btn ${className} ${border ? 'border' : ''}`}>{title}</button>
  )
}
