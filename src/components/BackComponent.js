import React from "react";
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import {BottomNavigationItem} from "material-ui";

function backToHome() {
    window.location = 'http://localhost:3000'
}

const BackComponent = () => (
    <div>
        <BottomNavigationItem
            label="Back to Home Page"
            icon={<KeyboardBackspace/>}
            onClick={backToHome}
            />
    </div>
);

export default BackComponent