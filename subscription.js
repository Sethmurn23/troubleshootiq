// Subscription Status Checker

function getSubscriptionStatus() {
    const sub = localStorage.getItem('subscription');
    if (!sub) return { status: 'free', plan: 'free' };
    
    return JSON.parse(sub);
}

function isPro() {
    const status = getSubscriptionStatus();
    return status.status === 'active' && status.plan === 'pro';
}

// UI helper
function updateUIBasedOnSubscription() {
    const pro = isPro();
    
    // Show/hide premium elements
    document.querySelectorAll('.premium-only').forEach(el => {
        el.style.display = pro ? 'block' : 'none';
    });
    
    document.querySelectorAll('.free-only').forEach(el => {
        el.style.display = pro ? 'none' : 'block';
    });
}

// Run on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', updateUIBasedOnSubscription);
}

module.exports = { getSubscriptionStatus, isPro, updateUIBasedOnSubscription };
