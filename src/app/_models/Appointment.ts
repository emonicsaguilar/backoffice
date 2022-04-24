export interface AppointmentAttributes {
    name: string;
    email: string;
    date: string;
    cancelledAt?: string;
} 

export interface Appointment {
    _id?: string;
    name: string;
    email: string;
    cancelledAt?: string;
    date: string;
}

export interface NewAppointment {
    name: string;
    email: string;
    date: string;
    cancelledAt?: string;
}

export default Appointment;
