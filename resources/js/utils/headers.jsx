
import { UsersIcon, MegaphoneIcon, ChatBubbleLeftRightIcon, BookOpenIcon, CalendarDaysIcon, HandRaisedIcon, DocumentIcon, TrophyIcon, CloudArrowUpIcon, PencilSquareIcon, UserGroupIcon, LockClosedIcon } from "@heroicons/react/24/outline"


export const Headers = (size) => {
    const headers = [
        {icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-gray-500">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>,
            title: 'Dashboard',subTitle: 'Welcome to CDM LMS'},
        { icon: <MegaphoneIcon className={`${size} text-gray-500`} />, title: 'Anouncements', subTitle: "View Anouncements" },
        // { icon: <UsersIcon className={`${size} text-gray-500`} />, title: 'People', subTitle: "View People" },
        { icon: <BookOpenIcon className={`${size} text-gray-500`} />, title: 'Subjects', subTitle: "View Subjects" },
        { icon: <CalendarDaysIcon className={`${size} text-gray-500`} />, title: 'Schedules', subTitle: "View Schedules" },
        { icon: <HandRaisedIcon className={`${size} text-gray-500`} />, title: 'Attendance', subTitle: "View Attendance" },
        { icon: <DocumentIcon className={`${size} text-gray-500`} />, title: 'Files', subTitle: "View Files" },
        { icon: <TrophyIcon className={`${size} text-gray-500`} />, title: 'Accomplishment Reports', subTitle: "View Accomplishment Reports" },
        { icon: <CloudArrowUpIcon className={`${size} text-gray-500`} />, title: 'Repository of Files', subTitle: "View Repository of Files" },
        { icon: <PencilSquareIcon className={`${size} text-gray-500`} />, title: 'Online Exam', subTitle: "View Online Exam" },
        { icon: <UserGroupIcon className={`${size} text-gray-500`} />, title: 'Online Class', subTitle: "View Online Class" },
        { icon: <LockClosedIcon className={`${size} text-gray-500`} />, title: 'File Encrypter', subTitle: "View File Encrypter" },
    ]
    return headers;
}