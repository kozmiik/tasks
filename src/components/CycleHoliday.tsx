import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "GroundhogDay"
        | "NewYear"
        | "CincodeMayo"
        | "Christmas"
        | "ThanksgivingDay";

    const [Holiday, setHoliday] = useState<Holiday>("GroundhogDay");

    function switchingAlpha() {
        const newAlpha = alphabetHoliday[Holiday];
        setHoliday(newAlpha);
    }

    function switchingYear() {
        const newYear = yearHoliday[Holiday];
        setHoliday(newYear);
    }

    const yearHoliday: Record<Holiday, Holiday> = {
        NewYear: "GroundhogDay",
        GroundhogDay: "CincodeMayo",
        CincodeMayo: "ThanksgivingDay",
        ThanksgivingDay: "Christmas",
        Christmas: "NewYear"
    };

    const alphabetHoliday: Record<Holiday, Holiday> = {
        NewYear: "ThanksgivingDay",
        GroundhogDay: "NewYear",
        CincodeMayo: "GroundhogDay",
        ThanksgivingDay: "Christmas",
        Christmas: "CincodeMayo"
    };

    return (
        <div>
            <div>Cycle Holiday</div>
            <Button onClick={switchingAlpha}>Alphabet</Button>
            <Button onClick={switchingYear}>Year</Button>
            <div>
                {Holiday === "GroundhogDay" ? (
                    <span>Holiday: 🐿</span>
                ) : Holiday === "Christmas" ? (
                    <span>Holiday: 🎄</span>
                ) : Holiday === "CincodeMayo" ? (
                    <span>Holiday: 🇲🇽</span>
                ) : Holiday === "NewYear" ? (
                    <span>Holiday: 🎉</span>
                ) : Holiday === "ThanksgivingDay" ? (
                    <span>Holiday: 🦃</span>
                ) : (
                    <span>Holiday: </span>
                )}
            </div>
        </div>
    );
}
