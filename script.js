body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease;
    background-color: #fff; /* Default to light mode */
}

.dark-mode body {
    background-color: #333; /* Dark mode background color */
}

/* Add your other CSS styles here */
header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    position: relative;
    z-index: 999;
}

.toggle-container {
    position: absolute;
    top: 10px;
    right: 20px;
}

.toggle-label {
    cursor: pointer;
    margin-right: 10px;
    font-size: 20px;
    color: #fff;
}

.toggle-input {
    display: none;
}

.toggle-input:checked+.toggle-slider:before {
    transform: translateX(26px);
}

.toggle-slider {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
    background-color: #ccc;
    border-radius: 26px;
}

.toggle-slider:before {
    position: absolute;
    content: '';
    height: 22px;
    width: 22px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.toggle-slider.round {
    border-radius: 26px;
}

.toggle-slider.round:before {
    border-radius: 50%;
}

nav {
    background-color: #444;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    transition: background-color 0.3s ease;
}

nav a {
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: #555;
}

section {
    display: none;
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #333;
}

p {
    line-height: 1.6;
}

.icon {
    margin-right: 10px;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    transition: background-color 0.3s ease;
}

@media screen and (max-width: 768px) {
    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    nav a {
        margin: 5px;
    }

    header {
        padding: 10px 0;
    }

    .toggle-container {
        top: 5px;
        right: 10px;
    }

    .toggle-label {
        font-size: 16px;
    }
}
