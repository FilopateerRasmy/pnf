export interface ILogin {
  userId: string;
  roleId: string;
  roleName: string;
  dateOfHire: string;
  token: string;
  lastModifiedDate: string;
  personalInformation:IPersonalInformation ;
  businessInformation: IBussinessInformation;
  hr:IHr;
  departmentIds: string[]
}

export interface IHr {
  type: string;
  salary: number;
  hourly: number;
  documents: [
    {
      name: string;
      documentUrl: string
    }
  ]
}

export interface IPersonalInformation {

    personalEmail: string;
    personalPhone: string;
    personalCellPhone: string;
    dateOfBirth: string;
    avatarPhotoUrl: string;
    streetAddress: string;
    floorNumber: string;
    apartmentNumber: string;
    city: string;
    state: string;
    zipCode: string;
    country: string

}

export interface IBussinessInformation {
  firstName: string;
    middleName: string;
    lastName: string;
    businessEmail: string;
    businessPhone: string;
    gender: string;
    title: string;
    extension: string;
    fax: string
}
