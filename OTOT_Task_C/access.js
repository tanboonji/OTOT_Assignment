const control = [
    {
        role: 'admin',
        access: ['/user', '/admin']
    },
    {
        role: 'user',
        access: ['/user']
    }
];

module.exports = { 
    control, 
};
