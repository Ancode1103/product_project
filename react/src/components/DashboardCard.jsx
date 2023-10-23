import React from 'react'

export default function DashboardCard({title, children, style = {}, className = " "}) {
  return (
    <div className={"bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down " + className } style={style}>
        {title && <h3 className="text-2x1 font-semibold">{title}</h3>}
        {children}
    </div>
  );
}
