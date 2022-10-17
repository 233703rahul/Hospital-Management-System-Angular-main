import { AppointmentData, PatientData, DoctorData } from './../models/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  patientData: PatientData[] = this.GetExampleJSON().patientRecords;
  doctorData: DoctorData[] = this.GetExampleJSON().doctorRecords;
  appointmentData:AppointmentData[] = this.GetExampleJSON().appointmentRecords;

  GetExampleJSON() {
    const exampleJSON = {
      patientRecords: [
        { id: 1, firstName: 'Abhijith', lastName: 'PU', insurance: '3323', address: 'abc address', phoneNumber: '2423423442' },
        { id: 2, firstName: 'Abhijith ', lastName: 'R', insurance: '3223', address: 'abc address', phoneNumber: '2423423442' },
        { id: 3, firstName: 'Suhail', lastName: 'Ahmed', insurance: '24302', address: 'abc address', phoneNumber: '2423423442' },
        { id: 4, firstName: 'Pooja', lastName: 'Beti', insurance: '210427', address: 'abc address', phoneNumber: '2423423442' },
        { id: 5, firstName: 'Lakshmipriya', lastName: 'V', insurance: '238989', address: 'abc address', phoneNumber: '2423423442' },
        { id: 6, firstName: 'Alfy', lastName: 'NA', insurance: '12123', address: 'abc address', phoneNumber: '2423423442' }
      ],
      appointmentRecords: [
        { id: 1, PatientName: 'Abhijith', DoctorName: 'Praphul', Disease: 'Nervous Disorder', Date: 'abc address' },
        { id: 2, PatientName: 'Vasavi', DoctorName: 'Chandhini', Disease: 'Cold', Date: 'abc address' },
        { id: 3, PatientName: 'Lakshmi priya', DoctorName: 'Irene', Disease: 'Hairfall', Date: 'abc address' },
        { id: 4, PatientName: 'Suahil', DoctorName: 'Praphul', Disease: 'Hand Fracture', Date: 'abc address' }
      ],
      doctorRecords: [
        { id: 1, firstName: 'DR.Praphul', lastName: 'R', insurance: '911', address: 'abc address', phoneNumber: '2423423442' },
        { id: 2, firstName: 'DR.Chandhini', lastName: 'B', insurance: '3323', address: 'abc address', phoneNumber: '2423423442' }
      ]
    };
    return exampleJSON;
  }
  

  GetPatientDatas() {
    return this.patientData;
  }
  AddPatient(newPatient: PatientData) {
    this.patientData.push(newPatient);
  }
  GetDoctorDatas() {
    return this.doctorData;
  }
  AddDoctor(newDoctor: DoctorData) {
    this.doctorData.push(newDoctor);
  }

  GetAppointmentDatas() {
    return this.appointmentData;
  }
  AddAppointment(newAppointment: AppointmentData) {
    this.appointmentData.push(newAppointment);
  }
}
