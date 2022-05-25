const personalInfo = [
    { name: 'name', label: 'Name', key: '1', type: 'input' },
    { name: 'address', label: 'Address', key: '2', type: 'input' },
    { name: 'phone', label: 'Phone', key: '3', type: 'input' },
    { name: 'cellPhone', label: 'Cell Phone', key: '4', type: 'input' },
    { name: 'height', label: 'Height', key: '5', type: 'input' },
    { name: 'weight', label: 'Weight', key: '6', type: 'input' },
    { name: 'age', label: 'Age', key: '7', type: 'input' },
    { name: 'sex', label: 'Sex', key: '8', type: 'select' },
    { name: 'allergies', label: 'Allergies', key: '0', type: 'input' },
]

const insurance = [
    { name: 'medicare', label: 'Medicare #', key: '1', type: 'input' },
    { name: 'medicaid', label: 'Medicaid #', key: '2', type: 'input' },
    { name: 'privateInsurane', label: 'Private Insurane', key: '3', type: 'input' },
    { name: 'policy', label: 'Policy #', key: '4', type: 'input' },
    { name: 'group', label: 'Group #', key: '5', type: 'input' },
    { name: 'otherPayerSource', label: 'Other Payer Source', key: '6', type: 'input' },
    { name: 'phone', label: 'Phone #', key: '7', type: 'input' },
    { name: 'fax', label: 'Fax #', key: '8', type: 'input' },
]

const physician = [
    { name: 'name', label: 'Name', key: '1', type: 'input' },
    { name: 'address', label: 'Address', key: '2', type: 'input' },
    { name: 'city', label: 'City', key: '3', type: 'input' },
    { name: 'state', label: 'State', key: '4', type: 'input' },
    { name: 'phone', label: 'TelePhone #', key: '5', type: 'input' },
    { name: 'typeOfCare', label: 'Type Of Care', key: '6', type: 'input' },
]

const diagnosis = [
    { name: 'illness', label: 'Medical Problem/Illness', key: '1', type: 'input' },
    { name: 'date', label: 'Date Of Diagnosis', key: '2', type: 'input' },
]

const surgeries = [
    { name: 'procedure', label: 'Surgical Opration / Procedure', key: '1', type: 'input' },
    { name: 'date', label: 'Date', key: '2', type: 'input' },
    { name: 'hospital', label: 'Hospital', key: '3', type: 'input' },
]


const vaccinations = [
    { name: 'name', label: 'Vaccination Name', key: '1', type: 'select', slug: 'vaccinations_name' },
    { name: 'date', label: 'Date', key: '2', type: 'input' },
    { name: 'shots', label: 'Shots', key: '3', type: 'input' },
]

const emergencyContact = [
    { name: 'name', label: 'Name', key: '1', type: 'input' },
    { name: 'address', label: 'Address', key: '2', type: 'input' },
    { name: 'phone', label: 'Phone', key: '3', type: 'input' },
    { name: 'relation', label: 'Relation', key: '4', type: 'select', slug: 'emergencyContact_relation' },
]

const doctorVisits = [
    { name: 'date', label: 'Date', key: '1', type: 'input' },
    { name: 'time', label: 'Time', key: '2', type: 'input' },
    { name: 'physcianName', label: 'Physican Name', key: '3', type: 'input' },
    { name: 'physcianType', label: 'Type of Physican', key: '4', type: 'input' },
    { name: 'reason', label: 'Reason For Appointment', key: '5', type: 'input' },
    { name: 'nextAppointment', label: 'Next Appointment', key: '6', type: 'input' },
]

const emergencyRoom = [
    { name: 'date', label: 'Date', key: '1', type: 'input' },
    { name: 'facilityName', label: 'Facility Name', key: '2', type: 'input' },
    { name: 'physcianName', label: 'Physican Name', key: '3', type: 'input' },
    { name: 'reason', label: 'Reason For Emergency', key: '5', type: 'input' },
    { name: 'hospitalAdmission', label: 'Hospital Admission', key: '6', type: 'select', slug: 'emergencyRoom_hospitalAdmission' },
]

