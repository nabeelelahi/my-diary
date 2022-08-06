const personalInfo = [
    { name: 'name', label: 'Name', key: '1', type: 'input' },
    { name: 'address', label: 'Address', key: '2', type: 'input' },
    { name: 'phone', label: 'Phone', key: '3', type: 'input', keyboardType: 'numeric' },
    { name: 'cellPhone', label: 'Cell Phone', key: '4', type: 'input', keyboardType: 'numeric' },
    { name: 'height', label: 'Height', key: '5', type: 'input' },
    { name: 'weight', label: 'Weight', key: '6', type: 'input', keyboardType: 'numeric' },
    { name: 'age', label: 'Age', key: '7', type: 'input', keyboardType: 'numeric' },
    { name: 'sex', label: 'Sex', key: '8', type: 'select', slug: 'personalInfo_sex' },
    { name: 'allergies', label: 'Allergies', key: '0', type: 'input' },
]

const insurance = [
    { name: 'medicare', label: 'Medicare #', key: '1', type: 'input' },
    { name: 'medicaid', label: 'Medicaid #', key: '2', type: 'input' },
    { name: 'privateInsurane', label: 'Private Insurance', key: '3', type: 'input' },
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
    { name: 'phone', label: 'Telephone #', key: '5', type: 'input' },
    { name: 'typeOfPhysician', label: 'Type Of Physician', key: '6', type: 'select', slug: 'medications_reason' },
]

const diagnosis = [
    { name: 'illness', label: 'Medical Problem/Illness', key: '1', type: 'input' },
    { name: 'date', label: 'Date Of Problem/Illness', key: '2', type: 'date' },
]

const surgeries = [
    { name: 'procedure', label: 'Surgical Operation / Procedure', key: '1', type: 'input' },
    { name: 'date', label: 'Date', key: '2', type: 'date' },
    { name: 'hospital', label: 'Hospital', key: '3', type: 'input' },
]


const vaccinations = [
    { name: 'name', label: 'Vaccination Name', key: '1', type: 'select', slug: 'vaccinations_name' },
    { name: 'date', label: 'Date', key: '2', type: 'date' },
    // { name: 'shots', label: 'Shots', key: '3', type: 'input' },
]

const emergencyContact = [
    { name: 'name', label: 'Name', key: '1', type: 'input' },
    { name: 'address', label: 'Address', key: '2', type: 'input' },
    { name: 'phone', label: 'Phone', key: '3', type: 'input' },
    { name: 'relation', label: 'Relationship', key: '4', type: 'select', slug: 'emergencyContact_relation' },
]

const doctorVisits = [
    { name: 'date', label: 'Date', key: '1', type: 'date' },
    // { name: 'time', label: 'Time', key: '2', type: 'time' },
    { name: 'physcianName', label: 'Doctor Name', key: '3', type: 'input' },
    // { name: 'physcianType', label: 'Type of Physican', key: '4', type: 'input' },
    { name: 'reason', label: 'Reason For Appointment', key: '5', type: 'select', slug: 'medications_reason' },
    { name: 'nextAppointment', label: 'Next Appointment', key: '6', type: 'date' },
]

const emergencyRoom = [
    { name: 'date', label: 'Date', key: '1', type: 'date' },
    { name: 'facilityName', label: 'Facility Name', key: '2', type: 'input' },
    { name: 'physcianName', label: 'Physican Name', key: '3', type: 'input' },
    { name: 'reason', label: 'Reason for Emergency Visit', key: '5', type: 'select', slug: 'medications_reason' },
    { name: 'hospitalAdmission', label: 'Hospital Admission', key: '6', type: 'select', slug: 'emergencyRoom_hospitalAdmission' },
]

const homeCare = [
    { name: 'agencyName', label: 'Name of Agency', key: '1', type: 'input' },
    { name: 'address', label: 'Address', key: '2', type: 'input' },
    { name: 'phone', label: 'Phone', key: '3', type: 'input' },
    { name: 'service', label: 'Services', key: '4', type: 'select', slug: 'homeCare_service' },
    { name: 'assistantName', label: 'Name of Assistance Services', key: '4', type: 'input' },
    { name: 'noOfHours', label: 'Number of hours', key: '3', type: 'select', slug: 'homeCare_noOfHours' },
    { name: 'noOfWeeks', label: 'Number of weeks', key: '3', type: 'input' },
]

