// Fetch data from the API
fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(data => displayUsers(data.results));

// Function to display users in the list
function displayUsers(users) {
  const userList = document.querySelector('.user-list');

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.textContent = user.name.first + ' ' + user.name.last;

    userDiv.addEventListener('click', () => {
      displayUserDetails(user);
    });

    userList.appendChild(userDiv);
  });
}

// Function to display user details
function displayUserDetails(user) {
  const userDetailsDiv = document.querySelector('.user-details');
  userDetailsDiv.innerHTML = '';

  const userImg = document.createElement('img');
  userImg.src = user.picture.large;

  const userName = document.createElement('h2');
  userName.textContent = user.name.first + ' ' + user.name.last;

  const userEmail = document.createElement('p');
  userEmail.textContent = user.email;

  userDetailsDiv.appendChild(userImg);
  userDetailsDiv.appendChild(userName);
  userDetailsDiv.appendChild(userEmail);

  userDetailsDiv.style.display = 'block';
}