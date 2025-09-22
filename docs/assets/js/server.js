



/*404 route handler */
app.get('*', (request, response) => {
    response.status(404)
    response.render('404-page', {title: 'Page Not Found', status: 404});
});