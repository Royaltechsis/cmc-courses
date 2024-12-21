import React, { useEffect } from 'react';

const VoiceflowChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';

    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6749c0d34e1b039383965689' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; 
};

export default VoiceflowChat;
