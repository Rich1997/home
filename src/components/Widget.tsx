import { useState, useEffect } from 'react';

type ClockProps = {
    is24HourFormat?: boolean;
    showSeconds?: boolean;
    align?: 'center' | 'start' | 'end';
};

const Widget = ({
    is24HourFormat = false,
    showSeconds = true,
    align = 'center',
}: ClockProps) => {
    const [time, setTime] = useState(new Date());
    const [today, setToday] = useState('');
    const [dayOfYear, setDayOfYear] = useState(Number);
    const [daysLeft, setDaysLeft] = useState(Number);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        setToday(
            days[time.getDay()] +
                ', ' +
                months[time.getMonth()] +
                ' ' +
                time.getDate() +
                ', ' +
                time.getFullYear()
        );

        const startOfYear = new Date(time.getFullYear(), 0, 0);
        const endOfYear = new Date(time.getFullYear(), 11, 31);
        setDayOfYear(
            Math.floor((time.getTime() - startOfYear.getTime()) / 86400000)
        );
        setDaysLeft(
            Math.floor((endOfYear.getTime() - time.getTime()) / 86400000) + 1
        );

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date: Date): string => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        if (is24HourFormat) {
            hours = hours % 24;
        } else {
            hours = hours % 12;
            hours = hours ? hours : 12;
        }

        const formattedHours =
            hours < 10 && is24HourFormat ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        if (showSeconds) {
            return `${formattedHours} ${formattedMinutes} ${formattedSeconds}`;
        } else {
            return `${formattedHours} ${formattedMinutes}`;
        }
    };

    return (
        <div className={`p-4 flex flex-col is-y-${align}`}>
            <div
                className={`flex items-end is-${align} laptop:gap-4 tablet:gap-2 gap-1 font-black`}
            >
                <div className="desktop:text-9xl laptop:text-8xl tablet:text-7xl phone:text-4xl text-2xl tracking-tighter">
                    {formatTime(time)}
                </div>
                <div
                    className={`${
                        is24HourFormat ? 'hidden' : 'block'
                    } desktop:text-6xl laptop:text-4xl tablet:text-3xl phone:text-lg text-base laptop:py-2 tablet:py-1 phone:py-0 py-2 tracking-tighter`}
                >
                    {time.getHours() >= 12 ? 'PM' : 'AM'}
                </div>
            </div>
            <div className="tracking-tighter font-black desktop:text-3xl laptop:text-2xl tablet:text-xl phone:text-lg">
                {today}
            </div>
            <div className="desktop:text-base tablet:text-sm text-xs">
                Day of the year is {dayOfYear} | {daysLeft}{' '}
                {daysLeft == 1 ? 'day' : 'days'} left in the year
            </div>
        </div>
    );
};

export default Widget;
