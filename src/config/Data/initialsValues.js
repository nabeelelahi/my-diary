const personalInfo = {
    name: '',
    address: '',
    phone: '',
    cellPhone: '',
    height: '',
    weight: '',
    age: '',
    sex: '',
    bloodType: '',
    allergies: '',
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
    typeOfCare: '',
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
    time: '',
    physcianName: '',
    physcianType: '',
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

const vitals = {
    date: '',
    time: '',
    bp: '',
    bs: '',
    resp: '',
    hr: '',
    temp: '',
}

const initialValues = {
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
    laboratoryTest,
    specialCareMedication,
    vitals
}

export default initialValues