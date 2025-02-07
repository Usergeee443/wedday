

function selectPlan(plan) {
    // Reset radio buttons
    document.querySelectorAll('[id$="-radio"] div').forEach(el => {
        el.classList.add('hidden');
    });

    // Show selected radio button
    const radio = document.querySelector(`#${plan}-radio div`);
    radio.classList.remove('hidden');

    // Update features and button
    const features = document.querySelectorAll('.feature-item');

    features.forEach(feature => {
        const icon = feature.querySelector('.feature-icon');
        const title = feature.querySelector('.feature-title');
        const badge = feature.querySelector('.feature-badge');

        if (plan === 'premium') {
            feature.classList.remove('opacity-50');
            icon.classList.remove('text-gray-400');
            icon.classList.add('text-purple-600');
            title.classList.remove('text-gray-400');
            badge.classList.remove('bg-gray-200', 'text-gray-400');
            badge.classList.add('bg-orange-100', 'text-orange-600');
        } else {
            feature.classList.add('opacity-50');
            icon.classList.add('text-gray-400');
            icon.classList.remove('text-purple-600');
            title.classList.add('text-gray-400');
            badge.classList.add('bg-gray-200', 'text-gray-400');
            badge.classList.remove('bg-orange-100', 'text-orange-600');
        }
    });
}

function toggleFeatureInfo(element) {
    const info = element.querySelector('.feature-info');
    info.classList.toggle('hidden');
}

// Initialize with Basic plan selected
selectPlan('basic');