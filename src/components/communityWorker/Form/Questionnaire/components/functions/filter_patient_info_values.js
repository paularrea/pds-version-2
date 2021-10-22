const filter_patient_info_values = (values) => {
  function filterObj(obj, predicate) {
    var result = {},
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key) && predicate(key, obj[key])) {
        result[key] = obj[key];
      }
    }
    return result;
  }

  var filteredObj = filterObj(values, function (key) {
    return key.includes("patient");
  });

  return filteredObj
};

export default filter_patient_info_values;
