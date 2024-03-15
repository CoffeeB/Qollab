const handleRedirect = (user_type) => {

    switch (user_type) {
        // case 4:
        //     windows.location = "/careseeker/dashboard";
        // break;
        // case 3:
        //     windows.location = "/therapist/dashboard";
        // break;
        case 2:
            window.location = "/onboarding";
        break;
        // Add more cases as needed for different user types
        default:
        // Redirect to a default dashboard if user_type is not recognized
        window.location = '/';
        break;
    }
};


function encodeSpecialCharacters(text) {
    return text.replace(/[^\w\s]/gi, function(match) {
    return `&#${match.charCodeAt(0)};`;
    });
}

function decodeSpecialCharacters(encodedText) {
    const doc = new DOMParser().parseFromString(encodedText, "text/html");
    return doc.documentElement.textContent;
}

function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
    hour12: true,
    day: 'numeric',
    month: 'long',
    year: 'numeric'

    };

    return date.toLocaleString('en-US', options);

}

function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function transformErrors(errors) {
    const transformedErrors = {};

    for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
        const errorArray = errors[key];
        const errorMessage = errorArray.length > 0 ? errorArray[0] : '';
        transformedErrors[key] = errorMessage;
    }
    }

    return transformedErrors;
}

const uploadToCloudinary = async (file) => {
    try {
    const resourceType = "auto";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("resource_type", resourceType);
    formData.append("upload_preset", "naijaartmart"); // Replace with your Cloudinary upload preset

    const response = await fetch("https://api.cloudinary.com/v1_1/dagq1id2g/image/upload", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();

    if (data.secure_url) {
        return data.secure_url;
    } else {
        console.error("Error uploading file to Cloudinary:", data);
        // throw new Error("Error uploading file to Cloudinary");
    }
    } catch (error) {
    console.error("Error:", error);
    // throw error;
    }
};

function  formatTime(time24) {
    // Validate input
    if (!time24 || typeof time24 !== 'string') {
    throw new Error('Invalid input. Please provide a valid time in 24-hour format.');
    }

    // Extract hours and minutes from the input string
    const [hours, minutes] = time24.split(':').map(Number);

    // Validate hours and minutes
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    throw new Error('Invalid time format. Please provide a valid time in 24-hour format.');
    }

    // Convert to 12-hour format
    let period = 'AM';
    let formattedHours = hours;

    if (hours >= 12) {
    period = 'PM';
    formattedHours = hours === 12 ? 12 : hours - 12;
    }

    if (hours === 0) {
    // Midnight
    formattedHours = 12;
    }

    // Add leading zero to minutes if necessary
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Construct the 12-hour format string
    const time12 = `${formattedHours}:${formattedMinutes} ${period}`;

    return time12;
}

 function timeAgo(timestamp) {
    const seconds = Math.floor((new Date() - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return `${interval} year${interval === 1 ? '' : 's'} ago`;
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return `${interval} month${interval === 1 ? '' : 's'} ago`;
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return `${interval} day${interval === 1 ? '' : 's'} ago`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return `${interval} hour${interval === 1 ? '' : 's'} ago`;
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return `${interval} minute${interval === 1 ? '' : 's'} ago`;
    }

    return `${Math.floor(seconds)} second${Math.floor(seconds) === 1 ? '' : 's'} ago`;
}  

export {
    handleRedirect,
    encodeSpecialCharacters,
    decodeSpecialCharacters,
    formatDate,
    isObject,
    transformErrors,
    uploadToCloudinary,
    formatTime,
    timeAgo
};