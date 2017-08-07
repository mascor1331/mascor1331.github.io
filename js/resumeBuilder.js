/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
    "jobs": [{
        "employer": "NYPIUA",
        "title": "IT Intern",
        "location": "100 William Street, New York, USA",
        "dates": "15 May to 1 September 2017",
        "description": "Workload automation using BMC Control M, Web services testing using SOAPUI and RestAssured Java libraries"
    },
        {
            "employer": "Cubestack Solutions Private Limited (Rytangle Inc.)",
            "title": "Software Engineer",
            "location": "Electronic City, Bengaluru, India",
            "dates": "January 2016 to June 2016",
            "description": "Developed mobile optimized feedback forms for retail and food industry using AngularJS, NodeJS, MongoDB, ExpressJS etc."
        },
        {
            "employer": "Tata Consultancy Services Ltd.",
            "title": "Assistant Software Engineer",
            "location": "Mumbai, Maharashtra, India",
            "dates": "August 2014 to December 2015",
            "description": "Quality Assurance, developed new features for a Mobile Wallet application in JAVA"
        }]
};
var projects = {
    "projects": [{
        "title": "Web services testing (NYPIUA)",
        "dates": "15 May to 6 June 2017",
        "description": "rest and soap web services testing usin SOAPUI"
    },{
        "title": "Stocky App (Software Engineering - Web Applications Course at Rutgers University)",
        "dates": "January to May 2017",
        "description": "A web applicatiion which predicts the stock prices using Bayesian, Artificial Neural Networks and Support Vector Machine techniques "
    },{
        "title": "CRM Software Evaluation (Enterprise Software Architecture Course at Rutgers University) ",
        "dates": "January to May 2017",
        "description": "Research, analysis and recommendation of a CRM system among Salesforce CRM and Sugar CRM for an assumed set of requirements "
    }
        ,{
            "title": "Lipsmacking (Software Engineering Course at Rutgers University)",
            "dates": "September to December 2016",
            "description": "A restaurant automation application - Features included choosing tables, display of food menu on a tablet, ordering and assigning the orders to the chefs and waiters"
        }]
};
var bio = {
    "name": "Mahesh Hariharasubramanian",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume",
    "biopic": "images/fry.jpg",
    "contacts":{"location":"Harrison, NJ, USA",
        "Mobile":"8482528677",
        "Email":"mahesh.h@rutgers.edu",
        "GitHub":"mascor1331",
        "LinkedIn":"https://www.linkedin.com/in/mahesh13/"
    },
    "welcomeMessage": "Hello!",
    "skills": ["A", "B"],
    "biopic": "url",
    "display": function(){}
};
var education = {
    "schools": [{
        "name": "Rutgers University",
        "location": "New Brunswick",
        "degree dates": "September 2016 - May 2018",
        "url": "http://www.rutgers.edu",
        "majors": ["Electrical and Computer Engineering"],
        "degree":"Masters"
    },{
        "name": "Ramrao Adik Institute of Technology",
        "location": "Nerul, Navi Mumbai, Maharashtra, India",
        "degree dates": "August 2010 - August 2014",
        "url": "http://www.rait.ac.in",
        "majors": ["Electronics Engineering"],
        "degree":"Bachelors"
    }],
    "onlineCourses": [{
        "title": "Intro to JS",
        "school": "Udacity",
        "dates": "Summer 2017",
        "url": "http://www.udacity.com"
    }]
};

$(document).ready(function(){
//for adding #header
    $('#header').prepend(HTMLheaderName+'<hr>');

//internationalizeButton
// $('#main').prepend(internationalizeButton);

//jobs
// for(job in work.jobs){
    for(var i=0; i< work.jobs.length;i++){

        // HTMLworkStart
        $('#workExperience').append(workComp(i));
    }

    //maps
    $('#mapDiv').append(googleMap);

//projects
    for(var i=0; i< projects.projects.length;i++){

        $('#projects').append(projects.display(i));
    }

//#2 education section
/*contacts after name and formatting
hr after name
add education and online section


*/

for(var i=0; i< education.schools.length; i++){
    $('#education').append(addSchool(education.schools[i]));
}
    $('#education').append('<h3>Online Classes</h3>');

    for(var i=0; i< education.onlineCourses.length; i++){
        $('#education').append(addOnlineCourse(education.onlineCourses[i]));
    }


//show all contact medias apart from location and mobile number
    for(contact in bio.contacts){
        if(!(contact=="location" || contact=="Mobile")){
            $('#footerContacts').append(generateContactListElement(contact,bio.contacts[contact]));
            $('#topContacts').append(generateContactListElement(contact,bio.contacts[contact]));
        }
    }

});

//inName
function inName(fullName) {
    var nameArray = fullName.split(" ");
    var fName = nameArray[0].charAt(0).toUpperCase()+ nameArray[0].slice(1).toLowerCase();
    var lName = nameArray[1].toUpperCase();
    return fName+" "+lName;

}
