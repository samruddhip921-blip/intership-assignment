function login() {
  const name = document.getElementById('username').value.trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  document.getElementById('auth-container').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';

  document.getElementById('internName').textContent = name;
  document.getElementById('referralCode').textContent = name.toLowerCase().replace(/\s+/g, '') + "2025";

  // Simulate backend call
  fetchTotalDonations(name).then(amount => {
    document.getElementById('donationAmount').textContent = amount;
  });
}

// Mock backend call
function fetchTotalDonations(name) {
  return new Promise(resolve => {
    // Simulate delay
    setTimeout(() => {
      // Just returning a random number for demo
      const donation = Math.floor(Math.random() * 1500);
      resolve(donation);
    }, 500);
  });
}
