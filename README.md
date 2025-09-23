# GCL Construction Equipment LTD Website

A professional website for GCL Construction Equipment Ltd, a leading construction equipment rental and sales company in Kenya.

## Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with smooth navigation
- **Interactive Contact Form**: Lead generation with service selection
- **Smooth Scrolling**: Enhanced user experience with section navigation
- **Professional Layout**: Clean, modern design reflecting company values

### Logging System
The website includes comprehensive user interaction logging:

- **Page Load Tracking**: Records when users visit the site
- **Navigation Tracking**: Logs menu clicks and section views
- **Form Submissions**: Tracks contact form usage and service interests
- **Equipment Interest**: Monitors which equipment types users click on
- **Session Analytics**: Records time spent and scroll depth
- **Local Storage**: Logs persist across sessions for analysis

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action
2. **About Us**: Company profile and vision
3. **Rental & Sales**: Service offerings and support promise
4. **Products**: Equipment catalog with interactive elements
5. **Expertise**: Company capabilities and quality standards
6. **Projects**: Summary of company achievements
7. **Contact**: Professional contact form with service selection

## Technical Implementation

### Files Structure
```
project/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styling
├── script.js           # JavaScript functionality & logging
├── assets/             # Media files directory
└── README.md           # Project documentation
```

### Key Technologies
- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Modern styling with animations and responsive design
- **Vanilla JavaScript**: No dependencies, lightweight implementation
- **Local Storage**: Client-side data persistence for logging

### Logging Data Structure
```javascript
{
    timestamp: "2024-01-01T12:00:00.000Z",
    action: "page_load|navigation_click|form_submission|etc",
    details: { /* action-specific data */ },
    userAgent: "browser info",
    url: "current page url"
}
```

## Usage

1. **View Logs**: Open browser console to see real-time logging
2. **Access Stored Logs**: Use `logger.getLogs()` in console
3. **Clear Logs**: Use `logger.clearLogs()` in console
4. **Contact Form**: Fully functional with validation
5. **Mobile Navigation**: Hamburger menu for mobile devices

## Business Value

### For GCL Construction Equipment Ltd
- **Lead Generation**: Contact form captures potential customers
- **Service Showcase**: Comprehensive equipment and service display
- **Professional Presence**: Modern website enhances company credibility
- **User Analytics**: Logging provides insights into customer interests

### Real-World Applications
- **Equipment Rental Inquiries**: Direct contact for rental needs
- **Sales Leads**: Equipment purchase interest tracking
- **Service Requests**: Maintenance and consultation bookings
- **Market Research**: Understanding customer equipment preferences

## Deployment Ready

The website is production-ready with:
- ✅ Cross-browser compatibility
- ✅ Mobile responsiveness
- ✅ SEO-friendly structure
- ✅ Fast loading times
- ✅ Professional design
- ✅ User interaction tracking
- ✅ Contact form functionality

## Contact Information

**GCL Construction Equipment Ltd**
- Location: Highway Mall, Uhuru Highway, Nairobi
- Email: globeconceptske@gmail.com
- Phone: +254 (0) 733 977 750
- Website: www.essequipmentkenya.com

---

*Built with modern web standards for optimal performance and user experience.*