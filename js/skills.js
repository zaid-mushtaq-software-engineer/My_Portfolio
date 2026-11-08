/**
 * Skills Module
 * Handles skills section content rendering (tag-based, no percentages)
 */

const Skills = {
    async init() {
        this.container = document.getElementById('skills-content');
        if (!this.container) return;

        try {
            const data = await DataLoader.loadSkills();
            this.render(data.categories);
        } catch (error) {
            console.error('Error loading skills:', error);
            this.renderError();
        }
    },

    render(categories) {
        if (!categories || categories.length === 0) {
            this.container.innerHTML = Renderer.noResults('No skills found');
            return;
        }

        const rowsHtml = categories
            .map((category, index) => Renderer.skillCategory(category, index))
            .join('');

        this.container.innerHTML = `<div class="skills-panel">${rowsHtml}</div>`;

        Utils.observeElements('.skill-row', 'is-visible', {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px',
        });
    },

    renderError() {
        this.container.innerHTML = Renderer.errorMessage('Failed to load skills');
    },
};

document.addEventListener('DOMContentLoaded', () => {
    Skills.init();
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Skills;
}
