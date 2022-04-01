import React from 'react';
import { Checkbox } from 'components/CustomFields';

function PrivacyCheckbox(props) {
  return (
    <div>
      <Checkbox
        {...props}
        label="Соглашаюсь на обработку моих персональных данных в соответствии с
        Политикой конфиденциальности и принимаю условия Пользовательского
        соглашения"
      />
    </div>
  );
}

export default React.memo(PrivacyCheckbox);
