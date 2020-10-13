import React from 'react';
import styled from 'styled-components';
import CalendarIcon from '../../../icons/Calendar';
import DateRangePicker from './DateRangePicker';
import TextInput from '../TextField';
import { useComponentVisible } from '../../../customHooks/useComponentVisible';
import { device } from '../../../styles/mediaQuery';

const DateRangeWrapper = styled.div`
    position: relative;
    min-height: 60px;
    width: 65%;

    @media ${device.mobileL} {
        width: 50%;
    }

    & .calendar-icon {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 10px;
        left: 15px;
        z-index: 500;
        transition: fill 0.4s;
        fill: ${(props) =>
            props.isActive
                ? props.theme.colors.primary
                : props.theme.colors.secondary};
    }
`;

export default function DateRangeInput({
    handleDateChange,
    startDate,
    endDate,
}) {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible,
    } = useComponentVisible(false);

    return (
        <DateRangeWrapper
            onClick={() => setIsComponentVisible(true)}
            ref={ref}
            isActive={isComponentVisible}
        >
            <DateRangePicker
                handleDateChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
            />
            <CalendarIcon className={'calendar-icon'} />
            <TextInput
                selectedData={{ startDate, endDate }}
                isTimeInput={true}
                clickedOutside={!isComponentVisible}
                labelText="okres"
            />
        </DateRangeWrapper>
    );
}