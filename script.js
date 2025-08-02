const form = document.getElementById('jobForm');
const jobList = document.getElementById('jobList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('jobTitle').value;
  const company = document.getElementById('company').value;
  const description = document.getElementById('description').value;

  const jobItem = document.createElement('li');
  jobItem.innerHTML = <strong>${title}</strong> at <em>${company}</em><br>${description};

  jobList.appendChild(jobItem);

  form.reset();
} ) ;