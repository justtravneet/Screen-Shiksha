import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react'; 

const ListItem = ({ text, Icon = ArrowUpRight }) => {
    return (
        <li className="flex items-center gap-1 group hover:opacity-50 transition-opacity">
            <p className="text-white text-[14px]">{text}</p>
            <span className="opacity-0 group-hover:opacity-50 transition-opacity">
                <Icon size={16} weight="fill" color="white" />
            </span>
        </li>
    );
};

export default ListItem;
