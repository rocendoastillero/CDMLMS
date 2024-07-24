import { BellAlertIcon, CalendarDaysIcon, CodeBracketIcon, ExclamationCircleIcon, ExclamationTriangleIcon, MegaphoneIcon, NoSymbolIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import React from 'react'

export default function IconParse({ icon = '', size = 'w-7 h-7', color = 'text-gray-600', style='' }) {

    if (icon == 'megaphone') {
        return (
            <MegaphoneIcon className={`${size} ${color} ${style}`} />
        );
    } else if (icon == 'exclamation1') {
        return (
            <ExclamationCircleIcon className={`${size} ${color} ${style}`} />
        );
    } else if (icon == 'exclamation2') {
        return (
            <ExclamationTriangleIcon className={`${size} ${color} ${style}`} />
        );
    } else if (icon == 'paperclip') {
        return (
            <PaperClipIcon className={`${size} ${color} ${style}`} />
        );
    } else if (icon == 'nosymbol') {
        return (
            <NoSymbolIcon className={`${size} ${color} ${style}`} />
        );
    } else if (icon == 'bellalert') {
        return (
            <BellAlertIcon className={`${size} ${color} ${style}`} />
        );
    } else if (icon == 'calendar') {
        return (
            <CalendarDaysIcon className={`${size} ${color} ${style}`} />
        );
    } else {
        return (
            <CodeBracketIcon className={`${size} ${color} ${style}`} />
        );
    }
}

