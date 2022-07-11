
import { showMessage, hideMessage } from "react-native-flash-message";

function show(type = 'success', message = 'Success') {
    showMessage({
        message,
        type,
    });
}

const message = {
    show
}

export default message