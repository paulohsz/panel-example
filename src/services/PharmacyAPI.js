import config from './../config';

import api from "../services/api";
const {  apiUrl,  endpoints } = config;

const {
  pharmacy
} = endpoints;

export async function createMedicine(newMedicine) {

  return await api({
      url: `${pharmacy.create.action}`,
      method: pharmacy.create.method,
      data: newMedicine
    })
    .then((response) => {
      return {
        success: true,
        action: {
          type: 'NEW_MEDICINE',
          payload: response.data
        }
      };
    })
    .catch((error) => {
      return {
        success: false,
        action: {},
        error: {
          errorMsg: error.response.data,
          errorMsgGeneral: error.message,
          errorStatus: error.request.status,
        }
      };
    });
}

export async function updateMedicine(updateMedicine) {

  return await api({
      url: `${pharmacy.update.action}${updateMedicine.id}`,
      method: pharmacy.update.method,
      data: updateMedicine
    })
    .then((response) => {
      return {
        success: true,
        action: {
          type: 'UPDATE_MEDICINE',
          payload: response.data
        }
      };

    })
    .catch((error) => {
      return {
        success: false,
        action: '',
        error: {
          errorMsg: error.response.data,
          errorMsgGeneral: error.message,
          errorStatus: error.request.status,
        }
      };
    });

}

export async function loadMedicine() {

  return await api({
    url: `${pharmacy.read.action}`,
    method: pharmacy.read.method,
  })
    .then(resposta => {
      return {
        success: true,
        type: 'LOAD_MEDICINE',
        payload: resposta.data
      };

    })
    .catch((error) => {
      return {
        success: false,
        action: '',
        error: {
          errorMsgGeneral: error.message,
          errorStatus: error.request.status,
        }
      };
    });
}

export async function selectMedicine(medicineId) {

  return await api({
    url: `${pharmacy.select.action}${medicineId}`,
    method: pharmacy.select.method,
  })
    .then((response) => {
      return {
        success: true,
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        success: false,
        action: '',
        error: {
          errorMsgGeneral: error.message,
          errorStatus: error.request.status,
        }
      };
    });

}

export async function deleteMedicine(medicineId) {

  return await api({
      url: `${apiUrl}${pharmacy.delete.action}${medicineId}`,
      method: pharmacy.delete.method,
    })
    .then((response) => {
      return {
        success: true,
        action: {
          type: 'DELETE_MEDICINE',
          payload: medicineId
        }
      };

    })

    /*if (resposta.status === 204) {
      return {
        success: true,
        action: {
          type: 'DELETE_MEDICINE',
          payload: medicineId
        }
      };*/
    .catch((error) => {
      return {
        success: false,
        action: '',
        error: {
          errorMsg: error.response.data,
          errorMsgGeneral: error.message,
          errorStatus: error.request.status,
        }
      };

    });

}