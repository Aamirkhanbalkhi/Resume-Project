
// Ek hi Webpage pr submit karne k baad usi page pr redirect hone ka code


// Event handler code here
document.getElementById('personalDetailsForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission    

    // Once validation and data processing is complete, hide the current section
    document.getElementById('personalDetailSection').style.display = 'none';

    // Show the next section (e.g., Work Experience)
    document.getElementById('workExperienceSection').style.display = 'block';
});


// Back Button se Previous form pr jaane ka Code.
const backpersonal = document.getElementById('backpersonal');

backpersonal.addEventListener('click', function () {

    document.getElementById('workExperienceSection').style.display = 'block';

    document.getElementById('personalDetailSection').style.display = 'block';
});

// Work Experience se Project Experience ka form Redirect Hona

document.getElementById('workExpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Show the next section (e.g., Work Experience)
    document.getElementById('workExperienceSection').style.display = 'none';

    // Show the next section (e.g., Project Experience)
    document.getElementById('proExperienceSection').style.display = 'block';
});

// Back Button se Previous form pr jaane ka Code.
const backpersonal1 = document.getElementById('backpersonal1');

backpersonal1.addEventListener('click', function () {

    document.getElementById('proExperienceSection').style.display = 'block';

    document.getElementById('workExperienceSection').style.display = 'block';
});

// Project Experience se Education ka form Redirect Hona

document.getElementById('projectExpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Show the next section (e.g., Project Experience)
    document.getElementById('proExperienceSection').style.display = 'none';

    // Show the next section (e.g., Education Form)
    document.getElementById('EducationSection').style.display = 'block';
});

// Back Button se Previous form pr jaane ka Code.
const backpersonal2 = document.getElementById('backpersonal2');

backpersonal2.addEventListener('click', function () {

    document.getElementById('EducationSection').style.display = 'block';

    document.getElementById('proExperienceSection').style.display = 'block';
})

// Education se Skill Form pr Redirect Hona

document.getElementById('educationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Show the next section (e.g., Education Experience)
    document.getElementById('EducationSection').style.display = 'none';

    // Show the next Section (e.g., Skill Section)
    document.getElementById('skillSection').style.display = 'block';
});

// Back Button se Previous form pr jaane ka Code.
const backpersonal3 = document.getElementById('backpersonal3');

backpersonal3.addEventListener('click', function () {

    document.getElementById('skillSection').style.display = 'block';

    document.getElementById('EducationSection').style.display = 'block';
});

// Skill se Certificate/Awards form pr Redirect Hona

document.getElementById('skillForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Show the next section (e.g., Skill Experience)
    document.getElementById('skillSection').style.display = 'none';

    // Show the next section (e.g., Certificate Experience)
    document.getElementById('certificateSection').style.display = 'block';
});

// Back Button se Previous form pr jaane ka Code.
const backpersonal4 = document.getElementById('backpersonal4');

backpersonal4.addEventListener('click', function () {

    document.getElementById('certificateSection').style.display = 'block';

    document.getElementById('skillSection').style.display = 'block';
});

// Certificate/Awards se last Additional Info Pr redirect hona

document.getElementById('certificateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('certificateSection').style.display = 'none';

    // Show the next section (e.g., Additional Info)
    document.getElementById('additionalSection').style.display = 'block';
});

// Back Button se Previous form pr jaane ka Code.
const backpersonal5 = document.getElementById('backpersonal5');

backpersonal5.addEventListener('click', function () {

    document.getElementById('additionalSection').style.display = 'block';

    document.getElementById('certificateSection').style.display = 'block';
});


// Form K pages ko one by one Show Karne ka Code.

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.card');
    let currentSectionIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'block' : 'none';
        });
    }

    function handleNext() {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        }
    }

    function handleBack() {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            showSection(currentSectionIndex);
        }
    }

    const nextButtons = document.querySelectorAll('.btn-primary');
    const backButtons = document.querySelectorAll('.btn-secondary');

    nextButtons.forEach((button) => {
        button.addEventListener('click', handleNext);
    });

    backButtons.forEach((button) => {
        button.addEventListener('click', handleBack);
    });

    showSection(currentSectionIndex);
});


// Form Fill karne ka code:-

