// Premium Feature Gate
// Use this to restrict features to Pro users

const isPremium = (user) => {
    return user && user.subscription === 'pro';
};

const requirePremium = (req, res, next) => {
    const user = req.user || JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!isPremium(user)) {
        return res.redirect('/upgrade');
    }
    
    next();
};

// Example usage in Express:
// app.get('/premium-feature', requirePremium, (req, res) => { ... });

module.exports = { isPremium, requirePremium };
