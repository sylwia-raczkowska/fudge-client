import React from "react";
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import {BottomNavigationItem} from "material-ui";

const BackComponent = () => (
    <div>
        <BottomNavigationItem
            label="Back to Home Page"
            icon={<KeyboardBackspace/>}
            />
    </div>
);

export default BackComponent