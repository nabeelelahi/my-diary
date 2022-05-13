import React from 'react';
import { styles } from './disclaimer';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import DescriptionCard from '~/components/shared/DescriptionCard';
import Button from '~/components/shared/Button';

export default function Disclaimer({ navigation }) {

  return (
    <GradientContainer topContainer={true}>
      <DescriptionCard title={'Disclaimer'}>And the reigning defending undisputed world heavyweight champion</DescriptionCard>
      <Button
        title="Next"
        style={{...globalStyles.baseButton, ...styles.button}}
        textStyle={{...globalStyles.baseButtonText, ...styles.buttonText}}
      />
    </GradientContainer>
  )

}