import React from 'react';
import { styles } from './ourVision';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import DescriptionCard from '~/components/shared/DescriptionCard';
import Button from '../../components/shared/Button';

export default function OurVision({ navigation }) {

  return (
    <GradientContainer topContainer={true}>
      <DescriptionCard title={'Our Vision'}>And the reigning defending undisputed world heavyweight champion</DescriptionCard>
      <Button
        title="Next"
        style={{...globalStyles.baseButton, ...styles.button}}
        textStyle={{...globalStyles.baseButtonText, ...styles.buttonText}}
      />
    </GradientContainer>
  )

}