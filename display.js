
// Personal Code
document.addEventListener('DOMContentLoaded', function () {

    const userDataDisplay = document.getElementById('userDataDisplay');
    const namedisplay = document.getElementById('displayName');
    const jobdisplay = document.getElementById('displayJob');
    const emaildisplay = document.getElementById('displayEmail');
    const phonedisplay = document.getElementById('displayPhone');

    // localStorage se Data ko retrive Karo
    const userData = JSON.parse(localStorage.getItem('persoanlData'));

    if (userData) {

        // Data ko Display Karo

        namedisplay.textContent = userData.name;
        jobdisplay.textContent = userData.job;
        emaildisplay.textContent = userData.email;
        phonedisplay.textContent = userData.phone;
    }
    else {
        userDataDisplay.innerHTML = '<p> Data Not Available</p>';
    }
});

// WORK EXPERIENCE KA CODE
document.addEventListener('DOMContentLoaded', function () {
    // Function to load data from localStorage
    function loadData() {
        const workData = document.getElementById('workData');

        for (let i = 1; i <= localStorage.length; i++) {
            const key = localStorage.key(i - 1);
            if (key.startsWith('formData')) {
                const data = JSON.parse(localStorage.getItem(key));
                displayData(data, workData);
            }
        }
    }
    // Function to display data in the separate cards

    function displayData(data, container) {
        const cards = document.createElement('div');
        cards.classList.add('card', 'mb-3');

        // Create Card Body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Populate card body with data

        const jobTitle = document.createElement('h5');
        jobTitle.classList.add('card-title');
        jobTitle.textContent = data.jobTitle;

        const companyName = document.createElement('p');
        companyName.classList.add('card-text');
        companyName.innerHTML = `<strong>${data.companyName}</strong>`;

        const employmentDates = document.createElement('p');
        employmentDates.classList.add('card-text');
        employmentDates.textContent = data.employmentDates;

        const description = document.createElement('ul');
        description.classList.add('card-text');

        const li = document.createElement('li');
        li.textContent = data.description;
        description.appendChild(li);

        // Append elements to card body
        cardBody.appendChild(jobTitle);
        cardBody.appendChild(companyName);
        cardBody.appendChild(employmentDates);
        cardBody.appendChild(description);

        // Append card body to card
        cards.appendChild(cardBody);

        // Append card body to card
        container.appendChild(cards);
    }

    // Call the function to load and display data from localStorage
    loadData();
});

// Project Experience ka Code
document.addEventListener('DOMContentLoaded', function () {
    function showData() {

        const projectData = document.getElementById('projectData');

        for (let i = 1; i <= localStorage.length; i++) {
            const key = localStorage.key(i - 1);
            if (key.startsWith('proData')) {
                const data = JSON.parse(localStorage.getItem(key));
                displayData(data, projectData);
            }
        }
    }

    // Function to display data in separate cards.

    function displayData(data, container) {

        const cards = document.createElement('div');
        cards.classList.add('card', 'mb-3');

        // create card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Populate card body with data
        const projectTitle = document.createElement('h5');
        projectTitle.classList.add('card-title');
        projectTitle.textContent = data.projectTitle;

        const teamName = document.createElement('p');
        teamName.classList.add('card-text');
        teamName.innerHTML = `<strong>${data.teamName}</strong>`;

        const projectDuration = document.createElement('p');
        projectDuration.classList.add('card-text');
        projectDuration.textContent = data.projectDuration;

        const projectDescription = document.createElement('ul');
        projectDescription.classList.add('card-text');
        const li = document.createElement('li');
        li.textContent = data.projectDescription;
        projectDescription.appendChild(li);

        // Append element to card body
        cardBody.appendChild(projectTitle);
        cardBody.appendChild(teamName);
        cardBody.appendChild(projectDuration);
        cardBody.appendChild(projectDescription);

        // Append card body to card
        cards.appendChild(cardBody);

        // Append card body to card
        container.appendChild(cards);
    }

    // Call the function to load and display data from localStorage
    showData();
});

