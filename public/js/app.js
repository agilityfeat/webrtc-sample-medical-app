/*
This code was developed by @ArinSime and AgilityFeat for an O'Reilly video course on WebRTC basics.  

You are welcome to use it at your own risk as starter code for your applications, 
but please be aware that this is not a complete code example with all the necessary 
security and privacy considerations implemented that a production app would require.  

It is for educational purposes only, and any other use is done at your own risk.
*/

//App.js:  This file contains the code necessary for basic flow of our application

//Variable declarations for the high level screens of our single page app
var landingPageDiv = document.querySelector("#landingPage");
var patientEntryDiv = document.querySelector("#patientEntry");
var doctorSignupDiv = document.querySelector("#doctorSignup");
var videoPageDiv = document.querySelector("#videoPage");

//Variable declarations for other controls used on the signup pages and necessary for app flow
var enterAsPatient = document.querySelector("#enterAsPatient");
var requestDoctor = document.querySelector("#requestDoctor");
var requestDoctorForm = document.querySelector("#requestDoctorForm");
var waitingForDoctor = document.querySelector("#waitingForDoctor");
var waitingForDoctorProgress = document.querySelector("#waitingForDoctorProgress");
var doctorSignupForm = document.querySelector("#doctorSignupForm");
var doctorSignupButton = document.querySelector("#doctorSignupButton");
var waitingForPatient = document.querySelector("#waitingForPatient");
var doctorListing = document.querySelector("#doctorListing");
var callDoctor = document.querySelector("#callDoctor");
var enterAsDoctor = document.querySelector("#enterAsDoctor");

//Enter the application as a patient and toggle the div's
enterAsPatient.addEventListener('click', function(ev){
	landingPageDiv.style.display = 'none';
	patientEntryDiv.style.display = 'block';
	doctorSignupDiv.style.display = 'none';
	videoPageDiv.style.display = 'none';
	
	requestDoctorForm.style.display = 'block';
	waitingForDoctor.style.display = 'none';
	doctorListing.style.display = 'none';
	ev.preventDefault();
}, false);

//For the patient after they enter their basic information
//They will need to wait for a doctor to arrive at this point
//Signaling code will trigger an update to this view once
//a doctor has arrived
requestDoctor.addEventListener('click', function(ev){
	requestDoctorForm.style.display = 'none';
	waitingForDoctor.style.display = 'block';
	doctorListing.style.display = 'none';
	ev.preventDefault();
}, false);

//This code should be removed, it is only for clickable prototype purposes
//This allows you to click on the patient progress bar and advance to the 
//video screen without a doctor.
waitingForDoctorProgress.addEventListener('click', function(ev){
	requestDoctorForm.style.display = 'none';
	waitingForDoctor.style.display = 'none';
	doctorListing.style.display = 'block';
	ev.preventDefault();
}, false);

//Enter the application as a doctor and progress to the sign up form
enterAsDoctor.addEventListener('click', function(ev){
	landingPageDiv.style.display = 'none';
	patientEntryDiv.style.display = 'none';
	doctorSignupDiv.style.display = 'block';
	videoPageDiv.style.display = 'none';
	
	doctorSignupForm.style.display = 'block';
	waitingForPatient.style.display = 'none';
	ev.preventDefault();
}, false);

//Allows the doctor to "sign up" by entering their name and speciality
doctorSignupButton.addEventListener('click', function(ev){
	doctorSignupForm.style.display = 'none';
	waitingForPatient.style.display = 'block';
	ev.preventDefault();
}, false);

//Once a doctor has arrived on the doctor listing view,
//a patient calls them from this button
callDoctor.addEventListener('click', function(ev){
	landingPageDiv.style.display = 'none';
	patientEntryDiv.style.display = 'none';
	videoPageDiv.style.display = 'block';
	ev.preventDefault();
}, false);