// Personal Code
document.addEventListener('DOMContentLoaded', function () {

    const personalDetailsForm = document.getElementById('personalDetailsForm');

    personalDetailsForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('fullName').value;
        const job = document.getElementById('jobTitle').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Create an object to store the form Data.

        const data = {
            name: name,
            job: job,
            phone: phone,
            email: email,
        };

        localStorage.setItem('persoanlData', JSON.stringify(data));     // Use 'personalData' key for personal details

        // Form fields ko clear karo

        personalDetailsForm.reset();

        // Next section ko display karo (e.g., Work Experience)
        document.getElementById('workExperienceSection').style.display = 'block';

    });
});

// WORK Experience Ka Code

document.addEventListener('DOMContentLoaded', function () {
    let sectionIndex = 1;

    // Load existing data from localStorage if any
    for (let i = 1; i <= localStorage.length; i++) {
        const key = localStorage.key(i - 1);
        if (key.startsWith('formData')) {
            const data = JSON.parse(localStorage.getItem(key));
            addNewSection(data);
        }
    }

    document.querySelector('.addmore').addEventListener('click', function () {
        sectionIndex++;
        addNewSection();
    });

    document.querySelector('.workExpForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const formData = [];

        // Collect data from all sections
        for (let i = 1; i <= sectionIndex; i++) {

            const jobTitle = document.querySelector(`#jobTitle${i}`).value;
            const companyName = document.querySelector(`#companyName${i}`).value;
            const location = document.querySelector(`#location${i}`).value;
            const employmentDates = document.querySelector(`#employmentDates${i}`).value;
            const description = document.querySelector(`#description${i}`).value;

            const data = {

                jobTitle: jobTitle,
                companyName: companyName,
                location: location,
                employmentDates: employmentDates,
                description: description
            };

            formData.push(data);

            // Store data in localStorage with a unique key for each section
            localStorage.setItem(`formData${i}`, JSON.stringify(data));
        }
    });
    // Function to Add a New Section.

    function addNewSection(data = null) {
        const newSection = document.createElement('div');
        newSection.classList.add('workExp');
        newSection.id = `workExp${sectionIndex}`;
        newSection.innerHTML = `<div class="form-group">
            <label for="jobTitle${sectionIndex}">Job Title</label>
            <input type="text" class="form-control" id="jobTitle${sectionIndex}" name="jobTitle" required />
        </div>     
        <div class="form-group">
            <label for="companyName${sectionIndex}">Company Name</label>
            <input type="text" class="form-control" id="companyName${sectionIndex}" name="companyName" required />
        </div> 
        <div class="form-group">
        <label for="location${sectionIndex}">Location</label>
        <input type="text" class="form-control" id="location${sectionIndex}" name="location" required />
    </div>
    <div class="form-group">
        <label for="employmentDates${sectionIndex}">Dates of Employment</label>
        <input type="text" class="form-control" id="employmentDates${sectionIndex}" name="employmentDates"
        placeholder="Month Year - Month Year" />
    </div>
    <div class="form-group">
        <label for="description${sectionIndex}">Description</label>
        <textarea class="form-control" id="description${sectionIndex}" name="description" rows="4"></textarea>
    </div>      
        `;

        // Set input value if data is provided
        if (data) {
            newSection.querySelector(`#jobTitle${sectionIndex}`).value = data.jobTitle;
            newSection.querySelector(`#companyName${sectionIndex}`).value = data.companyName;
            newSection.querySelector(`#location${sectionIndex}`).value = data.location;
            newSection.querySelector(`#employmentDates${sectionIndex}`).value = data.employmentDates;
            newSection.querySelector(`#description${sectionIndex}`).value = data.description;
        }

        // Create a Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.style.position = 'static';
        removeButton.style.marginLeft = '95%';
        removeButton.style.backgroundColor = 'white';
        removeButton.style.border = 'none';
        removeButton.style.fontWeight = 600;
        removeButton.style.fontSize = '20px';

        removeButton.addEventListener('click', function () {
            // Remove the work experience entry when the Remove button is clicked
            newSection.remove();
        });

        // Append the remove button to the new section
        newSection.insertBefore(removeButton, newSection.firstChild);

        // Reset the form fields after adding a new section                
        document.querySelector('.workExpForm').reset();

        // Dono Forms k Data Show
        document.querySelector('.workExpForm').appendChild(newSection);
    }
});


// PROJECT EXPERIENCES KA COde:-

