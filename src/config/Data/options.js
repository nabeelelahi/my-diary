const vaccinations_name = [
    {name: 'Hepatitus A', value: 'hepatitus-a'},
    {name: 'Hepatitus B', value: 'hepatitus-b'},
    {name: 'Hepatitus C', value: 'hepatitus-c'},
    {name: 'Covid 19', value: 'covid-19'},
]

const medications_reason = [
    {name: 'ALZHEIMER', value: 'ALZHEIMER'},
    {name: 'ANXIETY', value: 'ANXIETY'},
    {name: 'ANTIBIOTIC', value: 'ANTIBIOTIC'},
    {name: 'ARTHRITIS', value: 'ARTHRITIS'},
    {name: 'BLADDER', value: 'BLADDER'},
    {name: 'BLOOD', value: 'BLOOD'},
    {name: 'BP', value: 'BP'},
    {name: 'CANCER', value: 'CANCER'},
    {name: 'CHOLESTROL', value: 'CHOLESTROL'},
    {name: 'CONSTIPATION', value: 'CONSTIPATION'},
    {name: 'DEPRESSION', value: 'DEPRESSION'},
    {name: 'DIABETES', value: 'DIABETES'},
    {name: 'DIARRHEA', value: 'DIARRHEA'},
    {name: 'EYES', value: 'EYES'},
    {name: 'FEVER', value: 'FEVER'},
    {name: 'FLUID', value: 'FLUID'},
    {name: 'HARMONES', value: 'HARMONES'},
    {name: 'HEART', value: 'HEART'},
    {name: 'KIDNEY', value: 'KIDNEY'},
    {name: 'LUNGS', value: 'LUNGS'},
    {name: 'NAUSEA', value: 'NAUSEA'},
    {name: 'PAIN', value: 'PAIN'},
    {name: 'PARKINSON', value: 'PARKINSON'},
    {name: 'SEIZURES', value: 'SEIZURES'},
    {name: 'SINUS', value: 'SINUS'},
    {name: 'SKIN', value: 'SKIN'},
    {name: 'SLEEP', value: 'SLEEP'},
    {name: 'SPASM', value: 'SPASM'},
    {name: 'STOMACH', value: 'STOMACH'},
    {name: 'THYROID', value: 'THYROID'},
    {name: 'VIRUSES', value: 'VIRUSES'},
    {name: 'VITAMINS', value: 'VITAMINS'},
    {name: 'VOMITING', value: 'VOMITING'},
]

const emergencyContact_relation = [
    {name: 'Parent', value: 'parent'},
    {name: 'Sibling', value: 'sibling'},
    {name: 'Child', value: 'child'},
    {name: 'Spouse', value: 'spouse'},
]

const emergencyRoom_hospitalAdmission = [
    {name: 'Yes', value: 'yes'},
    {name: 'No', value: 'no'},
]

const equipment = [
    {name: 'Yes', value: 'yes'},
    {name: 'No', value: 'no'},
]

const medicalTest_procedure = [
    {name: 'MRI', value: 'MRI'},
    {name: 'Cat Scan', value: 'cat-scan'},
    {name: 'Dialysis', value: 'dialysis'},
    {name: 'X-RAY', value: 'x-ray'},
    {name: 'IVP', value: 'ivp'},
    {name: 'Colonoscopy', value: 'colonoscopy'},
    {name: 'PICC Line', value: 'picc-line'},
    {name: 'CV-Line', value: 'cv-line'},
    {name: 'EKG', value: 'EKG'},
    {name: 'Doppler', value: 'doppler'},
    {name: 'EEG', value: 'EEG'},
    {name: 'Bronchoscopy', value: 'Bronchoscopy'},
    {name: 'Chemotherapy', value: 'chemotherapy'},
    {name: 'Radiation', value: 'radiation'},
    {name: 'Stress Test', value: 'stress-test'},
    {name: 'Echocardiogram', value: 'echocardiogram'},
    {name: 'other', value: 'other'},
]

const homeCare_service = [
    {name: 'Nursing', value: 'nursing'},
    {name: 'Physical Therapy', value: 'physical-therapy'},
    {name: 'Speech Therapy', value: 'speech-therapy'},
]

const options = {
    vaccinations_name,
    medications_reason,
    emergencyContact_relation,
    emergencyRoom_hospitalAdmission,
    medicalTest_procedure,
    homeCare_service,
    equipment
}

export default options