

import React, { FunctionComponent, useState, useEffect } from "react";
import useDebouncedValue from "./useDebouncedValue";
import {
    slider,
    sliderContainer
} from "./index.scss";

type SliderProps = {
    title: string,
    onChange: (value: number) => any;
    min: number;
    max: number;
    step: number;
    value?: number;
}

const Slider: FunctionComponent<SliderProps> = ({
    onChange,
    title,
    min,
    max,
    step,
    value
}) => {

    const [sliderValue, setSliderValue] = useState(value);

    const debouncedVolumeValue = useDebouncedValue(sliderValue, 100)

    useEffect(() => {
        onChange(debouncedVolumeValue);
    }, [debouncedVolumeValue])

    return <div className={sliderContainer}>
        <p><b>{title}</b> - {sliderValue}</p>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={sliderValue}
            className={slider}
            onChange={event => {
                setSliderValue(parseFloat(event.target.value));
            }}
        />
    </div>
}

export default Slider;