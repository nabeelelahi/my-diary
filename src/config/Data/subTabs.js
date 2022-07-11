import {
    vitals as vitalsIcon,
    bloodPressure,
    blooadSugar,
    respiration,
    heartRate,
    tempreture,
    laboratoryTest
} from '~/assets'

const specialCare = [
    { title: 'Vitals', icon: vitalsIcon, slug: 'vitals' },
    { title: 'Laboratory Test', icon: laboratoryTest, slug: 'laboratoryTest' },
    // { title: 'Medication', icon: medications, slug: 'specialCareMedication' },
]

const vitals = [
    { title: 'Blood Pressure', icon: bloodPressure, slug: 'bloodPressure' },
    { title: 'Blood Sugar', icon: blooadSugar, slug: 'bloodSugar' },
    { title: 'Respirations', icon: respiration, slug: 'respiration' },
    { title: 'Heart Rate', icon: heartRate, slug: 'heartRate' },
    { title: 'Tempreture', icon: tempreture, slug: 'tempreture' },
]

const subTabs = {
    specialCare,
    vitals
}

export default subTabs