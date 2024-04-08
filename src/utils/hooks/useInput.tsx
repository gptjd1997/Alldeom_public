import React, { ChangeEvent, FocusEvent, useState } from "react";

const useInput = ({
	defaultValue = "",
	defaultPlaceholder = "",
}: {
	defaultValue: string;
	defaultPlaceholder: string;
}) => {
	const [value, setValue] = useState(defaultValue);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const onFocus = (e: FocusEvent<HTMLInputElement>) => {
		e.target.placeholder = "";
	};
	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		e.target.placeholder = defaultPlaceholder;
	};
	const handleSetValue = (str: string) => {
		setValue(str);
	};

	return {
		handleSetValue,
		value,
		onChange,
		onFocus,
		onBlur,
		placeholder: defaultPlaceholder,
	};
};

export default useInput;
