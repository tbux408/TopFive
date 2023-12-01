// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Dummy data for the top 5 social media platforms
    const socialMediaList = [
        { name: "Facebook", description: "Facebook is a social networking site that makes it easy for you to connect and share with family and friends." },
        { name: "Twitter", description: "Twitter is an online news and social networking service where users post and interact with messages, known as tweets." },
        { name: "Instagram", description: "Instagram is a photo and video sharing social networking service." },
        { name: "LinkedIn", description: "LinkedIn is a business and employment-oriented online service that operates via websites and mobile apps." },
        { name: "YouTube", description: "YouTube is a video-sharing platform where users can upload, share, and view videos." },
    ];

    // Get the ul element
    const socialMediaListElement = document.getElementById("socialMediaList");

    // Populate the list
    socialMediaList.forEach((socialMedia) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h2>${socialMedia.name}</h2><p>${socialMedia.description}</p>`;
        socialMediaListElement.appendChild(listItem);
    });
});
