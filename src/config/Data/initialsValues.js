const personalInfo = {
    name: '',
    address: '',
    phone: '',
    cellPhone: '',
    height: '',
    weight: '',
    age: '',
    sex: '',
    allergies: '',
}

const blood = {
    bloodType: ''
}

const insurance = {
    medicare: '',
    medicaid: '',
    privateInsurane: '',
    policy: '',
    group: '',
    otherPayerSource: '',
    phone: '',
    fax: '',
}

const physician = {
    name: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    typeOfPhysician: '',
}

const diagnosis = {
    illness: '',
    date: '',
}

const surgeries = {
    procedure: '',
    date: '',
    hospital: '',
}

const vaccinations = {
    name: '',
    date: '',
    shots: '',
}

const emergencyContact = {
    name: '',
    address: '',
    phone: '',
    relation: '',
}

const doctorVisits = {
    date: '',
    // time: '',
    physcianName: '',
    // physcianType: '',
    reason: '',
    nextAppointment: '',
}

const emergencyRoom = {
    date: '',
    facilityName: '',
    physcianName: '',
    physcianType: '',
    reason: '',
    hospitalAdmission: '',
}

const homeCare = {
    name: '',
    address: '',
    phone: '',
    service: '',
}

const medicalTest = {
    procedure: '',
    date: '',
    reason: '',
}

const medications = {
    name: '',
    dose: '',
    frequency: '',
    startDate: '',
    endDate: '',
    reason: '',
}

const equipment = {
    walker: '',
    care: '',
    wheelChair: '',
    prosthetics: '',
    hospitalBed: '',
    crutches: '',
    brace: '',
    oxygen: '',
    ventilator: '',
    bipap: '',
    cpap: '',
    nebulizer: '',
    glucoMeter: '',
    anticoagulentMechine: '',
    others: ''
}

const laboratoryTest = {
    date: '',
    time: '',
    procedure: '',
}

const specialCareMedication = {
    date: '',
    procedure: '',
}

const bloodPressure = {
    date: '',
    time: '',
    bloodPressure: '',
}

const bloodSugar = {
    date: '',
    time: '',
    bloodSugar: '',
}

const respiration = {
    date: '',
    time: '',
    respiration: '',
}

const heartRate = {
    date: '',
    time: '',
    heartRate: '',
}

const tempreture = {
    date: '',
    time: '',
    tempreture: '',
}

const inpatientFacility = {
    admissionDate: '',
    dischargeDate: '',
    reason: '',
    name: '',
    type: '',
    advancedDirective: '',
    resuscitateOrderpe: '',
}

const initialValues = {
    personalInfo,
    blood,
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
    laboratoryTest,
    specialCareMedication,
    bloodPressure,
    bloodSugar,
    respiration,
    heartRate,
    tempreture,
    inpatientFacility
}

export default initialValues