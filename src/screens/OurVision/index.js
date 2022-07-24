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

        It is the vision of “My Medical Diary” for consumers of healthcare to readily access their healthcare information from the palm of their hand to assist with improved outcomes and self-management of their care.
        As a consumer of healthcare services, it is important to know what services or treatments are being provided to you. Healthcare services can be overwhelming and contribute to forgetting or misplacing valuable information related to the various medical test, treatments, laboratory results, medications, vaccinations, medical appointments, or other aspects of your or loved one’s healthcare. As a patient or the individual responsible for the healthcare of a loved one having access readily available in your hands is very important. Having this healthcare information to share with any practitioner you may see. Having a history of your healthcare information in a single location, the palm of your hand. Having information about your healthcare when your physician’s office is closed, and most importantly is being a knowledgeable consumer about your healthcare.
        “My Medical Diary” is an App designed to track your healthcare. The icons were created to assist you to document the various healthcare services encountered as a consumer of healthcare. Having healthcare information readily available can be helpful and important. Allow “My Medical Diary” assist you with tracking your healthcare services.


      </DescriptionCard>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Button
          title="Next"
          style={{ ...globalStyles.baseButton, ...styles.button }}
          textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
        />
      </TouchableOpacity>
    </GradientContainer>
  )

}