document.addEventListener('DOMContentLoaded', function () {
    let projectIndex = 1;

    for (let i = 1; i <= localStorage.length; i++) {
        const key = localStorage.key(i - 1);
        if (key.startsWith('proData')) {
            const data = JSON.parse(localStorage.getItem(key));
            addNewProject(data);
        }
    }

    document.querySelector('.addPro').addEventListener('click', function () {
        projectIndex++;
        addNewProject();
    });

    document.querySelector('.projectExpForm').addEventListener('submit', function (event) {
        event.preventDefault();     //Prevent the form Submitting.

        const proData = [];

        // Collect data from all sections
        for (let i = 1; i <= projectIndex; i++) {

            const projectTitle = document.querySelector(`#projectTitle${i}`).value;
            const teamName = document.querySelector(`#teamName${i}`).value;
            const projectDuration = document.querySelector(`#projectDuration${i}`).value;
            const projectDescription = document.querySelector(`#projectDescription${i}`).value;

            const data = {

                projectTitle: projectTitle,
                teamName: teamName,
                projectDuration: projectDuration,
                projectDescription: projectDescription
            };

            proData.push(data);

            // Store data in localStorage with a unique key for each section
            localStorage.setItem(`proData${i}`, JSON.stringify(data));
        }
    });
    // Function to add a new Section

    function addNewProject(data = null) {
        const newSection = document.createElement('div');
        newSection.classList.add('projectExp');
        newSection.id = `projectExp${projectIndex}`;
        newSection.innerHTML = `<div class="form-group">
                    <label for="proprojectIndex}">Project Title</label>
                    <input type="text" class="form-control" id="projectTitle${projectIndex}" name="projectTitle"
                    required />
                    </div>
                    
                    <div class="form-group">
                    <label for="teamName${projectIndex}">Company/Team Name</label>
                    <input type="text" class="form-control" id="teamName${projectIndex}" name="teamName" required />
                    </div>
                    
                    <div class="form-group">
                    <label for="projectDuration${projectIndex}">Project Duration</label>
                    <input type="text" class="form-control" id="projectDuration${projectIndex}" name="projectDuration"
                    required />
                </div>

                <div class="form-group">
                    <label for="projectDescription${projectIndex}">Description</label>
                    <textarea class="form-control" id="projectDescription${projectIndex}" name="projectDescription"
                    rows="3" required></textarea>
                </div>
                `;

        // Set input value if data is provided
        if (data) {

            newSection.querySelector(`#projectTitle${projectIndex}`).value = data.projectTitle;
            newSection.querySelector(`#teamName${projectIndex}`).value = data.teamName;
            newSection.querySelector(`#projectDuration${projectIndex}`).value = data.projectDuration;
            newSection.querySelector(`#projectDescription${projectIndex}`).value = data.projectDescription;
        }

        // Create a Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.style.position = 'static';
        removeButton.style.marginLeft = '95%';
        removeButton.style.backgroundColor = 'white';
        removeButton.style.border = 'none';
        removeButton.style.fontWeight = 600;
        removeButton.style.fontSize = '20px';

        removeButton.addEventListener('click', function () {
            // Remove the work experience entry when the Remove button is clicked
            newSection.remove();
        });

        // Append the remove button to the new section
        newSection.insertBefore(removeButton, newSection.firstChild);

        // Reset the form fields after adding a new section        
        document.querySelector('.projectExpForm').reset();

        // Dono Forms k Data Show
        document.querySelector('.projectExpForm').appendChild(newSection);
    }
});


// EDUCATION ka Code

