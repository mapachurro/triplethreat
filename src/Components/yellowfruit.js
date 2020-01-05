import React from 'react';
import './yellowfruit.css';
import { useTranslation } from 'react-i18next';

export function Yellowfruit() {
  
  const { t, i18n } = useTranslation();
  return (
    <div>
      
<div class="Alignbox-item--top" id="topper">
</div>

<div class="Alignbox">
  <div class="Alignbox-item" id="ananas">
    <p>{t('ananas')}</p>
  </div>
</div>

<div class="Alignbox-item--bottom" id="bottom">
</div>

  </div>
  );
  
}


export default Yellowfruit;