// EDUCATION ka Code
document.addEventListener('DOMContentLoaded', function () {
    function showData() {

        const educationData = document.getElementById('educationData');

        for (let i = 1; i <= localStorage.length; i++) {
            const key = localStorage.key(i - 1);
            if (key.startsWith('educateData')) {
                const data = JSON.parse(localStorage.getItem(key));
                displayData(data, educationData);
            }
        }
    }

    function displayData(data, container) {

        // Create a new card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Create card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create a table element
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered');

        // Create a table row (thead)
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');

        // Create table cells (th) for table header
        const th1 = document.createElement('th');
        th1.textContent = 'Degree';

        const th2 = document.createElement('th');
        th2.textContent = 'University';

        const th3 = document.createElement('th');
        th3.textContent = 'Graduation Year';

        // // Append table header cells to the row
        table.appendChild(th1);
        table.appendChild(th2);
        table.appendChild(th3);

        // Append the row to the table header (thead)
        thead.appendChild(tr);

        // Create a table body (tbody)
        const tbody = document.createElement('tbody');

        // Create a table row for data
        const dataRow = document.createElement('tr');

        // Create table cells (td) for data
        const degreeTitleCell = document.createElement('td');
        degreeTitleCell.textContent = data.degreeTitle;

        const universityNameCell = document.createElement('td');
        universityNameCell.textContent = data.universityName;

        const graduationYearCell = document.createElement('td');
        graduationYearCell.textContent = data.graduationYear;

        // Append data cells to the data row
        dataRow.appendChild(degreeTitleCell);
        dataRow.appendChild(universityNameCell);
        dataRow.appendChild(graduationYearCell);

        // Append the data row to the table body
        tbody.appendChild(dataRow);

        // Append the table header (thead) and body (tbody) to the table        
        table.appendChild(tbody);

        // Append the table to the card body
        cardBody.appendChild(table);

        // Append card body to card
        card.appendChild(cardBody);

        // Append card to the container (e.g., workData)
        container.appendChild(card);
    }
    showData();
});

// Skill and Experience ka Code
document.addEventListener('DOMContentLoaded', function () {
    function showData() {

        const skillsData = document.getElementById('skillsData');
        for (let i = 0; i <= localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('skillData')) {
                const data = JSON.parse(localStorage.getItem(key));
                displayData(data, skillsData);
            }
        }
    }

    function displayData(data, container) {

        const section = document.createElement('div');
        section.classList.add('section');

        const skilltags = document.createElement('div');
        skilltags.classList.add('skills-tags');

        const skillcontainer = document.createElement('span');
        skillcontainer.classList.add('span');

        const skillName = document.createElement('span');
        skillName.classList.add('badge', 'badge-primary');
        skillName.textContent = data.skillName;

        const experience = document.createElement('span');
        experience.classList.add('badge', 'badge-primary');
        experience.textContent = data.experience;

        skillcontainer.appendChild(skillName);
        skillcontainer.appendChild(experience);

        section.appendChild(skilltags);
        skilltags.appendChild(skillcontainer);

        container.appendChild(skilltags);
    }
    showData();
});

// CERTIFICATION/AWARDS KA Code.
document.addEventListener('DOMContentLoaded', function () {
    function showData() {

        const certificateData = document.getElementById('certificatesData');
        for (let i = 1; i <= localStorage.length; i++) {

            const key = localStorage.key(i - 1);
            if (key.startsWith('certificateData')) {
                const data = JSON.parse(localStorage.getItem(key));
                displayData(data, certificateData);
            }
        }
    }
    function displayData(data, container) {

        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const certificatetitle = document.createElement('h5');
        certificatetitle.classList.add('card-title');
        certificatetitle.textContent = data.certTitle;

        const certificateyear = document.createElement('p');
        certificateyear.classList.add('card-text');
        certificateyear.textContent = data.certYear;

        const certidesc = document.createElement('p');
        certidesc.classList.add('card-text');
        certidesc.textContent = data.certDesc;

        cardBody.appendChild(certificatetitle);
        cardBody.appendChild(certificateyear);
        cardBody.appendChild(certidesc);

        card.appendChild(cardBody);

        container.appendChild(card);
    }
    showData();
});


// ADDITIONAL INFO ka code.
document.addEventListener('DOMContentLoaded', function () {

    const fname = document.getElementById('fname');
    const dob = document.getElementById('dob');
    const gender = document.getElementById('gender');
    const religion = document.getElementById('religion');
    const marital = document.getElementById('marital');
    const languages_known = document.getElementById('languages_known');
    const Description = document.getElementById('Description');
    const signature = document.getElementById('signature');

    // localstorage se data ko retrive karo

    const additionalInfoForm = JSON.parse(localStorage.getItem('addiinfo'));

    if (additionalInfoForm) {

        fname.textContent = additionalInfoForm.fatherName,
            dob.textContent = additionalInfoForm.dob,
            gender.textContent = additionalInfoForm.gender,
            religion.textContent = additionalInfoForm.religion,
            marital.textContent = additionalInfoForm.marital,
            languages_known.textContent = additionalInfoForm.languages_known,
            Description.textContent = additionalInfoForm.Description,
            signature.textContent = additionalInfoForm.signature
    }
});

// Print this Page.

const printbutton = document.getElementById('printbutton');
printbutton.addEventListener('click', function () {

    window.print();
});