document.addEventListener('DOMContentLoaded', function () {
    let sectionIndex = 1;

    for (let i = 1; i <= localStorage.length; i++) {
        const key = localStorage.key(i - 1);
        if (key.startsWith('educateData')) {
            const data = JSON.parse(localStorage.getItem(key));
            addNewSection(data);
        }
    }

    document.querySelector('.addEducation').addEventListener('click', function () {
        sectionIndex++;
        addNewSection();
    });

    document.querySelector('.educationForm').addEventListener('submit', function (event) {
        event.preventDefault();     //Prevent the form Submitting.

        const education = [];

        // Collect data from all sections
        for (let i = 1; i <= sectionIndex; i++) {

            const degreeTitle = document.querySelector(`#degreeTitle${i}`).value;
            const universityName = document.querySelector(`#universityName${i}`).value;
            const graduationYear = document.querySelector(`#graduationYear${i}`).value;

            // Cretae an Object to store data.
            const data = {

                degreeTitle: degreeTitle,
                universityName: universityName,
                graduationYear: graduationYear,
            };

            education.push(data);

            // Store data in localStorage with a unique key for each section
            localStorage.setItem(`educateData${i}`, JSON.stringify(data));
        }
    });
    // Function to add a new Section

    function addNewSection(data = null) {
        const newSection = document.createElement('div');
        newSection.classList.add('educationentry');
        newSection.id = `educationentry${sectionIndex}`;
        newSection.innerHTML = `<div class="form-group">
                            <label for="degreeTitle${sectionIndex}">Degree Title</label>
                            <input type="text" class="form-control" id="degreeTitle${sectionIndex}" name="degreeTitle" required />
                        </div>
                    
                        <div class="form-group">
                            <label for="universityName${sectionIndex}">University Name</label>
                            <input type="text" class="form-control" id="universityName${sectionIndex}" name="universityName"
                            required />
                        </div>
                    
                        <div class="form-group">
                            <label for="graduationYear${sectionIndex}">Graduation Year</label>
                            <input type="text" class="form-control" id="graduationYear${sectionIndex}" name="graduationYear"
                            required />
                        </div>                
                            `;

        // Set input value if data is provided
        if (data) {

            newSection.querySelector(`#degreeTitle${sectionIndex}`).value = data.degreeTitle;
            newSection.querySelector(`#universityName${sectionIndex}`).value = data.universityName;
            newSection.querySelector(`#graduationYear${sectionIndex}`).value = data.graduationYear;
        }

        // Create a Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.style.position = 'static';
        removeButton.style.marginLeft = '95%';
        removeButton.style.backgroundColor = 'white';
        removeButton.style.border = 'none';
        removeButton.style.fontWeight = 600;
        removeButton.style.fontSize = '20px';

        removeButton.addEventListener('click', function () {
            // Remove the work experience entry when the Remove button is clicked
            newSection.remove();
        });

        // Append the remove button to the new section
        newSection.insertBefore(removeButton, newSection.firstChild);

        // Reset the form fields after adding a new section        
        document.querySelector('.educationForm').reset();

        // Dono Forms k Data Show
        document.querySelector('.educationForm').appendChild(newSection);
    }
});


// SKILLS Ka Code

document.addEventListener('DOMContentLoaded', function () {
    let sectionIndex = 1;

    for (let i = 1; i <= localStorage.length; i++) {
        const key = localStorage.key(i - 1);
        if (key.startsWith('skillData')) {
            const data = JSON.parse(localStorage.getItem(key));

            if (data && data.skipDisplay) {
                continue;
            }
            addNewSection(data);
        }
    }

    document.querySelector('.addSkill').addEventListener('click', function () {
        sectionIndex++;
        addNewSection();
    });

    document.querySelector('.skillForm').addEventListener('submit', function (event) {
        event.preventDefault();     //Prevent the form Submitting.

        const skillForm = [];

        // Collect data from all sections
        for (let i = 1; i <= sectionIndex; i++) {

            const skillName = document.querySelector(`#skillName${i}`).value;
            const experience = document.querySelector(`#experience${i}`).value;

            // Cretae an Object to store data.
            const data = {

                skillName: skillName,
                experience: experience,
            };

            skillForm.push(data);

            // Store data in localStorage with a unique key for each section
            localStorage.setItem(`skillData${i}`, JSON.stringify(data));
        }
    });
    // Function to add a new Section

    function addNewSection(data = null) {
        const newSection = document.createElement('div');
        newSection.classList.add('skillentry');
        newSection.id = `skillentry${sectionIndex}`;
        newSection.innerHTML = `<div class="form-row">
                        <div class="form-group col-md-6">
                <label for="skillName${sectionIndex}">Skill Name</label>
                <input type="text" class="form-control" id="skillName${sectionIndex}" required />
                </div>
                    
                <div class="form-group col-md-6">
                    <label for="experience${sectionIndex}">Years of Experience</label>
                    <input type="text" class="form-control" id="experience${sectionIndex}"
                    required />
                </div></div>                             
                    `;

        // Set input value if data is provided
        if (data) {

            newSection.querySelector(`#skillName${sectionIndex}`).value = data.skillName;
            newSection.querySelector(`#experience${sectionIndex}`).value = data.experience;
        }

        // Create a Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.style.position = 'static';
        removeButton.style.marginLeft = '95%';
        removeButton.style.backgroundColor = 'white';
        removeButton.style.border = 'none';
        removeButton.style.fontWeight = 600;
        removeButton.style.fontSize = '20px';

        removeButton.addEventListener('click', function () {
            // Remove the work experience entry when the Remove button is clicked
            newSection.remove();
        });

        // Append the remove button to the new section        
        newSection.insertBefore(removeButton, newSection.firstChild);

        // Reset the form fields after adding a new section        
        document.querySelector('.skillForm').reset();
        // sectionIndex.reset();

        if (data) {
            data.skipDisplay = true;
        }
        // Dono Forms k Data Show
        document.querySelector('.skillForm').appendChild(newSection);
    }
});


