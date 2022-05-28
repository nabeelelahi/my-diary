import React from 'react';
import { styles } from './ourVision';
import globalStyles from '~/assets/styles/globalStyles';
import GradientContainer from '~/components/shared/GradientContainer';
import DescriptionCard from '~/components/shared/DescriptionCard';
import Button from '../../components/shared/Buttons/Button';
import { TouchableOpacity } from 'react-native';

export default function OurVision({ navigation }) {

  return (
    <GradientContainer topContainer={true}>
      <DescriptionCard title={'Our Vision'}>

        As a consumer of health care services, it is important to know what services are being provided to you to prevent health care errors. Healthcare services can be overwhelming and contribute to forgetting or misplacing valuable information pertaining to the various medical test, treatments, laboratory results, procedures, medications prescribed, appointments with medical personnel or other aspects of your health care.
        As a patient or the individual responsible for the health of a loved one, keeping a record of your health care or your loved one’s health care is very important. Having your health care in your hands readily available to share with any practitioner you see. Having your health care record in a single location, and the ability to have access to your health care information when your physician’s office is closed, and most importantly being knowledgeable about your health care
        “My Medical Diary “ is an App designed to track your health care.  Each section is designed to document the various health care services you encounter as a patient. Your health or the health of your love one can not be replaced. Allow “My Medical Diary” assist you in becoming a knowledgeable participant of your health care team. Begin with tracking the services you receive as a consumer of health care with “My Medical Diary”.


      </DescriptionCard>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Button
          title="Next"
          style={{ ...globalStyles.baseButton, ...styles.button }}
          textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
        />
      </TouchableOpacity>
    </GradientContainer>
  )

}