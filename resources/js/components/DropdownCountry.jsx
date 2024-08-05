import React, { useState } from "react";

const ArrowDown = () => (
    <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.313073 0.813073C0.508335 0.61781 0.824917 0.61781 1.02018 0.813072L4.88211 4.675C4.9472 4.74009 5.05272 4.74009 5.11781 4.675L8.97974 0.813071C9.175 0.617809 9.49158 0.617809 9.68685 0.813071C9.88211 1.00833 9.88211 1.32492 9.68685 1.52018L5.82492 5.38211C5.36931 5.83772 4.63061 5.83772 4.175 5.38211L0.313073 1.52018C0.117811 1.32492 0.11781 1.00833 0.313073 0.813073Z"
            fill="black"
        />
    </svg>
);

const DropdownCountry = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className="dropdown-country">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption.city}, {selectedOption.country_code}
                <span className={`dropdown-arrow${isOpen ? ' active' : ''}`}><ArrowDown/></span>
            </div>
            <ul className={`dropdown-list ${isOpen ? "open" : ""}`}>
                {options.map((option) => (
                    <li
                        key={option.id}
                        className="dropdown-list-item"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.city}, {option.country_code}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownCountry;
