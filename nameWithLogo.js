/**
 * Creates HTML for displaying a name with the EduCompanion logo
 * This is a utility function for static HTML sites (not React)
 * 
 * @param {string} name - The person's name to display
 * @param {string} className - Optional additional CSS classes
 * @returns {string} HTML string with logo and name
 * 
 * @example
 * // Usage in HTML:
 * <h3 class="text-xl font-bold">
 *   ${createNameWithLogo("Sriniketh (Sri) Srirangam")}
 * </h3>
 */
function createNameWithLogo(name, className = '') {
    const logoPath = 'Public/logo.jpg';
    const baseClasses = 'inline-flex items-center gap-2';
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
    
    return `
        <span class="${combinedClasses}">
            <img 
                src="${logoPath}" 
                alt="EduCompanion Logo" 
                class="h-6 w-auto object-contain"
                style="height: 24px;"
            />
            <span>${name}</span>
        </span>
    `;
}

/**
 * Renders name with logo into a DOM element
 * Useful for dynamically updating names after page load
 * 
 * @param {string|HTMLElement} target - CSS selector or DOM element where to render
 * @param {string} name - The person's name to display
 * @param {string} className - Optional additional CSS classes
 * 
 * @example
 * // Usage in JavaScript:
 * renderNameWithLogo('#sri-name', 'Sriniketh (Sri) Srirangam');
 */
function renderNameWithLogo(target, name, className = '') {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
        element.innerHTML = createNameWithLogo(name, className);
    }
}

