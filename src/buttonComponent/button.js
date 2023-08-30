import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';



const Button = ({ className ,children, style, onClick }) => {
    return (
        <button className={className} style={style} onClick={onClick}>
            {children}
        </button>
    );
};


export default Button;