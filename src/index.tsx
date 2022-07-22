import React, {ChangeEvent, useEffect, useState} from "react";

interface IDelayedInputProps {
    /*
     * The delay in milliseconds from the last change to the onChange function being called.
     * Default value is 0, meaning changes will be applied instantly.
     */
    delay?: number | undefined;

}

// type InputProps = React.HTMLAttributes<HTMLInputElement>;

type InputProps = {
    value?: string;
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'value'>;

type Change = {
    /**
     * The function that holds the value of the input field. Returns the changed value as a string after the delay has been triggered.
     */
    onChange?: (value: string ) => void;
} & Omit<InputProps, 'onChange'>;

const DelayedInput: React.FunctionComponent<IDelayedInputProps & Change> = (props) => {

    const [input, setInput] = useState<string>(props.value ? props.value : "");

    useEffect(() => {
        if (!props.onChange) return;
        if (!props.delay || props.delay === 0) return props.onChange(input);
        const timeOutId = setTimeout(() => {
            if (!props.onChange) return;

            props.onChange(input ? input : "" as any);
        }, props.delay);
        return () => clearTimeout(timeOutId);
    }, [input]);
    
    useEffect(() => {
        if (props.value === input) return;
        setInput(props.value ? props.value : "");
    }, [props.value]);
    
    return (
        <input
            {...props}
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        />
    );
};

export default DelayedInput;