const medicalTest = [
    { name: 'procedure', label: 'Medical Test', key: '1', type: 'select', slug: 'medicalTest_procedure' },
    { name: 'date', label: 'Date', key: '2', type: 'date' },
    { name: 'reason', label: 'Reason for Test', key: '3', type: 'input' },
]

const medications = [
    { name: 'name', label: 'Medication Name', key: '1', type: 'select', slug: 'medications_name' },
    { name: 'dose', label: 'Dose', key: '2', type: 'input' },
    { name: 'frequency', label: 'Frequency', key: '3', type: 'input' },
    { name: 'startDate', label: 'Start Date', key: '4', type: 'date' },
    { name: 'endDate', label: 'End Date', key: '5', type: 'date' },
    { name: 'reason', label: 'Reason for Medication', key: '6', type: 'select', slug: 'medications_reason' },
]

const equipment = [
    { name: 'walker', label: 'Walker', key: '1', type: 'select', slug: 'equipment' },
    { name: 'care', label: 'Cane', key: '2', type: 'select', slug: 'equipment' },
    { name: 'wheelChair', label: 'WheelChair', key: '3', type: 'select', slug: 'equipment' },
    { name: 'prosthetics', label: 'Prosthetic', key: '4', type: 'select', slug: 'equipment' },
    { name: 'hospitalBed', label: 'Hospital Bed', key: '5', type: 'select', slug: 'equipment' },
    { name: 'crutches', label: 'Crutches', key: '6', type: 'select', slug: 'equipment' },
    { name: 'brace', label: 'Brace', key: '7', type: 'select', slug: 'equipment' },
    { name: 'oxygen', label: 'Oxygen', key: '8', type: 'select', slug: 'equipment' },
    { name: 'ventilator', label: 'Ventilator', key: '15', type: 'select', slug: 'equipment' },
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
    { name: 'date', label: 'Date', key: '2', type: 'date' },
    { name: 'time', label: 'Time', key: '3', type: 'time' },
    { name: 'procedure', label: 'Laboratory Test', key: '1', type: 'select', slug: 'laboratoryTest_procedure' },
]

const specialCareMedication = [
    { name: 'date', label: 'Date', key: '2', type: 'date' },
    { name: 'procedure', label: 'Medication', key: '1', type: 'select', slug: 'medicalTest_procedure' },
]

const bloodPressure = [
    { name: 'date', label: 'Date', key: '1', type: 'date' },
    { name: 'time', label: 'Time', key: '1', type: 'time' },
    { name: 'bloodPressure', label: 'Blood Pressure', key: '1', type: 'input' },
]

const bloodSugar = [
    { name: 'date', label: 'Date', key: '1', type: 'date' },
    { name: 'time', label: 'Time', key: '1', type: 'time' },
    { name: 'bloodSugar', label: 'Blood Sugar', key: '1', type: 'input' },
]

const respiration = [
    { name: 'date', label: 'Date', key: '1', type: 'date' },
    { name: 'time', label: 'Time', key: '1', type: 'time' },
    { name: 'respiration', label: 'Respiration', key: '1', type: 'input' },
]

const heartRate = [
    { name: 'date', label: 'Date', key: '1', type: 'date' },
    { name: 'time', label: 'Time', key: '1', type: 'time' },
    { name: 'heartRate', label: 'Heart Rate', key: '1', type: 'input' },
]

const tempreture = [
    { name: 'date', label: 'Date', key: '1', type: 'date' },
    { name: 'time', label: 'Time', key: '1', type: 'time' },
    { name: 'tempreture', label: 'Temperature', key: '1', type: 'input' },
]

const inpatientFacility = [
    { name: 'admissionDate', label: 'Date Admitted', key: '1', type: 'date' },
    { name: 'dischargeDate', label: 'Date Discharged', key: '2', type: 'date' },
    { name: 'reason', label: 'Reason for Admission', key: '3', type: 'input' },
    { name: 'name', label: 'Name of Inpatient facility', key: '4', type: 'input' },
    { name: 'type', label: 'Type of inpatient facility', key: '5', type: 'select', slug: 'inpatientFacility_type' },
    { name: 'advancedDirective', label: 'I have prepared an Advanced Directive for Healthcare', key: '6', type: 'select', slug: 'equipment' },
    { name: 'resuscitateOrder', label: 'I have a Do Not Resuscitate Order', key: '7', type: 'select', slug: 'equipment' },
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
    bloodPressure,
    bloodSugar,
    respiration,
    heartRate,
    tempreture,
    inpatientFacility
}

export default formFields;