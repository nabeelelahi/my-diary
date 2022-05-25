import {
    blood,
    medicalTest,
    medications,
} from '~/assets'

const specialCare = [
    { title: 'Vitals', icon: blood, slug: 'vitals' },
    { title: 'Laboratory Test', icon: medicalTest, slug: 'laboratoryTest' },
    { title: 'Medication', icon: medications, slug: 'specialCareMedication' },
]

const subTabs = {
    specialCare
}

export default subTabs