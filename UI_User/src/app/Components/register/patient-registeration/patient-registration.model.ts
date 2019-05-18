export interface PatientRegistration{
    accountId?: number;
    relation?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    DOB?: string;
    contact?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    pincode?: number;
    bloodGroup?: string;
    height?: number;
    weight?: number;
    emergencyContact?: string;
    alternateContact?: string;
}