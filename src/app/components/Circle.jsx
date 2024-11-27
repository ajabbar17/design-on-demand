import React from 'react';

const Circle = ({ hovered }) => {
    return (
        <div
            className={` absolute -top-20 -right-5 z-0 transition- bg-[#1D2C2A] rounded-full ${
                hovered ? 'blur-[60px] h-64 w-64' : 'blur-[75px] h-52 w-52'
            }`}
        ></div>
    );
};

export default Circle;
