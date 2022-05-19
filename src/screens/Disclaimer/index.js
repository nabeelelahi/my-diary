import React from 'react';
import { styles } from './disclaimer';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import DescriptionCard from '~/components/shared/DescriptionCard';
import Button from '~/components/shared/Button';
import { TouchableOpacity } from 'react-native';

export default function Disclaimer({ navigation }) {

  return (
    <GradientContainer topContainer={true}>
      <DescriptionCard title={'Disclaimer'}>
        My Medical Diary will not be held liable or responsible for any information documented in this book that is false, misleading, deleted, incomplete, or incorrectly documented.
      </DescriptionCard>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Button
          title="Next"
          style={{ ...globalStyles.baseButton, ...styles.button }}
          textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
        />
      </TouchableOpacity>
    </GradientContainer>
  )

}