const homeCare = [
    { name: 'agencyName', label: 'Name of Agency', key: '1', type: 'input' },
    { name: 'address', label: 'Address', key: '2', type: 'input' },
    { name: 'phone', label: 'Phone', key: '3', type: 'input' },
    { name: 'service', label: 'Service', key: '4', type: 'select', slug: 'homeCare_service' },
    { name: 'assistantName', label: 'Name of Assistant', key: '4', type: 'input' },
    { name: 'noOfHours', label: 'No. of hours (Assistence/week)', key: '3', type: 'input' },
]

const medicalTest = [
    { name: 'procedure', label: 'Diagnostic Test', key: '1', type: 'select', slug: 'medicalTest_procedure' },
    { name: 'date', label: 'Date', key: '2', type: 'input' },
    { name: 'reason', label: 'Reason for Test ()', key: '3', type: 'input' },
]

const medications = [
    { name: 'name', label: 'Medication Name', key: '1', type: 'input' },
    { name: 'dose', label: 'Dose', key: '2', type: 'input' },
    { name: 'frequency', label: 'Frequency', key: '3', type: 'input' },
    { name: 'startDate', label: 'Start Date', key: '4', type: 'input' },
    { name: 'endDate', label: 'End Date', key: '5', type: 'input' },
    { name: 'reason', label: 'Reason for Test', key: '6', type: 'select', slug: 'medications_reason' },
]

const equipment = [
    { name: 'walker', label: 'Walker', key: '1', type: 'select', slug: 'equipment' },
    { name: 'care', label: 'Care', key: '2', type: 'select', slug: 'equipment' },
    { name: 'wheelChair', label: 'Wheel Chair', key: '3', type: 'select', slug: 'equipment' },
    { name: 'prosthetics', label: 'Prosthetics', key: '4', type: 'select', slug: 'equipment' },
    { name: 'hospitalBed', label: 'Hospital Bed', key: '5', type: 'select', slug: 'equipment' },
    { name: 'crutches', label: 'Crutches', key: '6', type: 'select', slug: 'equipment' },
    { name: 'brace', label: 'Brace', key: '7', type: 'select', slug: 'equipment' },
    { name: 'oxygen', label: 'Oxygen', key: '8', type: 'select', slug: 'equipment' },
    { name: 'bipap', label: 'Bi pap', key: '9', type: 'select', slug: 'equipment' },
    { name: 'cpap', label: 'C pap', key: '0', type: 'select', slug: 'equipment' },
    { name: 'nebulizer', label: 'Nebulizer', key: '10', type: 'select', slug: 'equipment' },
    { name: 'glucoMeter', label: 'Gluco Meter', key: '11', type: 'select', slug: 'equipment' },
    { name: 'anticoagulentMechine', label: 'Anticoagulent Mechine', key: '12', type: 'select', slug: 'equipment' },
    { name: 'others', label: 'Others', key: '13', type: 'select', slug: 'equipment' },
]

const blood = [
    { name: 'bloodType', label: 'Blood Type', key: '9', type: 'select', slug: 'blood_bloodType' },
]

const laboratoryTest = [
    { name: 'date', label: 'Date', key: '2', type: 'input' },
    { name: 'time', label: 'Time', key: '3', type: 'input' },
    { name: 'procedure', label: 'Laboratory Test', key: '1', type: 'select', slug: 'medicalTest_procedure' },
]

const specialCareMedication = [
    { name: 'date', label: 'Date', key: '2', type: 'input' },
    { name: 'procedure', label: 'Medication', key: '1', type: 'select', slug: 'medicalTest_procedure' },
]

const vitals = [
    { name: 'date', label: 'Date', key: '1', type: 'input' },
    { name: 'time', label: 'Time', key: '2', type: 'input' },
    { name: 'bp', label: 'Blood Pressure', key: '3', type: 'input' },
    { name: 'bs', label: 'Blood Sugar', key: '3', type: 'input' },
    { name: 'resp', label: 'Respirations', key: '3', type: 'input' },
    { name: 'hr', label: 'Heart Rate', key: '3', type: 'input' },
    { name: 'temp', label: 'Tempreture', key: '3', type: 'input' },
]

const formFields = {
    personalInfo,
    insurance,
    physician,
    diagnosis,
    surgeries,
    vaccinations,
    emergencyContact,
    doctorVisits,
    emergencyRoom,
    homeCare,
    medicalTest,
    medications,
    equipment,
    blood,
    laboratoryTest,
    specialCareMedication,
    vitals
}

export default formFields;