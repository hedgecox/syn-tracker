import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { DateRange, TrendingDown } from "@material-ui/icons";
import FoodLog from "./FoodLog";
import WeightLog from "./WeightLog";

const App = () => {
    const [value, setValue] = React.useState(0);

    return (
        <>
            {value === 0 ? <FoodLog /> : <WeightLog />}

            <BottomNavigation
                style={{ width: "100%", position: "fixed", bottom: 0 }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction
                    label="Food Logs"
                    icon={<DateRange />}
                />
                <BottomNavigationAction
                    label="Weight Logs"
                    icon={<TrendingDown />}
                />
            </BottomNavigation>
        </>
    );
};

export default App;
