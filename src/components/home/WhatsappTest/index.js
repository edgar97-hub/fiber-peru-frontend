import React from 'react';
import App from './components/app/app.component';

import { ChatProvider } from './contexts/chat.context';

const WhatsAppWidget = (props) => {
    return (
        <ChatProvider>
            <App {...props} />
        </ChatProvider>
    );
};
export default WhatsAppWidget
