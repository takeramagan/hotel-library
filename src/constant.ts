const roomOptions = [
  { value: 'business-suite', label: 'Business Suite' },
  { value: 'presidential-suite', label: 'Presidential Suite' },
  { value: 'double-suite', label: 'Double Suite' },
  { value: 'single-suite', label: 'Single Suite' },
];

const extraService = [
  { value: 'extraBreakfast', label: 'Breakfast' },
  { value: 'extraTV', label: 'TV' },
  { value: 'extraWiFi', label: 'WiFi' },
  { value: 'extraParking', label: 'Parking' },
  { value: 'extraBalcony', label: 'Balcony' },
];

const tagOptions = ['hotel', 'booking', 'labtest', 'angular', 'material'];

const filterInitData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  arrivalDate: '',
  departureDate: '',
};

const initialFormValues = {
  key: 0,
  roomSize: 'business-suite',
  roomQuantity: 1,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  extras: [],
  tags: [],
  arrivalDate: '',
  departureDate: '',
  streetName: '',
  streetNumber: '',
  zipCode: '',
  state: '',
  city: '',
  payment: 'cc',
  note: '',
  reminder: true,
  newsletter: true,
  confirm: false,
};

export {
  initialFormValues,
  roomOptions,
  extraService,
  filterInitData,
  tagOptions,
};
