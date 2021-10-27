export function createData(
  date,
  patient,
  pds,
  location,
  phone,
  patientId,
  linkedCommunityWorkerId,
  suggestedEventId
) {
  return {
    date,
    patient,
    pds,
    location,
    phone,
    patientId,
    linkedCommunityWorkerId,
    suggestedEventId,
  };
}