// CERTIFICATE/AWARDS ka Code.

document.addEventListener('DOMContentLoaded', function () {
    let sectionIndex = 1;

    for (let i = 1; i <= localStorage.length; i++) {
        const key = localStorage.key(i - 1);
        if (key.startsWith('certificateData')) {
            const data = JSON.parse(localStorage.getItem(key));
            addNewSection(data);
        }
    }

    document.querySelector('.addCertificate').addEventListener('click', function () {
        sectionIndex++;
        addNewSection();
    });

    document.querySelector('.certificateForm').addEventListener('submit', function (event) {
        event.preventDefault();     //Prevent the form Submitting.

        const certificate = [];

        // Collect data from all sections
        for (let i = 1; i <= sectionIndex; i++) {

            const certTitle = document.querySelector(`#certTitle${i}`).value;
            const certYear = document.querySelector(`#certYear${i}`).value;
            const certDesc = document.querySelector(`#certDesc${i}`).value;

            // Cretae an Object to store data.
            const data = {

                certTitle: certTitle,
                certYear: certYear,
                certDesc: certDesc,
            };

            certificate.push(data);

            // Store data in localStorage with a unique key for each section
            localStorage.setItem(`certificateData${i}`, JSON.stringify(data));
        }
    });

    // Function to add a new Section

    function addNewSection(data = null) {
        const newSection = document.createElement('div');
        newSection.classList.add('certificateEntry');
        newSection.id = `certificateEntry${sectionIndex}`;
        newSection.innerHTML = `<div class="form-group">
                    <label for="certTitle${sectionIndex}">Title</label>
                    <input type="text" class="form-control" id="certTitle${sectionIndex}" name="certTitle" required />
                    </div>
                    
                            <div class="form-group">
                            <label for="certYear${sectionIndex}">Year Received</label>
                            <input type="text" class="form-control" id="certYear${sectionIndex}" name="certYear" required />
                            </div>
                    
                            <div class="form-group">
                            <label for="certDesc${sectionIndex}">Description</label>
                            <textarea class="form-control" id="certDesc${sectionIndex}" name="certDesc" rows="3"
                            required></textarea>
                            </div>
                            `;

        // Create a Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.style.position = 'static';
        removeButton.style.marginLeft = '95%';
        removeButton.style.backgroundColor = 'white';
        removeButton.style.border = 'none';
        removeButton.style.fontWeight = 600;
        removeButton.style.fontSize = '20px';


        // Set input value if data is provided
        if (data) {

            newSection.querySelector(`#certTitle${sectionIndex}`).value = data.certTitle;
            newSection.querySelector(`#certYear${sectionIndex}`).value = data.certYear;
            newSection.querySelector(`#certDesc${sectionIndex}`).value = data.certDesc;
        }

        removeButton.addEventListener('click', function () {
            // Remove the work experience entry when the Remove button is clicked
            newSection.remove();
        });

        // Append the remove button to the new section
        newSection.insertBefore(removeButton, newSection.firstChild);

        // Reset the form fields after adding a new section        
        document.querySelector('.certificateForm').reset();

        // Dono Forms k Data Show
        document.querySelector('.certificateForm').appendChild(newSection);
    }
});


// ADDITIONAL INformation ka code.

document.addEventListener('DOMContentLoaded', function () {

    const additionalInfoForm = document.getElementById('additionalInfoForm');

    additionalInfoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // additionalInfoForm ki value ko get karna.

        const fatherName = document.getElementById('fatherName').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const marital = document.getElementById('marital').value;
        const religion = document.getElementById('religion').value;
        const languages_known = document.getElementById('languages_known').value;
        const Description = document.getElementById('Description').value;
        const signature = document.getElementById('signature').value;

        // Create an object to store form data.

        const data = {

            fatherName: fatherName,
            dob: dob,
            gender: gender,
            marital: marital,
            religion: religion,
            languages_known: languages_known,
            Description: Description,
            signature: signature
        };

        // use addiinfo key to store data in localstorage

        localStorage.setItem('addiinfo', JSON.stringify(data));

        additionalInfoForm.reset();

        window.location.href = 'index.html';
    });
});
