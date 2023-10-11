import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "purple"
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((color) => (
                <label key={color} style={{ marginRight: "10px" }}>
                    <input
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                    />
                    {color}
                </label>
            ))}

            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: selectedColor,
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
