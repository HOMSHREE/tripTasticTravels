  // Banner script
  const places = ["India", "United States", "France", "Germany", "Australia", "Japan"];
  let placeIndex = 0;
  const placeNameElement = document.getElementById("place-name");

  setInterval(() => {
      placeIndex = (placeIndex + 1) % places.length;
      placeNameElement.textContent = "Visit " + places[placeIndex];
  }, 2000); 


//   bookingForm
  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const destination = document.getElementById("destination").value;
    const persons = document.getElementById("persons").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value;

    if (destination && persons && startDate && endDate && description.length >= 50) {
        alert("Booking successful!");
    } else {
        alert("Please fill out all fields properly.");
    }
});

// Store users in an array
const users = [
    { email: "default@example.com", password: "Strong@123" } // Default user
];

// Function to open and close popups
function openRegister() {
    document.getElementById("register").style.display = "block";
}

function closeRegister() {
    document.getElementById("register").style.display = "none";
}

function openLogin() {
    document.getElementById("login").style.display = "block";
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
}

// Registration validation and submission
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.getElementById("gender").value;

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const contactRegex = /^\d{10}$/;

    // Validation checks
    if (!fullName) return alert("Please enter your full name.");
    if (!contact || !contactRegex.test(contact)) return alert("Please enter a valid 10-digit contact number.");
    if (!dob) return alert("Please enter your date of birth.");
    if (!email || !emailRegex.test(email)) return alert("Please enter a valid email address.");
    if (!password || !passwordRegex.test(password)) return alert("Password must be at least 8 characters, contain at least one letter, one number, and one special character.");
    if (password !== confirmPassword) return alert("Passwords do not match.");
    if (!gender) return alert("Please select your gender.");

    // Save new user data
    users.push({ email, password });
    alert("Registration successful! You can now log in.");
    closeRegister();
});

// Login validation
function validateLogin() {
    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;

    // Check if email and password match any user in the array
    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);

    if (user) {
        alert("Login successful!");
        closeLogin();
        return true;
    } else {
        alert("Invalid email or password.");
        return false;
    }
}
