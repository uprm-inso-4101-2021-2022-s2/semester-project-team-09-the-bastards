sig User {
   has: one Person
	
 }{one Patient || one Specialist}
sig Person {
}{
    one this.~has
}
// Ensure that A person cannot have more than one user
// Also make possible the fact that a person can exist without User,
// but not viceversa 
// --Code here--

sig Medic { is: Specialist}

sig Secretary { is: Specialist}

sig Specialist { parent: User, reserves: set Reservation}{ one Secretary one Medic}

sig Patient { parent: one User,  appoints_a: Appointment}
fact { all d: Specialist.parent, o: Patient.parent | o != d }

sig Reservation { holds: set Appointment }
sig Appointment {}{
    one this.~holds
}

fact SpecialistCreatesReservation {
	Reservation in Specialist.reserves
}

fact AppointmentCanOnlyExistIfReservationExist {
	Appointment in Reservation.holds
}

run {} for 17 but exactly 3 Person, 3 User, 2 Patient, 3 Specialist, 4 Reservation, 2 Appointment
