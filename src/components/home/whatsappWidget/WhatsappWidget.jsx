import React from 'react';
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WhatsappWidget = () => {
  return (
    <WhatsAppWidget companyName="Fiber peru" phoneNumber="+51951954633" message="Qué podemos hacer por ti?" sendButtonText="enviar" replyTimeText="Por lo general responde en minutos"/>
  );
};
export default WhatsappWidget
