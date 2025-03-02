window.addEventListener('DOMContentLoaded', function () {
    var container = this.document.createElement('div');
    container.className = 'container';

    var headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    var h1 = document.createElement('h1');
    h1.textContent = 'Bubzilla Games';

    headerContainer.appendChild(h1);
    
    var hr = document.createElement('hr');
    hr.className = 'seperator';

    var navLinks = document.createElement('div');
    navLinks.innerHTML = '<a href="/">home</a> - <a href="/banana-blitz">Banana Blitz</a>';

    container.appendChild(headerContainer);
    container.appendChild(hr);
    container.appendChild(navLinks);

    document.body.insertBefore(container, document.body.firstChild)
}); 